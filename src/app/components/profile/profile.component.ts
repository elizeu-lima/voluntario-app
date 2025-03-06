import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router) {}
  user = {
    name: 'Ana Silva',
    email: 'ana.silva@example.com',
    phone: '(00) 00000-0000',
    address: 'Rua, número, Estado'
  };

  skills = ['Habilidade 1', 'Habilidade 2'];
  preferences = ['Preferência 1', 'Preferência 2'];
  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
