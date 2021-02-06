import { FilterModel } from './../layout/shared/filter/filter.component';
import { ItemModel } from './../item.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SimDataService {


  constructor(
    private storageService: LocalStorageService) {
    this.filteredItems = this.mock = storageService.getFromLocal('mockData');
  }


  filters: FilterModel[] = [];

  cart: ItemModel[] = [];

  mock: ItemModel[];

  filteredItems: ItemModel[];

  listUpdated = new EventEmitter();


  getAllSims() {
    return this.mock;
  }

  getUserCart() {
    return this.cart;
  }




  setUserCart(cart) {
    this.cart = cart;
  }

  addItemToCart(newItem): void {
    if (this.cart.indexOf(newItem) === -1) {
      this.cart.push(newItem);
      console.log(newItem);
    }


  }
  onOperatorFilter(): string[] {
    const operatorMap = [...new Set(this.mock.map(x => x.operator))];
    return operatorMap;
  }

  onTypeFilter(): any[] {
    const typeMap = [...new Set(this.mock.map(x => x.type))];
    return typeMap;
  }
  getId(): number[] {
    const allIds = [...new Set(this.mock.map(x => x.id))];
    return allIds;
  }



  filterResults() {
    const typeFilters = this.filters.filter(f => f.fieldName === 'type');
    const operatorFilters = this.filters.filter(f => f.fieldName === 'operator');
    const costFilters = this.filters.filter(f => f.fieldName === 'cost');
    const phoneNumberFilters = this.filters.filter(f => f.fieldName === 'phoneNumber');
    this.filteredItems = this.mock
      // this.operatorMap = this.mock
      // tslint:disable-next-line: triple-equals
      .filter(item => typeFilters.length === 0 || typeFilters.some(x => item.type == x.value))
      // tslint:disable-next-line: triple-equals
      .filter(item => operatorFilters.length === 0 || operatorFilters.some(x => item.operator == x.value))
      .filter(item => costFilters.length === 0 ||
        (!costFilters.some(x => x.type === 'max') || costFilters.some(x => x.type === 'max' && item.cost <= +(x.value)))
        && (!costFilters.some(x => x.type === 'min') || costFilters.some(x => x.type === 'min' && item.cost >= +(x.value))))
      // tslint:disable-next-line: max-line-length
      .filter(item => phoneNumberFilters.length === 0 || phoneNumberFilters.some(x => item.phoneNumber.split('-').join('').includes(x.value as string)));
    this.listUpdated.emit(this.filteredItems);
    console.log(this.filteredItems);
  }
}
