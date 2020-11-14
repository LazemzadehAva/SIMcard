import { AuthGaurd } from './services/guards/auth-guard.service';
import { Error404Component } from './errors/error404/error404.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ShoppingCardComponent } from './public/shopping-card/shopping-card.component';
import { ShoppingListComponent } from './shared/shopping-list/shopping-list.component';


const routes: Routes = [
    { path: '', component: ShoppingListComponent },
    { path: 'admin', component: ShoppingListComponent, data: {mode: 'admin'} },
    { path: 'shopping-card', component: ShoppingCardComponent, canActivate: [AuthGaurd] },
    { path: 'login', component: LoginComponent},
    {path: '**', component: Error404Component}
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
