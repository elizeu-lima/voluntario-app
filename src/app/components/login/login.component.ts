import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica de autenticação (pode ser integrada com um serviço)
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/dashboard']);
  }
}
