import { ItemModel } from './../item.model';
import { SimDataService } from './../services/sim-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
 Num: any = 0;
 searchResult: ItemModel[] = [];
  constructor(
    private simDataService: SimDataService
  ) { }

  ngOnInit() {
  }
  searchby() {
  this.searchResult = this.simDataService.search(this.Num);
  console.log (this.searchResult);
  }
}
