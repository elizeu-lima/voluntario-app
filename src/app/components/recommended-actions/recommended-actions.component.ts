import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-actions.component.html',
  styleUrls: ['./recommended-actions.component.css']
})
export class RecommendedActionsComponent {
  constructor(private router: Router) {}

  actions = [
    {
      id: 1, // Adicionando a propriedade id
      title: 'Ação de Limpeza de Praia',
      organization: 'OceanCare Brasil',
      date: '10/06/2024',
      image: 'assets/gettyimages-1430371482-612x612.jpg' // Caminho da imagem
    },
    {
      id: 2, // Adicionando a propriedade id
      title: 'Plantio de Árvores Urbanas',
      organization: 'Verde Cidade',
      date: '18/06/2024',
      image: 'assets/limpeza-de-praia.jpg' // Caminho da imagem
    },
    {
      id: 3, // Adicionando a propriedade id
      title: 'Doação de Alimentos',
      organization: 'Mesa Solidária',
      date: '20/06/2024',
      image: 'assets/plantar-arvores-como-parte-do-processo-de-reflorestamento_23-2149409969.avif' // Caminho da imagem
    },
  ];



  verdetalhes(actionId: number) {
    this.router.navigate(['/action-details', actionId]);
  }
}
