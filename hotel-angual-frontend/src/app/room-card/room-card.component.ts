import { Component, OnInit, Input } from '@angular/core';
import { Room } from './room';
import { RoomServiceService } from './services/room-service.service';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})

export class RoomCardComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomServiceService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });

  }
  filterTerm: string;
}