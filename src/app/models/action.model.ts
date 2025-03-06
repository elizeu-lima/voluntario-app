export interface Action {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;  // Nova propriedade
  location: string;     // Nova propriedade
}

