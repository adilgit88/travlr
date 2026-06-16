import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../trip-data.service';

@Component({
  selector: 'app-trip-listing',
  standalone: false,
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('TripListingComponent loaded');
    this.getTrips();
  }

  getTrips(): void {
    console.log('Calling API from Angular component');

    this.tripDataService.getTrips().subscribe({
      next: (data: Trip[]) => {
        console.log('Trips loaded from API into component:', data);

        this.trips = Array.isArray(data) ? data : [];
        this.message = '';

        console.log('Trips saved to page variable:', this.trips.length);

        // Force Angular to refresh the HTML after API data loads
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Angular failed to load trips:', err);
        this.message = 'Unable to load trips from API.';
        this.cdr.detectChanges();
      }
    });
  }

  addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  editTrip(trip: Trip): void {
    this.router.navigate(['edit-trip', trip.code]);
  }

  deleteTrip(trip: Trip): void {
    if (confirm(`Delete ${trip.name}?`)) {
      this.tripDataService.deleteTrip(trip.code).subscribe({
        next: () => this.getTrips(),
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }
}