import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { LaptopDetailsPage } from './pages/laptop-details/laptop-details';
import { Enquiry } from './pages/enquiry/enquiry';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'laptop/:id', component: LaptopDetailsPage },
  { path: 'enquiry', component: Enquiry },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
];
