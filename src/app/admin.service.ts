import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './virus-events/shared/user.model';
import { shareReplay, tap } from 'rxjs/operators';

/**
 * Admin service.
 */
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private userInfo$: Observable<User>;

  constructor(private readonly http: HttpClient) { }

  getUserInfo(): Observable<User> {
    if (!this.userInfo$) {
      const id = Math.floor(Math.random() * 100);

      this.userInfo$ = this.http.get<User>(`${environment.apiUrl}${environment.userEndpoint}/${id}`).pipe(
        shareReplay({refCount: false, bufferSize: 1})
      );
    }

    return this.userInfo$;
  }
}
