import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hostel-app';
  public isMenuCollapsed = true;
  target: any;
  visability:boolean;
  clicked(event) {
    this.visability = false;
    this.target = event.target.innerText;
  }
}
