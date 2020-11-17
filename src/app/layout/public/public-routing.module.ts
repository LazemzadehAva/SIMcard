import { PublicComponent } from './public.component';
import { AuthGaurd } from './../../services/guards/admin-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';



const routes: Routes = [
  { path: '', component: ShoppingCardComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
