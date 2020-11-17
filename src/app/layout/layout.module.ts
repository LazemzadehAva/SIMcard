import { Error404Component } from './errors/error404/error404.component';
import { Error403Component } from './errors/error403/error403.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {DropdownModule} from 'primeng-lts/dropdown';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
    LayoutComponent,
    Error403Component,
    Error404Component,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
    DropdownModule,
    SplitButtonModule
  ],
  providers: [LocalStorageService],
  bootstrap: []
})
export class LayoutModule { }
