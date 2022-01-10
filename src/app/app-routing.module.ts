import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './shared/components/callback/callback.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
