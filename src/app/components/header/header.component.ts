import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSignOutAlt = faSignOutAlt;
  faArrowLeft = faArrowLeft;

  userName = 'Ana Silva'; // Nome do usuário
  userEmail = 'ana.silva@example.com'; // E-mail do usuário
  userInitial = this.userName.charAt(0); // Ícone da letra do nome

  constructor(private router: Router) {}

  // Método para voltar
  goBack() {
    this.router.navigate(['/']); // Navega para a página inicial
  }

  // Método para logout
  logout() {
    this.router.navigate(['/login']);
  }
}
