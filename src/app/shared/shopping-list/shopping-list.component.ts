import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/item.model';
import { SimDataService } from 'src/app/services/sim-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];
  // tslint:disable-next-line: no-inferrable-types
  isAdmin: boolean = false;
  dialogService: any;
  constructor(
    private simDataService: SimDataService,
    acticatedroute: ActivatedRoute) {
    this.simDataService.listUpdated.subscribe(
      () => this.allSims = this.simDataService.filteredItems
    );
    acticatedroute.data.subscribe(x => this.isAdmin = x.mode === 'admin');
  }

  ngOnInit() {
    this.allSims = this.simDataService.filteredItems;
  }

  addToCart(item: ItemModel) {
    this.simDataService.addItemToCart(item);
    // this.simDataService.itemAdded.emit(item);
  }

  // addToList(item) {
  //   this.allSims.push(item);
  // }

  // deleteFromList(id: number) {
  //   this.allSims = this.allSims.filter(x => x.id !== id);
  // }


}

