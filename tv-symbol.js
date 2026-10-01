// Resolves the TradingView symbol used by "Open chart" links.
//
// Bare tickers are ambiguous on TradingView (e.g. "IEX" opens the wrong
// instrument even though our own data for that row is correct). Qualify
// with the exchange ticker-exchange.json carries for this symbol
// (NYSE/NASDAQ/AMEX/BATS/IEX); fall back to the bare ticker when the
// exchange is unknown so the link still opens something.
function tvSymbol(ticker, exchMap) {
  const exch = exchMap && exchMap[ticker];
  return exch ? exch + ':' + ticker : ticker;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tvSymbol };
}
