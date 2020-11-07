
import { SimDataService } from './../services/sim-data.service';
import { ItemModel } from './../item.model';
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-unused-expression
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {



  filter: FilterModel[] = [];

 listOfOPerator: string[] = [];
 listOfType: any[] = [];

  constructor(private dataService: SimDataService) {
  }

  rangeValues: number[] = [50000, 50000000];
  handleChange() {

  }
  addFilter(model: FilterModel) {
    this.filter.push(model);
  }

  removeFilter(model: FilterModel) {
    this.filter = this.filter.filter(item => !(item.fieldName === model.fieldName && item.value === model.value));
  }

  onTypeClick(event) {
    const newFilter: FilterModel = { fieldName: event.target.dataset.name, value: event.target.value };
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
    this.listOfOPerator = this.dataService.onOperatorFilter();
    this.listOfType = this.dataService.onTypeFilter();
  }


}

export interface FilterModel {
  fieldName: string;
  value: string | number | boolean;
  type?: string;
}

