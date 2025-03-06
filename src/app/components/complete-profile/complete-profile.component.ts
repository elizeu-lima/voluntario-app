import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // Importação correta
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-complete-profile',
  standalone: true,
  imports: [CommonModule, FormsModule,  FontAwesomeModule],
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
  faSignOutAlt = faSignOutAlt;
  faArrowLeft = faArrowLeft;

  constructor(private router: Router, private location: Location) {}

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
  goBack() {
    if (window.history.length > 1) {
      this.location.back(); // Volta para a página anterior
    } else {
      this.router.navigate(['/dashboard']); // Se não houver histórico, vai para o dashboard
    }
  }
}
