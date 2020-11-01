import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { ShoppingCardComponent } from './../shopping-card/shopping-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  {path: 'shopping-card', component: ShoppingCardComponent },
  {path: '', component: ShoppingListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
