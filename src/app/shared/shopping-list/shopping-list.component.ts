import { DialogService } from 'primeng-lts/dynamicDialog';
import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/item.model';
import { SimDataService } from 'src/app/services/sim-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddNewSimComponent } from 'src/app/admin/add-new-sim/add-new-sim.component';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [DialogService]
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];
  // tslint:disable-next-line: no-inferrable-types
  isAdmin: boolean = false;
  constructor(
    private simDataService: SimDataService,
    activatedroute: ActivatedRoute,
    public dialogService: DialogService
  ) {
    this.simDataService.listUpdated.subscribe(
      () => this.allSims = this.simDataService.filteredItems
    );
    activatedroute.data.subscribe(x => this.isAdmin = x.mode === 'admin');
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
  addNewSim() {
    this.dialogService.open(AddNewSimComponent, {
      header: 'Choose a Car',
      width: '70%',
      style: { 'max-height': '500px', overflow: 'auto', 'background-color': 'lightgray' }
    });
  }

}

