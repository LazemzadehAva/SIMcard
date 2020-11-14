import { SharedModule } from './shared/shared.module';

import { SearchBoxComponent } from './search-box/search-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { Error403Component } from './errors/error403/error403.component';
import { Error404Component } from './errors/error404/error404.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 78865aab55faa07f84ada18e08697962d1cca4ff

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
<<<<<<< HEAD
    Error403Component,
    Error404Component,
=======
    LoginComponent
>>>>>>> 78865aab55faa07f84ada18e08697962d1cca4ff
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
