import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { RentingComponent } from '../renting.component';
@Injectable({
  providedIn: 'root'
})
export class RentingService {

  rentingUrl = 'http://localhost:3000/api/rentroom';

  constructor(private http: HttpClient) { }
  sendRent(roomForm: RentingComponent): Observable<any> {
    const body = roomForm;
    const bodyy = JSON.stringify(roomForm);
    console.log('body : ' + bodyy);
    return this.http.post<RentingComponent>(this.rentingUrl, body);

  }
}
