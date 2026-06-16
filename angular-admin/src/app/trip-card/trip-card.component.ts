import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: false,
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() editTrip = new EventEmitter<Trip>();
  @Output() deleteTrip = new EventEmitter<Trip>();

  onEditTrip(): void {
    this.editTrip.emit(this.trip);
  }

  onDeleteTrip(): void {
    this.deleteTrip.emit(this.trip);
  }
}
