import { SimDataService } from './../services/sim-data.service';
import { ItemModel } from './../item.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filter: FilterModel[] = [];


  constructor(private dataService: SimDataService) { }

  addFilter(model: FilterModel) {
    this.filter.push(model);
  }

  removeFilter(model: FilterModel) {
    this.filter = this.filter.filter(item => !(item.fieldName === model.fieldName && item.value === model.value));
  }

  onTypeClick(event) {
    const newFilter: FilterModel = { fieldName: event.target.dataset.name, value: event.target.dataset.value };
    if (event.target.checked) {
      this.addFilter(newFilter);
    } else {
      this.removeFilter(newFilter);
    }
    this.dataService.filterResults(this.filter);
  }

  onRangeClick(event) {
    let newFilter: FilterModel;
    if (event.target.dataset.minvalue) {
      newFilter = { fieldName: event.target.dataset.name, value: event.target.dataset.minvalue, type: 'min' };
      if (event.target.checked) {
        this.addFilter(newFilter);
      } else {
        this.removeFilter(newFilter);
      }
    }
    if (event.target.dataset.maxvalue) {
      newFilter = { fieldName: event.target.dataset.name, value: event.target.dataset.maxvalue, type: 'max' };
      if (event.target.checked) {
        this.addFilter(newFilter);
      } else {
        this.removeFilter(newFilter);
      }
    }
    this.dataService.filterResults(this.filter);
  }

  ngOnInit() {
  }
}

export interface FilterModel {
  fieldName: string;
  value: string | number | boolean;
  type?: string;
}
