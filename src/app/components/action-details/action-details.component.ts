import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-action-details',
  standalone: true,
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.css']
})
export class ActionDetailsComponent implements OnInit {
  action: Action | undefined;

  constructor(
    private route: ActivatedRoute,
    private actionService: ActionService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.action = this.actionService.getActionById(+id);
    }
  }
}
