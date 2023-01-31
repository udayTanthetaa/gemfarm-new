import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'DkBUifZDAdesnoLD8Z4ukYN1nLJwqqnCeaaXkdtn4Pyj'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '5tG2S666u8AZ5Dk3dfj1CKGNgkkuPDDikEqD7oN8DG96'
);
