import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import { FilterComponent } from './filter/filter.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingCardComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    SearchBoxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    SliderModule,
>>>>>>> 199d49fdf662bcbcf872da08cd3755b5ccdf0ca4
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
