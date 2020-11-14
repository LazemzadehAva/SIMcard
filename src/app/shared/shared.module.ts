import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { SliderModule } from 'primeng/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingListComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
