import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-hostel',
  templateUrl: './about-hostel.component.html',
  styleUrls: ['./about-hostel.component.css']
})
export class AboutHostelComponent implements OnInit {

  constructor() {
    console.log('About Hostel Component ctor');
  }



  ngOnInit(): void {
  }

}
