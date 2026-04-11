export interface LedgerEntry {
  accountId: string;
  amount: number;
  timestamp: number;
}

export class Ledger {
  private entries: LedgerEntry[] = [];

  add(entry: LedgerEntry) {
    this.entries.push(entry);
  }

  getBalance(accountId: string) {
    return this.entries
      .filter(e => e.accountId === accountId)
      .reduce((sum, e) => sum + e.amount, 0);
  }
}