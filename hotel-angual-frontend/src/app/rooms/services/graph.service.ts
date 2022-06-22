import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  rentingUrl = 'http://localhost:3000/api/rentingForm';
  constructor(private http: HttpClient) { }

  getRoomsGraph(): Observable<any[]> {
    //return 30;
    //get(/api/renting)
    return this.http.get<any[]>(this.rentingUrl);
  }

}
