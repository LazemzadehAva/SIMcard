import { FilterModel } from './../filter/filter.component';
import { ItemModel } from './../item.model';
import { SimDataService } from './../services/sim-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
 Num: any;
 searchResult: ItemModel[] = [];
  constructor(
    private simDataService: SimDataService
  ) { }

  ngOnInit() {
  }
  searchby() {
    console.log(this.Num);
    const newFilterItem: FilterModel = {fieldName: 'phoneNumber' , value: this.Num };
    this.simDataService.filters = this.simDataService.filters.filter((item) => !(item.fieldName === 'phoneNumber'));
    if (newFilterItem.value !== null) {
  this.simDataService.filters.push(newFilterItem);
  }
    this.simDataService.filterResults();
  }
}
