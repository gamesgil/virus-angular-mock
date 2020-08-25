import { InfectionData } from './infection-content/infection-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

/**
 * Infection management service.
 */
@Injectable()
export class InfectionManagementService {
  selectedInfectionId: number;

  infections: InfectionData[] = [
    {coordinate: {lon: 1, lat: 2}, date: new Date()}
  ];

  selectedInfection$ = new Subject<InfectionData>();

  constructor(private readonly http: HttpClient) { }

  setInfectionId(id: number) {
    if (id < this.infections.length) {
      this.selectedInfection$.next(this.infections[id]);
    }
  }
}
