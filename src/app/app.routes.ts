import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'descripcion/:id', component: DescripcionComponent }
];