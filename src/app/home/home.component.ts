import { Component, OnInit } from '@angular/core';
import { ReneWalletService } from '../rene-wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public brl: ReneWalletService) { }

  ngOnInit() {
  }
 
  getcurrentPrice() {
    return this.brl.currentPrice;
  }

}