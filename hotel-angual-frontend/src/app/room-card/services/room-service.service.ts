import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../room';


@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  roomsUrl = 'http://localhost:3002/api/rooms';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }

}
