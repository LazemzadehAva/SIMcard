import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
