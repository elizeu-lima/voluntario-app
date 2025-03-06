import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    // Lógica de autenticação (pode ser integrada com uma API)
    return true; // Simulação de sucesso
  }
}
