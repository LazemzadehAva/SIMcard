import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { SliderModule } from 'primeng-lts/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNewSimComponent } from './admin/add-new-sim/add-new-sim.component';
import { SplitButtonModule } from 'primeng-lts/splitbutton';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    FilterComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    AdminModule,
    SplitButtonModule,
    SharedRoutingModule,
  ],
  entryComponents: [
    AddNewSimComponent
  ]
})
export class SharedModule { }
