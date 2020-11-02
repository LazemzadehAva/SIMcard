import { FilterModel } from './../filter/filter.component';
import { ItemModel } from './../item.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimDataService {

  constructor() { }

  itemAdded = new EventEmitter<ItemModel>();

  data: object[] = [];

  cart: ItemModel[] = [];

  mock: ItemModel[] = [{
    id: 1,
    phoneNumber: '573-430-2289',
    type: true,
    cost: 470298022,
    status: true,
    operator: 'irancell'
  }, {
    id: 2,
    phoneNumber: '395-673-3991',
    type: false,
    cost: 256799197,
    status: false,
    operator: 'Romeo Papa'
  }, {
    id: 3,
    phoneNumber: '227-841-2377',
    type: false,
    cost: 1592,
    status: true,
    operator: 'Hotel Foxtrot'
  }, {
    id: 4,
    phoneNumber: '322-637-9525',
    type: true,
    cost: 503,
    status: true,
    operator: 'Kilo November'
  }, {
    id: 5,
    phoneNumber: '273-166-4179',
    type: false,
    cost: 727597956,
    status: true,
    operator: 'Kilo'
  }, {
    id: 6,
    phoneNumber: '181-860-3902',
    type: true,
    cost: 107742644,
    status: true,
    operator: 'Oscar Lima'
  }, {
    id: 7,
    phoneNumber: '445-762-8956',
    type: false,
    cost: 561567699,
    status: true,
    operator: 'Juliett'
  }, {
    id: 8,
    phoneNumber: '767-749-9945',
    type: false,
    cost: 260671813,
    status: false,
    operator: 'November Golf'
  }, {
    id: 9,
    phoneNumber: '494-220-4421',
    type: true,
    cost: 101222346,
    status: false,
    operator: 'November'
  }, {
    id: 10,
    phoneNumber: '299-499-1762',
    type: false,
    cost: 802602227,
    status: true,
    operator: 'India Whiskey Tango'
  }, {
    id: 11,
    phoneNumber: '911-612-9317',
    type: false,
    cost: 799910497,
    status: false,
    operator: 'November'
  }, {
    id: 12,
    phoneNumber: '166-814-3600',
    type: true,
    cost: 262572377,
    status: false,
    operator: 'Victor Lima Quebec'
  }, {
    id: 13,
    phoneNumber: '400-478-4642',
    type: false,
    cost: 744445353,
    status: false,
    operator: 'Delta'
  }, {
    id: 14,
    phoneNumber: '225-346-8430',
    type: true,
    cost: 644197041,
    status: true,
    operator: 'Zulu Oscar Quebec'
  }, {
    id: 15,
    phoneNumber: '527-553-3837',
    type: false,
    cost: 815767448,
    status: true,
    operator: 'Quebec Mike Delta'
  }, {
    id: 16,
    phoneNumber: '484-808-1396',
    type: true,
    cost: 316839548,
    status: true,
    operator: 'Lima Uniform'
  }, {
    id: 17,
    phoneNumber: '517-204-3199',
    type: false,
    cost: 379781288,
    status: false,
    operator: 'Charlie'
  }, {
    id: 18,
    phoneNumber: '967-932-4982',
    type: true,
    cost: 525876694,
    status: false,
    operator: 'Echo Victor'
  }, {
    id: 19,
    phoneNumber: '627-946-7708',
    type: true,
    cost: 629405588,
    status: true,
    operator: 'Quebec X-ray Sierra'
  }, {
    id: 20,
    phoneNumber: '297-802-4715',
    type: true,
    cost: 612683448,
    status: false,
    operator: 'Delta Mike Kilo'
  }, {
    id: 21,
    phoneNumber: '311-384-2349',
    type: false,
    cost: 5009595,
    status: false,
    operator: 'Romeo'
  }, {
    id: 22,
    phoneNumber: '297-453-3152',
    type: false,
    cost: 52043965,
    status: true,
    operator: 'Golf Uniform Delta'
  }, {
    id: 23,
    phoneNumber: '813-378-7145',
    type: true,
    cost: 776975562,
    status: false,
    operator: 'Bravo Alfa Papa'
  }, {
    id: 24,
    phoneNumber: '655-730-9169',
    type: false,
    cost: 175380596,
    status: false,
    operator: 'Lima'
  }, {
    id: 25,
    phoneNumber: '481-418-3438',
    type: false,
    cost: 89376853,
    status: true,
    operator: 'Charlie'
  }, {
    id: 26,
    phoneNumber: '721-633-7563',
    type: false,
    cost: 31851486,
    status: false,
    operator: 'Whiskey Romeo'
  }, {
    id: 27,
    phoneNumber: '846-973-6814',
    type: true,
    cost: 804916337,
    status: true,
    operator: 'Hotel Delta Mike'
  }, {
    id: 28,
    phoneNumber: '734-242-8019',
    type: false,
    cost: 532855838,
    status: false,
    operator: 'Echo Alfa'
  }, {
    id: 29,
    phoneNumber: '479-375-7999',
    type: true,
    cost: 431987574,
    status: false,
    operator: 'X-ray'
  }, {
    id: 30,
    phoneNumber: '404-772-9370',
    type: true,
    cost: 664501118,
    status: false,
    operator: 'Romeo'
  }, {
    id: 31,
    phoneNumber: '142-900-4801',
    type: false,
    cost: 4675064,
    status: true,
    operator: 'Juliett'
  }, {
    id: 32,
    phoneNumber: '213-914-1856',
    type: false,
    cost: 548975640,
    status: false,
    operator: 'Lima'
  }, {
    id: 33,
    phoneNumber: '908-770-8205',
    type: false,
    cost: 908041335,
    status: true,
    operator: 'Oscar'
  }, {
    id: 34,
    phoneNumber: '584-997-6143',
    type: true,
    cost: 487473086,
    status: false,
    operator: 'X-ray'
  }, {
    id: 35,
    phoneNumber: '380-309-0769',
    type: false,
    cost: 199551424,
    status: true,
    operator: 'Victor Delta'
  }, {
    id: 36,
    phoneNumber: '778-404-6137',
    type: false,
    cost: 575728023,
    status: false,
    operator: 'X-ray Delta'
  }, {
    id: 37,
    phoneNumber: '777-805-4896',
    type: true,
    cost: 113535145,
    status: false,
    operator: 'India Uniform'
  }, {
    id: 38,
    phoneNumber: '877-730-6956',
    type: false,
    cost: 838050845,
    status: false,
    operator: 'Quebec Kilo'
  }, {
    id: 39,
    phoneNumber: '529-640-0678',
    type: false,
    cost: 649595500,
    status: true,
    operator: 'Mike'
  }, {
    id: 40,
    phoneNumber: '630-612-4399',
    type: true,
    cost: 988509848,
    status: false,
    operator: 'Hotel'
  }, {
    id: 41,
    phoneNumber: '200-222-5076',
    type: true,
    cost: 983194190,
    status: false,
    operator: 'Quebec Echo Uniform'
  }, {
    id: 42,
    phoneNumber: '579-188-5995',
    type: true,
    cost: 176381162,
    status: true,
    operator: 'Sierra Kilo Delta'
  }, {
    id: 43,
    phoneNumber: '742-830-6641',
    type: false,
    cost: 730707949,
    status: true,
    operator: 'Zulu Delta November'
  }, {
    id: 44,
    phoneNumber: '130-255-6194',
    type: true,
    cost: 173171453,
    status: true,
    operator: 'Mike'
  }, {
    id: 45,
    phoneNumber: '955-984-2074',
    type: true,
    cost: 627470357,
    status: true,
    operator: 'Alfa'
  }, {
    id: 46,
    phoneNumber: '382-833-1694',
    type: true,
    cost: 37237125,
    status: true,
    operator: 'Yankee'
  }, {
    id: 47,
    phoneNumber: '191-678-2803',
    type: false,
    cost: 988143803,
    status: false,
    operator: 'Echo Hotel X-ray'
  }, {
    id: 48,
    phoneNumber: '449-657-1996',
    type: true,
    cost: 750796602,
    status: false,
    operator: 'Yankee Juliett'
  }, {
    id: 49,
    phoneNumber: '609-532-6093',
    type: false,
    cost: 976503967,
    status: true,
    operator: 'Victor'
  }, {
    id: 50,
    phoneNumber: '851-981-0323',
    type: true,
    cost: 334194768,
    status: false,
    operator: 'Alfa Hotel'
  }, {
    id: 51,
    phoneNumber: '646-894-2497',
    type: false,
    cost: 992090821,
    status: true,
    operator: 'Golf Charlie Romeo'
  }, {
    id: 52,
    phoneNumber: '847-363-7588',
    type: false,
    cost: 706653329,
    status: false,
    operator: 'Zulu'
  }, {
    id: 53,
    phoneNumber: '327-387-0076',
    type: true,
    cost: 616814175,
    status: true,
    operator: 'Alfa Foxtrot Kilo'
  }, {
    id: 54,
    phoneNumber: '573-314-5139',
    type: true,
    cost: 990527509,
    status: true,
    operator: 'Delta'
  }, {
    id: 55,
    phoneNumber: '562-290-0260',
    type: true,
    cost: 127278271,
    status: true,
    operator: 'November Whiskey Mike'
  }, {
    id: 56,
    phoneNumber: '504-485-7970',
    type: true,
    cost: 729461617,
    status: false,
    operator: 'Tango Echo Charlie'
  }, {
    id: 57,
    phoneNumber: '625-647-0586',
    type: true,
    cost: 940228126,
    status: false,
    operator: 'India'
  }, {
    id: 58,
    phoneNumber: '994-422-9190',
    type: false,
    cost: 632084212,
    status: true,
    operator: 'Zulu Charlie'
  }, {
    id: 59,
    phoneNumber: '500-257-5637',
    type: true,
    cost: 109156281,
    status: true,
    operator: 'Oscar'
  }, {
    id: 60,
    phoneNumber: '940-595-2959',
    type: false,
    cost: 857804506,
    status: true,
    operator: 'Lima Hotel Kilo'
  }, {
    id: 61,
    phoneNumber: '769-149-7271',
    type: false,
    cost: 508424369,
    status: true,
    operator: 'Foxtrot Zulu Echo'
  }, {
    id: 62,
    phoneNumber: '651-725-6164',
    type: false,
    cost: 883242322,
    status: true,
    operator: 'Juliett'
  }, {
    id: 63,
    phoneNumber: '290-211-5879',
    type: true,
    cost: 816858403,
    status: true,
    operator: 'Papa Mike'
  }, {
    id: 64,
    phoneNumber: '435-855-1843',
    type: false,
    cost: 471718448,
    status: false,
    operator: 'November Hotel Yankee'
  }, {
    id: 65,
    phoneNumber: '973-223-2665',
    type: true,
    cost: 726115952,
    status: false,
    operator: 'Alfa Romeo'
  }, {
    id: 66,
    phoneNumber: '237-602-4418',
    type: true,
    cost: 860583208,
    status: true,
    operator: 'Zulu'
  }, {
    id: 67,
    phoneNumber: '502-717-3233',
    type: false,
    cost: 304283616,
    status: true,
    operator: 'Bravo'
  }, {
    id: 68,
    phoneNumber: '134-238-5601',
    type: true,
    cost: 708643135,
    status: false,
    operator: 'Lima Zulu'
  }, {
    id: 69,
    phoneNumber: '933-490-4517',
    type: false,
    cost: 376863166,
    status: false,
    operator: 'Sierra'
  }, {
    id: 70,
    phoneNumber: '576-463-3872',
    type: false,
    cost: 848366585,
    status: false,
    operator: 'India Hotel Juliett'
  }, {
    id: 71,
    phoneNumber: '843-750-2409',
    type: false,
    cost: 535223264,
    status: true,
    operator: 'Echo Bravo'
  }, {
    id: 72,
    phoneNumber: '772-812-2540',
    type: true,
    cost: 771125089,
    status: true,
    operator: 'Hotel Papa'
  }, {
    id: 73,
    phoneNumber: '629-669-7312',
    type: false,
    cost: 200168673,
    status: true,
    operator: 'Charlie X-ray India'
  }, {
    id: 74,
    phoneNumber: '812-785-0367',
    type: true,
    cost: 274251645,
    status: false,
    operator: 'X-ray'
  }, {
    id: 75,
    phoneNumber: '226-217-7357',
    type: false,
    cost: 198059250,
    status: false,
    operator: 'Yankee'
  }, {
    id: 76,
    phoneNumber: '875-498-3623',
    type: true,
    cost: 437256726,
    status: false,
    operator: 'Charlie Whiskey'
  }, {
    id: 77,
    phoneNumber: '737-903-1535',
    type: true,
    cost: 758681965,
    status: false,
    operator: 'November Kilo Delta'
  }, {
    id: 78,
    phoneNumber: '129-730-5684',
    type: false,
    cost: 480142789,
    status: false,
    operator: 'Whiskey Papa Quebec'
  }, {
    id: 79,
    phoneNumber: '664-193-5321',
    type: true,
    cost: 964958673,
    status: true,
    operator: 'India Mike'
  }, {
    id: 80,
    phoneNumber: '731-876-3466',
    type: false,
    cost: 224487834,
    status: true,
    operator: 'Lima Victor November'
  }, {
    id: 81,
    phoneNumber: '870-472-7263',
    type: false,
    cost: 986499215,
    status: true,
    operator: 'Yankee'
  }, {
    id: 82,
    phoneNumber: '199-967-3908',
    type: true,
    cost: 109786619,
    status: true,
    operator: 'Mike Quebec India'
  }, {
    id: 83,
    phoneNumber: '904-693-6490',
    type: false,
    cost: 374805220,
    status: true,
    operator: 'X-ray Romeo'
  }, {
    id: 84,
    phoneNumber: '700-874-1037',
    type: false,
    cost: 968553992,
    status: true,
    operator: 'Zulu Echo'
  }, {
    id: 85,
    phoneNumber: '889-333-6673',
    type: true,
    cost: 113359651,
    status: false,
    operator: 'Foxtrot Romeo Charlie'
  }, {
    id: 86,
    phoneNumber: '650-551-7910',
    type: true,
    cost: 728321255,
    status: false,
    operator: 'Quebec Whiskey'
  }, {
    id: 87,
    phoneNumber: '792-538-9037',
    type: false,
    cost: 164924044,
    status: true,
    operator: 'Bravo'
  }, {
    id: 88,
    phoneNumber: '834-821-4746',
    type: false,
    cost: 101084501,
    status: false,
    operator: 'Hotel Victor'
  }, {
    id: 89,
    phoneNumber: '323-183-0810',
    type: true,
    cost: 242064707,
    status: false,
    operator: 'Uniform'
  }, {
    id: 90,
    phoneNumber: '433-696-3355',
    type: false,
    cost: 550436434,
    status: false,
    operator: 'Mike Sierra'
  }, {
    id: 91,
    phoneNumber: '430-460-7005',
    type: true,
    cost: 87498463,
    status: false,
    operator: 'Charlie'
  }, {
    id: 92,
    phoneNumber: '549-733-7400',
    type: false,
    cost: 448904476,
    status: false,
    operator: 'Charlie'
  }, {
    id: 93,
    phoneNumber: '123-712-1841',
    type: false,
    cost: 738743957,
    status: false,
    operator: 'Charlie Echo'
  }, {
    id: 94,
    phoneNumber: '689-869-6426',
    type: false,
    cost: 144608912,
    status: false,
    operator: 'Papa'
  }, {
    id: 95,
    phoneNumber: '285-449-7543',
    type: false,
    cost: 163898180,
    status: true,
    operator: 'Charlie Bravo Juliett'
  }, {
    id: 96,
    phoneNumber: '159-420-3802',
    type: false,
    cost: 627280790,
    status: true,
    operator: 'Oscar Victor'
  }, {
    id: 97,
    phoneNumber: '506-525-3448',
    type: true,
    cost: 414094475,
    status: true,
    operator: 'India'
  }, {
    id: 98,
    phoneNumber: '506-459-6248',
    type: false,
    cost: 510871739,
    status: true,
    operator: 'رایتل'
  }, {
    id: 99,
    phoneNumber: '792-689-3873',
    type: true,
    cost: 949471944,
    status: false,
    operator: 'همراه اول'
  }, {
    id: 100,
    phoneNumber: '199-350-4207',
    type: true,
    cost: 62775393,
    status: true,
    operator: 'ایرانسل'
  }];

  filteredItems: ItemModel[] = this.mock;
  // mockData: Observable<ItemModel[]> = of(this.mock);

  getAllSims() {
    return this.mock;
  }

  getUserCart() {
    return this.cart;
  }

  addItemToCart(newItem): void {
    this.cart.push(newItem);
  }

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

  filterResults(filters: FilterModel[]) {
    const typeFilters = filters.filter(f => f.fieldName === 'type');
    const operatorFilters = filters.filter(f => f.fieldName === 'operator');
    const costFilters = filters.filter(f => f.fieldName === 'cost');
    this.filteredItems = this.mock
      .filter(item => typeFilters.length === 0 || typeFilters.some(x => item.type == x.value))
      .filter(item => operatorFilters.length === 0 || operatorFilters.some(x => item.operator == x.value))
      .filter(item => costFilters.length === 0 ||
        (!costFilters.some(x => x.type === 'max') || costFilters.some(x => x.type === 'max' && item.cost <= +(x.value)))
        && (!costFilters.some(x => x.type === 'min') || costFilters.some(x => x.type === 'min' && item.cost >= +(x.value))));
  }
}
