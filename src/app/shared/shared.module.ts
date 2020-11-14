import { RouterModule } from '@angular/router';
import { SliderModule } from 'primeng/slider';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    FooterComponent,
    HeaderComponent,
    SearchBoxComponent,
    FilterComponent,
    LayoutComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
  ]
})
export class SharedModule { }
