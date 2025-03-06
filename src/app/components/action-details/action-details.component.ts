import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';  // Certifique-se de que Action tem as novas propriedades
import { Location } from '@angular/common'; // Importação correta
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-details',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent implements OnInit {
  action: Action | undefined;
  faSignOutAlt = faSignOutAlt;
  faArrowLeft = faArrowLeft;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private actionService: ActionService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Obtemos a ação com base no ID e garantimos que está passando o ID correto
      this.action = this.actionService.getActionById(+id);
    }
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back(); // Volta para a página anterior
    } else {
      this.router.navigate(['/dashboard']); // Se não houver histórico, vai para o dashboard
    }
  }
}
