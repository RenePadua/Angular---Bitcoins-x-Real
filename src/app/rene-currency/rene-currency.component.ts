import { Component, OnInit } from '@angular/core';
import { ReneCurrencyService } from './ReneCurrency.service';


@Component({
  selector: 'app-rene-currency',
  templateUrl: './rene-currency.component.html',
  styleUrls: ['./rene-currency.component.css']
})
export class ReneCurrencyComponent implements OnInit {

  constructor(public brl: ReneCurrencyService) { 
    brl.update();
  }

  ngOnInit() {
    setInterval(() => {
      this.brl.update();
      this.brl.verificador();
    }, 60000);
  }

  getCurrentPrice() {
    return this.brl.currentPrice;
  }

  update() {
    this.brl.update();
  }
}