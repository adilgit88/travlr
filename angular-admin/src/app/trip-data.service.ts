import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './models/trip';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiUrl}/${tripCode}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip, this.getAuthOptions());
  }

  updateTrip(tripCode: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiUrl}/${tripCode}`, trip, this.getAuthOptions());
  }

  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${tripCode}`, this.getAuthOptions());
  }

  private getAuthOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authenticationService.getToken()}`
      })
    };
  }
}
