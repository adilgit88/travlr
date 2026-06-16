import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: false,
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  addForm: FormGroup;
  submitted = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private tripDataService: TripDataService,
    public router: Router
  ) {
    this.addForm = this.fb.group({
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

  get f() {
    return this.addForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.message = '';

    if (this.addForm.invalid) {
      this.message = 'Complete all required fields before saving.';
      return;
    }

    this.tripDataService.addTrip(this.addForm.value as Trip).subscribe({
      next: () => this.router.navigate(['']),
      error: (err: unknown) => {
        this.message = 'Unable to add trip.';
        console.error(err);
      }
    });
  }
}
