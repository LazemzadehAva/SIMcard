import { DynamicDialogRef } from 'primeng-lts/dynamicdialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Mock } from 'protractor/built/driverProviders';
import { ItemModel } from 'src/app/item.model';
import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng-lts/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng-lts/dynamicdialog';


@Component({
  selector: 'app-add-new-sim',
  templateUrl: './add-new-sim.component.html',
  styleUrls: ['./add-new-sim.component.css'],
  providers: []
})
export class AddNewSimComponent implements OnInit {
  adminForm: FormGroup;
  simsType: SelectItem[];
  selectedOperator: ItemModel;
  selectedType: string;
  selectedAge: string;
  mock: ItemModel[] = [];
  constructor(
    private localStorageService: LocalStorageService,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ) {
    this.simsType = [
      { label: 'اپراتور', value: null },
      { label: 'ایرانسل', value: { id: 1, name: 'irancell', code: 'ir' } },
      { label: 'همراه اول', value: { id: 2, name: 'hamrah', code: 'ha' } },
      { label: 'رایتل', value: { id: 3, name: 'raitel', code: 'ra' } },

    ];
  }

  ngOnInit() {
    console.log(this.config.data.edit);
    this.adminForm = new FormGroup({
      operator: new FormControl(null, Validators.required),
      // tslint:disable-next-line: max-line-length
      cost: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.max(10000000), Validators.min(50000)]),
      // tslint:disable-next-line: max-line-length
      phoneNumber: new FormControl(null, [Validators.required]),
      type: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    });

    if (this.config.data && this.config.data.id) {
      this.initForm(this.config.data.id);
    }
  }

  initForm(id: number) {
    const sim = this.localStorageService.getSim(id);
    this.adminForm.setValue({
      phoneNumber: sim.phoneNumber,
      cost: sim.cost,
      operator: sim.operator,
      type: sim.type,
      status: sim.status
    });
  }

  addSimToList(newSim: ItemModel) {
    this.localStorageService.data.push(newSim);
    // console.log(this.data);

  }


  updateSim(id: number, newSim: ItemModel) {
    const index = this.localStorageService.data.indexOf(
      this.localStorageService.data.find(x => x.id === id));
    this.localStorageService.data[index] = newSim;
  }


  submit() {
    if (this.config.data.edit) {
      this.updateSim(this.config.data.id, this.adminForm.value);
    } else {
      this.addSimToList(this.adminForm.value);
    }
    this.ref.close();
  }
}
