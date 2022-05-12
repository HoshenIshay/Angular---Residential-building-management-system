import { Store, StoreConfig } from '@datorama/akita';

export interface WalletState {
    wallet: number;
}

export function createInitialState(): WalletState {
  return {
    wallet: 0,
  };
}

@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<WalletState> {
  constructor() {
    super(createInitialState());
  }
}