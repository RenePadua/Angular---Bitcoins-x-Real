import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'BRL']: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  BRL: number;
}

@Injectable()
export class ReneWalletService {

  currentPrice: Response;
  lastUpdate: Date;
  corrente: number;
  novo: number;

  updateList: Array<PriceUpdate> = [];

  constructor(private http: HttpClient) {}
 
 
  verificador(){
    if(this.corrente > this.novo){
      document.getElementById("Coin").style.color = "green-light";
      return " ▲";
      } 
    else {
      document.getElementById("Coin").style.color = "red";
      return " ▼";
    }

  }



  conferidor(){
    if(this.novo === undefined){
      this.novo = this.currentPrice.bpi.BRL.rate_float;
    }
  }

  update(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentPrice/BRL.json').subscribe
    ((data) => {
        this.lastUpdate = new Date(),
        this.currentPrice = data,
        this.corrente = this.currentPrice.bpi.BRL.rate_float;
        this.conferidor();
        this.updateList.shift();
        this.updateList.push({
          timestamp: this.lastUpdate,
          USD: this.currentPrice.bpi.USD.rate_float,
          BRL: this.currentPrice.bpi.BRL.rate_float,
        }
         );
         
      }
    );

  }
}