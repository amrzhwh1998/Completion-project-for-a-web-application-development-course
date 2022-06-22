import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomCardComponent } from '../room-card/room-card.component';
import { GraphService } from './services/graph.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  percent = 0;
  title = this.percent + '%';
  allrented = "";

  constructor(private graphService: GraphService) {
    //this.percent = this.graphService.getRoomsGraph();
    this.graphService.getRoomsGraph().subscribe(rentedRooms => {
      console.log("Rooms = " + JSON.stringify(rentedRooms));
      this.percent = (rentedRooms.length / 10) * 100;//Math.round...
      for (let i = 0; i < rentedRooms.length; i++) {
        this.allrented += '(' + rentedRooms[i].roomid + ')';
      }
      this.title = this.percent + '%';
    });
  }



  ngOnInit(): void {
  }
}
