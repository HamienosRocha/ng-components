import { Routes } from '@angular/router';
import { PageHomeListComponent } from './pages/page-home-list/page-home-list.component';
import { PageTablesComponent } from './pages/page-tables/page-tables.component';

export const routes: Routes = [
  {
    path: '',
    component: PageHomeListComponent,
  },
  {
    path: 'tables',
    component: PageTablesComponent,
  }
];
