
import { FormsModule } from '@angular/forms';
import { AddNewSimComponent } from './add-new-sim/add-new-sim.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng-lts/dynamicdialog';

// import { DialogService } from 'primeng/dynamicDialog';
// import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicDialog';

@NgModule({
  declarations: [
    AddNewSimComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DynamicDialogModule,
  ],
  entryComponents: [
    AddNewSimComponent
  ]
})
export class AdminModule { }
