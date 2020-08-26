import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './virus-events/shared/user.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly http: HttpClient) { }

  getUserInfo(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}${environment.userEndpoint}/${id}`, ).pipe(
      shareReplay({refCount: true, bufferSize: 1})
    );
  }
}
