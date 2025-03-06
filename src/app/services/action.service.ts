import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private actions: Action[] = [
    { id: 1, title: 'Ação de Limpeza de Praia', organization: 'OceanCare Brasil', date: '12/06/2024' },
    { id: 2, title: 'Plantio de Árvores Urbanas', organization: 'Verde Cidade', date: '18/06/2024' }
  ];

  getActions(): Action[] {
    return this.actions;
  }

  getActionById(id: number): Action | undefined {
    return this.actions.find(action => action.id === id);
  }
}
