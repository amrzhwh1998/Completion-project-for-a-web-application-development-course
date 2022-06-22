import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUsComponent } from '../contact-us.component';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  rentingUrl = 'http://localhost:3000/api/contactus';

  constructor(private http: HttpClient) { }
  sending(contactUsForm: ContactUsComponent): Observable<any> {
    const body = contactUsForm;
    const bodyy = JSON.stringify(contactUsForm);
    console.log('body : ' + bodyy);
    return this.http.post<ContactUsComponent>(this.rentingUrl, body);
  }
}