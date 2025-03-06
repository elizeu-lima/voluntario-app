import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.css']
})
export class QuickActionsComponent {
  constructor(private router: Router) {}

  completeProfile() {
    this.router.navigate(['/complete-profile']);
  }

  exploreActions() {
    this.router.navigate(['/explore-actions']);
  }
}
