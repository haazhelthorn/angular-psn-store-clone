import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  register(email: string, password: string) {
    this.authService.register(email, password).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
