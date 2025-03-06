import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExploreActionsComponent } from './components/explore-actions/explore-actions.component';
import { ActionDetailsComponent } from './components/action-details/action-details.component';
import { RegisterComponent } from './components/register/register.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'explore-actions', component: ExploreActionsComponent },
  { path: 'action-details/:id', component: ActionDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'complete-profile', component: CompleteProfileComponent }, // Rota para completar perfil
];
