import { environment } from './../../environments/environment';
import { InfectionData } from './infection-content/infection-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';
/**
 * Infection management service.
 */
@Injectable()
export class InfectionManagementService {
  selectedInfectionId: number;

  infections: InfectionData[] = [];

  selectedInfection$ = new Subject<InfectionData>();

  constructor(private readonly http: HttpClient) {}

  loadData() {
    this.http.get<InfectionData[]>(`${environment.apiUrl}${environment.infectionsEndpoint}`).pipe(
      map(data => data.sort((item1, item2) => item1.date < item2.date ? 1 : -1)),
    ).subscribe(
      data => this.infections = data
    );
  }

  setInfectionId(id: number) {
    if (id < this.infections.length) {
      this.selectedInfection$.next(this.infections[id]);
    }
  }
}
