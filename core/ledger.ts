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
export function calculatePayout(amount: number, splits: Record<string, number>) {
  const result: Record<string, number> = {};

  for (const [account, percent] of Object.entries(splits)) {
    result[account] = amount * percent;
  }

  return result;
}