import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: false,
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  message = '';
  originalTripCode = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tripDataService: TripDataService,
    public router: Router
  ) {
    this.editForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('tripCode');

    if (!tripCode) {
      this.router.navigate(['']);
      return;
    }

    this.originalTripCode = tripCode;

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (trip: Trip) => {
        this.editForm.patchValue({
          ...trip,
          start: this.toDateInputValue(trip.start)
        });
      },
      error: (err: unknown) => {
        this.message = 'Unable to load trip for editing.';
        console.error(err);
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.message = '';

    if (this.editForm.invalid) {
      this.message = 'Complete all required fields before updating.';
      return;
    }

    this.tripDataService.updateTrip(this.originalTripCode, this.editForm.value as Trip).subscribe({
      next: () => this.router.navigate(['']),
      error: (err: unknown) => {
        this.message = 'Unable to update trip.';
        console.error(err);
      }
    });
  }

  private toDateInputValue(value: string): string {
    if (!value) {
      return '';
    }

    return value.substring(0, 10);
  }
}
