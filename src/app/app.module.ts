import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PublicModule,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
