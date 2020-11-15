import { AdminModule } from './../admin/admin.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { SliderModule } from 'primeng-lts/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { AddNewSimComponent } from '../admin/add-new-sim/add-new-sim.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    RouterModule,
    AdminModule,
  ],
  entryComponents:[
    AddNewSimComponent
  ]
})
export class SharedModule { }
