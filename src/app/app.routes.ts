import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
    loadComponent:() => import('./tab1/tab1.page').then((m) => m.Tab1Page),
  }]},
];

