import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ShoppingCardComponent } from './public/shopping-card/shopping-card.component';
import { ShoppingListComponent } from './shared/shopping-list/shopping-list.component';


const routes: Routes = [
    { path: '', component: ShoppingListComponent },
    { path: 'shopping-card', component: ShoppingCardComponent },
    { path: 'login', component: LoginComponent}
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
