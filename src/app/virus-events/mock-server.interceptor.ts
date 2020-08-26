import { InfectionData } from './infection-content/infection-data.model';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './shared/user.model';

@Injectable()
export class MockServerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const arrUrl = request.url.split('/');

    console.log({arrUrl})

    const body = request.url.includes('user') ? this.getMockUser(arrUrl[arrUrl.length - 1]) : this.getMockInfections();
    return of(new HttpResponse({status: 200, body}));
  }

  getMockInfections(): InfectionData[] {
    const result = [];

    for(let i = 0; i < Math.floor(Math.random() * 10); i++) {
      result.push(
        Object.assign(new InfectionData(), {
          coordinate: {lon: Math.random() * 100, lat: Math.random() * 100},
          date: new Date(new Date().getTime() - Math.floor(Math.random() * 1000000)).toISOString()
        })
      );
    }

    return result;
  }

  getMockUser(id: string): User {
    const fNames = ['John', 'Jane', 'Mike', 'Suzy'];
    const lNames = ['Smith', 'Brown', 'Doe'];

    const result = new User();
    result.id = Number(id);
    result.fname = fNames[Math.floor(Math.random() * fNames.length)];
    result.lname = lNames[Math.floor(Math.random() * lNames.length)];

    return result;
  }
}
