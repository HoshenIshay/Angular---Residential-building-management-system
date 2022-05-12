import { Query } from '@datorama/akita';
import { WalletState, WalletStore } from './wallet.store';

export class WalletQuery extends Query<WalletState> { 
  selectWallet$ = this.select('wallet'); 
  constructor(protected override store: WalletStore) {
    super(store);
  }
}