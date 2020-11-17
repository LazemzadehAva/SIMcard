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


  // operator: Mock[] = [];
  // type: Mock[] = [];
  filters: FilterModel[] = [];



  cart: ItemModel[] = [];

  mock: ItemModel[];

  filteredItems: ItemModel[];

  // onCheckType(typeEl: any[]) {
  //   console.log(typeEl[0].id);
  //   console.log(typeEl[0].checked);
  //   if (typeEl[0].id === 'et' || typeEl[0].checked === true) {
  //     this.filteredItems = this.mock.filter(x => x.type === true);
  //     console.log(this.filteredItems);
  //   } else if (typeEl[0].id === 'da' || typeEl[0].checked) {
  //     this.filteredItems = this.mock.filter(x => x.type === false);
  //     console.log(this.filteredItems);
  //     console.log(this.mock);
  //   } else {
  //     this.filteredItems = this.mock;
  //   }
  //   // this.filteredItems = this.filteredItems.filter(el => el.type === typeEl);
  //   return this.filteredItems;
  // }

  listUpdated = new EventEmitter();


  getAllSims() {
    return this.mock;
  }

  getUserCart() {
    return this.cart;
  }

  addItemToCart(newItem): void {
    this.cart.push(newItem);
  }
  onOperatorFilter(): string[] {
     const operatorMap = [...new Set (this.mock.map(x => x.operator ))];
     return operatorMap;
  }

 onTypeFilter(): any[] {
  const typeMap = [...new Set (this.mock.map(x => x.type ))];
  return typeMap;
 }
 getId(): number[] {
 const allIds = [...new Set (this.mock.map(x => x.id))];
 return allIds;
 }


//  search(num: string): ItemModel[] {
//   const searchResult: FilterModel = this.mock.filter( x => x.phoneNumber.includes(num)) ;
//   this.filters = this.filters.filter(item => !(item.fieldName === 'name' && (item.type === 'min' || item.type === 'max')));
//   this.addFilter(searchResult);
//  }


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
