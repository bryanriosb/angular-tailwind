export interface TransactionObject {
  transaction: Transactions;
  transactions: Transactions[];
}

export interface Transactions {
  id: number;
  name: string;
  amount: number;
  date: Date;
  validated: boolean;
}
