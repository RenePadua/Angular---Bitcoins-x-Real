import { Component, OnInit } from "@angular/core";
import { ReneWalletService } from "../rene-wallet.service";

@Component({
  selector: "app-rene-wallet",
  templateUrl: "./rene-wallet.component.html",
  styleUrls: ["./rene-wallet.component.css"]
})
export class ReneWalletComponent implements OnInit {
  saldo: number;
  operacao: string;
  btc: number;
  valorEUR: number;
  valorUSD: number;
  valorBRL: number;

  constructor(public brl: ReneWalletService) {
    this.saldo = 0.00001;
    this.btc = 0;
    this.valorEUR = 37580.262;
    this.valorUSD = this.brl.currentPrice.bpi.USD.rate_float;
    this.valorBRL = this.brl.currentPrice.bpi.BRL.rate_float;
  }

  ngOnInit() {}


  getSaldoEUR() {
    return this.saldo * this.valorEUR;
  }

  getSaldoUSD() {
    return this.saldo * this.valorUSD;
  }

  getSaldoBRL() {
    return this.saldo * this.valorBRL;
  }

  getExchangeEUR() {
    return this.btc * this.valorEUR;
  }

  getExchangeUSD() {
    return this.btc * this.valorUSD;
  }

  getExchangeBRL() {
    return this.btc * this.valorBRL;
  }

  atualizarSaldo() {
    if (this.operacao == "comprar") {
      this.saldo = this.saldo + this.btc;
    } else if (this.operacao == "vender") {
      this.saldo = this.saldo - this.btc;
    }
  }

}
