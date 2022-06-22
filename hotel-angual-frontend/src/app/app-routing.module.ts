import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutHostelComponent } from './about-hostel/about-hostel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PoolComponent } from './pool/pool.component';
import { RentingComponent } from './renting/renting.component';
import { RoomsComponent } from './rooms/rooms.component';

const routers: Routes = [
  { path: 'abutUs', component: AboutUsComponent },
  { path: 'abutHostel', component: AboutHostelComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'renting', component: RentingComponent },
  { path: 'pool', component: PoolComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
