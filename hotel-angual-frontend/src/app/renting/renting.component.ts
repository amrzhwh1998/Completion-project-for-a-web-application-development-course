import { Component, OnInit } from '@angular/core';
import { RentingService } from './services/renting.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.css']
})
export class RentingComponent implements OnInit {
  roomForm = new FormGroup({
    firstName: new FormControl(''),
    roomid: new FormControl(null, [Validators.required, Validators.max(790), Validators.min(781)]),
    phoneNumer: new FormControl(null, [Validators.required]),
    receptionTime: new FormControl(''),
    departureTime: new FormControl(''),
    overAge18: new FormControl(''),
    overAge2: new FormControl(''),
    age2To17: new FormControl(''),
  });

  constructor(private rentingService: RentingService) { }

  ngOnInit(): void {
  }

  submitRoom() {
    if (this.roomForm.invalid) {
      alert('מספר חדר ומספר טלפון חובה.');
      return;
    }
    console.log("Sending form " + this.roomForm.value.phoneNumber);

    this.rentingService.sendRent(this.roomForm.value).subscribe(data => {
      if (data[0].status == 'ok') {
        alert(data[1].msg);
      } else {
        alert(data[1].msg);
      }
    }, error => alert('לא הצליחה לשלוח בקשה!'));
  }

}
