import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importe o FontAwesomeModule
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule], // Adicione CommonModule aqui
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faUser = faUser;
  faBuilding = faBuilding;

  userType: 'volunteer' | 'organization' = 'volunteer';
  fullName: string = '';
  orgName: string = '';
  orgType: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  selectUserType(type: 'volunteer' | 'organization') {
    this.userType = type;
  }

  onSubmit() {
    console.log('Tipo de usuário:', this.userType);
    console.log('Nome completo:', this.fullName);
    console.log('Nome da organização:', this.orgName);
    console.log('Tipo de organização:', this.orgType);
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);

    this.router.navigate(['/dashboard']);
  }
}
