import { AuthGaurd } from './../services/guards/auth-guard.service';
import { Error404Component } from './errors/error404/error404.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error403Component } from './errors/error403/error403.component';
import { ShoppingCardComponent } from './public/shopping-card/shopping-card.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivateChild: [AuthGaurd], children: [
      { path: '404', component: Error404Component },
      { path: '403', component: Error403Component },
      { path: 'cart', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
      { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ]
  },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
