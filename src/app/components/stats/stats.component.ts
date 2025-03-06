import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faUsers, faCalendar, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  faHeart = faHeart; // Ícone de coração
  faUsers = faUsers; // Ícone de pessoas
  faCalendar = faCalendar; // Ícone de calendário
  faChartLine = faChartLine; // Ícone de gráfico
}
