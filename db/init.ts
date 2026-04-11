import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('pay1.db');

db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS transactions (
    id TEXT PRIMARY KEY,
    amount INTEGER,
    created_at INTEGER
  );
`);

export default db;