import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReneCurrencyComponent } from './rene-currency/rene-currency.component';
import { HomeComponent } from './home/home.component';
import { ReneWalletComponent } from './rene-wallet/rene-wallet.component';
import { ReneWalletService } from './rene-wallet.service';
import { ReneCurrencyService } from './rene-currency/ReneCurrency.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "rene-wallet", component: ReneWalletComponent },
    { path: "rene-currency", component: ReneCurrencyComponent }
  ]) ],
  declarations: [ AppComponent, ReneCurrencyComponent, HomeComponent, ReneWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ReneWalletService, ReneCurrencyService]
})
export class AppModule { }
