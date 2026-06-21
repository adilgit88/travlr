import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-admin';

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
