import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { ReactiveFormsModule }  from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent }    from './trip-card/trip-card.component';
import { AddTripComponent }     from './add-trip/add-trip.component';
import { EditTripComponent }    from './edit-trip/edit-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}