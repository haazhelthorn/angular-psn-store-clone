import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // Substituir '/api/login' pelo endpoint do backend
    return this.http.post('/api/login', {email, password}).pipe(
      tap(() => this.isLoggedIn = true)
    );
  }

  register(email: string, password: string) {
    // Substituir '/api/register'
    return this.http.post('/api/register', {email, password}).pipe(
      tap(() => this.isLoggedIn = true)
    );
  }

  logout() {
    // Substituir '/api/logout' 
    return this.http.post('/api/logout', {}).pipe(
      tap(() => this.isLoggedIn = false)
    );
  }
}
