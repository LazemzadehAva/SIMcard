import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/item.model';
import { SimDataService } from 'src/app/services/sim-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddNewSimComponent } from 'src/app/admin/add-new-sim/add-new-sim.component';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { MessageService } from 'primeng-lts/api';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [DialogService, MessageService]
})
export class ShoppingListComponent implements OnInit {

  allSims: ItemModel[] = [];
  // tslint:disable-next-line: no-inferrable-types
  isAdmin: boolean = false;
  constructor(
    private simDataService: SimDataService,
    activatedroute: ActivatedRoute,
    public dialogService: DialogService,
    private localStorageService: LocalStorageService,
    private messageService: MessageService
  ) {
    this.simDataService.listUpdated.subscribe(
      () => this.allSims = this.simDataService.filteredItems
    );
    activatedroute.data.subscribe(x => this.isAdmin = x.mode === 'admin');
  }

  getDropMenu(context: ItemModel) {
    return [
      {
        label: 'ویرایش', icon: 'pi pi-refresh', command: () => {
          this.update(context.id);
        }

        // {
        //   label: 'حذف', icon: 'pi pi-times', command: () => {
        //     this.delete();
        //   }
      },
    ];
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
      data:{
        edit: false
      },
      header: 'سیم کارت',
      width: '50%',
      style: { 'max-height': '500px', overflow: 'auto', 'background-color': 'lightgray' }
    });
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


