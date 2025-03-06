import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actions: Action[] = [
    {
      id: 1,
      title: 'Ação de Limpeza de Praia',
      organization: 'ONG Ecologia',
      date: '2025-03-15',
      description: 'Ação para limpar as praias e promover a preservação do meio ambiente.',
      location: 'Praia de Copacabana, Rio de Janeiro'
    },
    {
      id: 2,
      title: 'Plantio de Árvores Urbanas',
      organization: 'Projeto Verde',
      date: '2025-04-20',
      description: 'Plantar árvores para melhorar a qualidade do ar nas áreas urbanas.',
      location: 'Praça da Árvore, São Paulo'
    },
    // Adicione mais ações conforme necessário
  ];

  constructor() {}

  // Método para obter uma ação pelo ID
  getActionById(id: number): Action | undefined {
    return this.actions.find(action => action.id === id);
  }

  // Método para obter todas as ações
  getActions(): Action[] {
    return this.actions;
  }
}
