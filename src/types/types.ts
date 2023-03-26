export interface BtcAddressInfo {
  address: string;
  balance: number;
  n_tx: number; //The n_tx field is used to count the number of transactions that have been sent to or from a particular address
  total_received: number;
  total_sent: number;
  txs: transactions[];
  error?: string;
}

interface transactions {
  hash: string;
  received: string;
  status?: string;
  size: number;
  confirmations: number;
  inputs: any[];
  outputs: any[];
  fees: number;
  confirmed: string | undefined;
}

export interface BtcPriceInfo {
  usd: number;
  eur: number;
}
