import { LocalStorageService } from './../local-storage.service';
import { SimDataService } from './../services/sim-data.service';
import { ItemModel } from './../item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  cartItems: ItemModel[] = [];

  constructor(private dataService: SimDataService,
              private storageService: LocalStorageService) { }

  ngOnInit() {
     this.cartItems = this.dataService.getUserCart();
    // this.dataService.itemAdded.subscribe((item: ItemModel) => {
    //   if (this.cartItems.findIndex(x => x.id === item.id) < 0) {
    //     this.cartItems.push(item);
    //   }
    // }
    // );
  }
  delete(id: number) {
    this.cartItems = this.cartItems.filter(x => x.id !== id);
  }
}
