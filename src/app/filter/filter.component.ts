
import { SimDataService } from './../services/sim-data.service';
import { ItemModel } from './../item.model';
import { Component, OnInit, EventEmitter } from '@angular/core';
// tslint:disable-next-line: no-unused-expression
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  [x: string]: any;



//  filters: FilterModel[] = [];

 listOfOPerator: string[] = [];
 listOfType: any[] = [];

  constructor(private dataService: SimDataService) {
  }

  rangeValues: number[] = [50000, 10000000];
  handleChange(e) {
}
  addFilter(model: FilterModel) {
    this.filters.push(model);
  }

  removeFilter(model: FilterModel) {
     this.filters = this.filters.filter(item => !(item.fieldName === model.fieldName && item.value === model.value));
    
  }

  onTypeClick(event) {
    const newFilter: FilterModel = { fieldName: event.target.dataset.name, value: event.target.value };
    if (event.target.checked) {
      this.addFilter(newFilter);
    } else {
      this.removeFilter(newFilter);
    }
    this.dataService.filterResults(this.filters);
  }

  onRangeClick(event) {
    const minFilter: FilterModel = {fieldName: 'cost' , value: event.values[0], type: 'min'};
    const maxFilter: FilterModel = {fieldName: 'cost' , value: event.values[1], type: 'max'};
    this.filters = this.filters.filter(item => !(item.fieldName === 'cost' && (item.type === 'min' || item.type === 'max')));
    this.addFilter(minFilter);
    this.addFilter(maxFilter);

    // let newFilter: FilterModel;
    // if (event.target.dataset.minvalue) {
    //   newFilter = { fieldName: event.target.dataset.name, value: event.target.dataset.minvalue, type: 'min' };
    //   console.log(newFilter);
    //   if (event.target.checked) {
    //     this.addFilter(newFilter);
    //   } else {
    //     this.removeFilter(newFilter);
    //   }
    // }
    // if (event.target.dataset.maxvalue) {
    //   newFilter = { fieldName: event.target.dataset.name, value: event.target.dataset.maxvalue, type: 'max' };
    //   if (event.target.checked) {
    //     this.addFilter(newFilter);
    //   } else {
    //     this.removeFilter(newFilter);
    //   }
    // }
    this.dataService.filterResults(this.filters);
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

