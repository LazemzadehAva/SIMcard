import { PublicRoutingModule } from './public-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';



@NgModule({
  declarations: [
    ShoppingCardComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
