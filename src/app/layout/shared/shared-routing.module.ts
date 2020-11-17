import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'admin', component: ShoppingListComponent, data: { mode: 'admin' } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
