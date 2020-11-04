import { ItemModel } from './../item.model';
import { SimDataService } from './../services/sim-data.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];

  constructor(private simDataService: SimDataService) { }

  ngOnInit() {
    this.allSims = this.simDataService.filteredItems;
  }

  addToCart(item: ItemModel) {
     this.simDataService.addItemToCart(item);
    // this.simDataService.itemAdded.emit(item);
  }
}
