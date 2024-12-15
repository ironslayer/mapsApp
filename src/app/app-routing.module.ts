import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maps',
                  // callback
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsModule ),
  },
  {
    path: 'alone',
    // Un componente es como un módulo
    // Carga perezosa
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component')
    .then( m => m.AlonePageComponent ),
  },
  {
    path: '**',
    redirectTo: 'maps',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
