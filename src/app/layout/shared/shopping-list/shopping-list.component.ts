import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/item.model';
import { SimDataService } from 'src/app/services/sim-data.service';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { MessageService } from 'primeng-lts/api';
import { AddNewSimComponent } from '../admin/add-new-sim/add-new-sim.component';




@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [DialogService, MessageService]
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];
  // tslint:disable-next-line: no-inferrable-types
  isAdmin: boolean = false;
  constructor(
    private simDataService: SimDataService,
    activatedroute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    public dialogService: DialogService

  ) {
    this.simDataService.listUpdated.subscribe(
      () => this.allSims = this.simDataService.filteredItems
    );
    activatedroute.data.subscribe(x => this.isAdmin = x.mode === 'admin');
  }

  ngOnInit() {
    this.allSims = this.simDataService.filteredItems;
    this.allSims = this.localStorageService.data;
  }

  addToCart(item: ItemModel) {
     this.simDataService.addItemToCart(item);
    // this.simDataService.itemAdded.emit(item);
  }


  addNewSim() {
    this.dialogService.open(AddNewSimComponent, {
      data: {
        edit: false
      },
      header: 'سیم کارت',
      width: '50%',
      style: { 'max-height': '500px', overflow: 'auto', 'background-color': 'black' }
    });
  }

  getDropMenu(context: ItemModel) {
    return [
      {
        label: 'ویرایش', icon: 'pi pi-refresh', command: () => {
          this.update(context.id);
        }
      },
    ];
  }

  update(id: number) {
    this.dialogService.open(AddNewSimComponent, {
      data: {
        id,
        edit: true,
      },
      header: 'سیم کارت',
      width: '50%',
      style: { 'max-height': '500px', overflow: 'auto', 'background-color': 'lightgray' }
    });
    // ref.onClose.subscribe((allSims:
    //   allSims) => {
    //     if (itemModel) {
    //         this.messageService.add({severity: 'info', summary: 'Product Selected'});
    //     }
    // }
    // );
  }

  delete(id: number) {
    const index = this.localStorageService.data.indexOf(
    this.localStorageService.data.find(x => x.id === id));
    this.localStorageService.data.splice(index, 1);
    console.log(index);
  }
}


