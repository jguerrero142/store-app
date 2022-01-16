import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './shared/components/callback/callback.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'reserva', loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaModule) },
  { path: 'caja', loadChildren: () => import('./caja/caja.module').then(m => m.CajaModule) },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
