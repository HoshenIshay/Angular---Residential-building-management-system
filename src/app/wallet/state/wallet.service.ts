import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { WalletQuery } from './wallet.query';
import { WalletStore } from './wallet.store';
import { mapTo } from 'rxjs/operators';
import { timer } from "rxjs";
import { Iwallet } from 'src/app/Interfaces/wallet';
 

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private walletStore: WalletStore,
              private walletQuery: WalletQuery,
              private http: HttpClient) {
  }

  get() {
    console.log("WalletService")
    // return this.http.get<Iwallet>('http://localhost:3000/wallet').subscribe()
  

  }


}