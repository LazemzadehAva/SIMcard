import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewSimComponent } from './add-new-sim/add-new-sim.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicDialogModule} from 'primeng-lts/dynamicdialog';
import {DropdownModule} from 'primeng-lts/dropdown';
import { InputTextModule } from 'primeng-lts/inputtext';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import {ButtonModule} from 'primeng-lts/button';
import {InputMaskModule} from 'primeng-lts/inputmask';
@NgModule({
  declarations: [
    AddNewSimComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DynamicDialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  entryComponents: [
    AddNewSimComponent
  ]
})
export class AdminModule { }
