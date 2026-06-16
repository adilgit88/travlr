import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    console.log('TripDataService GET all:', this.apiUrl);
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(tripCode: string): Observable<Trip> {
    console.log('TripDataService GET one:', `${this.apiUrl}/${tripCode}`);
    return this.http.get<Trip>(`${this.apiUrl}/${tripCode}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  updateTrip(tripCode: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiUrl}/${tripCode}`, trip);
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${tripCode}`);
  }
}