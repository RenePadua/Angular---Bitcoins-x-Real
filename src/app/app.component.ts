import { Component, OnInit,  VERSION } from '@angular/core';
import { ReneWalletService } from './rene-wallet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {
  name = 'Rene Bit x Reais';

  constructor(public brl: ReneWalletService){ 
    brl.update();
  }


  ngOnInit() {
    setInterval(() => {
      this.brl.update();
      this.brl.verificador();
    }, 60000);
  }

  getcurrentPrice() {
    return this.brl.currentPrice;
  }

  update() {
    this.brl.update();
  }
}
