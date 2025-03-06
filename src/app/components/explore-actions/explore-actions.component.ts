import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-explore-actions',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './explore-actions.component.html',
  styleUrls: ['./explore-actions.component.css']
})
export class ExploreActionsComponent {
  actions: Action[] = [];

  constructor(private actionService: ActionService) {
    this.actions = this.actionService.getActions();
  }
}
