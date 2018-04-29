import { RouterModule } from '@angular/router';
import {UserListComponent} from '../components/user-list/user-list.component';
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import { ModuleWithProviders } from '@angular/core';
const appRoutes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '',
   redirectTo: '/user-list',
   pathMatch: 'full'
  },
];
export let routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
