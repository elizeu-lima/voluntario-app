import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-explore-actions',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './explore-actions.component.html',
  styleUrls: ['./explore-actions.component.css']
})
export class ExploreActionsComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  faArrowLeft = faArrowLeft;
  actions: Action[] = [];

  constructor(
    private actionService: ActionService,
    private router: Router,
    private location: Location
  ) {}

  // Garantir que a listagem de ações seja feita após o componente ser inicializado
  ngOnInit(): void {
    this.actions = this.actionService.getActions(); // Obter as ações do serviço
  }

  // Navega para os detalhes da ação
  verdetalhes(actionId: number): void {
    this.router.navigate(['/action-details', actionId]);
  }

  // Função para voltar à página anterior ou ao dashboard
  goBack(): void {
    if (window.history.length > 1) {
      this.location.back(); // Volta para a página anterior
    } else {
      this.router.navigate(['/dashboard']); // Se não houver histórico, vai para o dashboard
    }
  }
}
