
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/item.model';
import { SimDataService } from 'src/app/services/sim-data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];

  constructor(private simDataService: SimDataService) {
    this.simDataService.listUpdated.subscribe(
      () => this.allSims = this.simDataService.filteredItems
    );
   }

  ngOnInit() {
    this.allSims = this.simDataService.filteredItems;
  }

  addToCart(item: ItemModel) {
     this.simDataService.addItemToCart(item);
    // this.simDataService.itemAdded.emit(item);
  }
}
