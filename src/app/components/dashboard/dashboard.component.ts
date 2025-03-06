import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { StatsComponent } from '../stats/stats.component';
import { RecommendedActionsComponent } from '../recommended-actions/recommended-actions.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, StatsComponent, RecommendedActionsComponent, QuickActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
