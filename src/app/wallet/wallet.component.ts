import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { WalletService } from './state/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  wallet : any

  constructor(public UsersService : UsersService , 
    ) { }

  ngOnInit(): void {
    this.UsersService.getWallet().subscribe(res =>{
      this.wallet= res;
    })
  }

}
