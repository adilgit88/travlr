import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'travlr-token';

  constructor(private http: HttpClient) {}

  public login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, user).pipe(
      tap((response: AuthResponse) => this.saveToken(response.token))
    );
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    const payload = this.getPayload(token);
    return !!payload && payload.exp > Date.now() / 1000;
  }

  public getCurrentUserName(): string {
    const payload = this.getPayload(this.getToken());
    return payload?.name || 'Admin';
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getPayload(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    } catch (err) {
      return null;
    }
  }
}
