import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { AdminModule } from './admin/admin.module';
import { SliderModule } from 'primeng-lts/slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng-lts/splitbutton';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    ShoppingListComponent,
    FilterComponent,
    SharedComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    AdminModule,
    SplitButtonModule,
    SharedRoutingModule,
    DynamicDialogModule,

  ],
  entryComponents: [

  ]
})
export class SharedModule { }
