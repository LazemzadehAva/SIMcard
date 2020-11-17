import { AuthGaurd } from './../../services/guards/auth-guard.service';
import { AdminGaurd } from './../../services/guards/admin-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  { path: '', component: ShoppingListComponent, canActivate: [AuthGaurd] },
  { path: 'admin', component: ShoppingListComponent, data: { mode: 'admin' }, canActivate: [AdminGaurd] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
