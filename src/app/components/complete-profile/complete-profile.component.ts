import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complete-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css']
})
export class CompleteProfileComponent {
  fullName: string = '';
  phone: string = '';
  city: string = '';
  bio: string = '';
  skills: string = '';
  preferences: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Nome completo:', this.fullName);
    console.log('Telefone:', this.phone);
    console.log('Cidade:', this.city);
    console.log('Biografia:', this.bio);
    console.log('Habilidades:', this.skills);
    console.log('Preferências:', this.preferences);

    // Navega de volta para o dashboard após salvar
    this.router.navigate(['/dashboard']);
  }
}
