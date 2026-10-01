import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tvSymbol } from '../tv-symbol.js';

const exchMap = {
  IEX: 'NYSE',
  'BRK.B': 'NYSE',
  AAPL: 'NASDAQ',
  AAL: 'NASDAQ',
  ABND: 'AMEX',
};

test('qualifies a known NYSE ticker (the reported IEX bug)', () => {
  assert.equal(tvSymbol('IEX', exchMap), 'NYSE:IEX');
});

test('qualifies a ticker containing a dot', () => {
  assert.equal(tvSymbol('BRK.B', exchMap), 'NYSE:BRK.B');
});

test('qualifies a NASDAQ ticker', () => {
  assert.equal(tvSymbol('AAPL', exchMap), 'NASDAQ:AAPL');
  assert.equal(tvSymbol('AAL', exchMap), 'NASDAQ:AAL');
});

test('qualifies an AMEX ticker', () => {
  assert.equal(tvSymbol('ABND', exchMap), 'AMEX:ABND');
});

test('falls back to the bare ticker when the exchange is unknown', () => {
  assert.equal(tvSymbol('ZZZZ', exchMap), 'ZZZZ');
});

test('falls back to the bare ticker when there is no map at all', () => {
  assert.equal(tvSymbol('AAPL', undefined), 'AAPL');
  assert.equal(tvSymbol('AAPL', {}), 'AAPL');
});
