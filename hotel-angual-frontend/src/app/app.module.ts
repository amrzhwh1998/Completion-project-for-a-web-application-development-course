import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadPhComponent } from './head-ph/head-ph.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutHostelComponent } from './about-hostel/about-hostel.component';
import { IconsDivComponent } from './icons-div/icons-div.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoomCardComponent } from './room-card/room-card.component';
import { RentingComponent } from './renting/renting.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PoolComponent } from './pool/pool.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeadPhComponent,
    AboutUsComponent,
    AboutHostelComponent,
    IconsDivComponent,
    ContactUsComponent,
    RoomsComponent,
    RoomCardComponent,
    RentingComponent,
    PoolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#49a64d",
      "outerStrokeGradientStopColor": "#99cd9c",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
