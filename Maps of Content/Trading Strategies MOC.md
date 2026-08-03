---
title: "Trading Strategies MOC"
type: moc
area: "Trading Strategies"
status: evergreen
tags:
  - moc
  - trading-strategies
  - area/trading-strategies
---
# Trading Strategies MOC

## Strategy families

### Capital allocation

- [[Strategy Blueprint - Kelly-Sized Equity Allocation]]
- [[Fractional Kelly Strategy]]

### Relative value and hedging

- [[Strategy Blueprint - Liquidity-Aware Option Mispricing]]
- [[Strategy Blueprint - Delta-Neutral Convertible Relative Value]]
- [[Convertible Bond Arbitrage]]
- [[Deep-In-the-Money Call Financing Trade]]

### Statistical prediction

- [[Short-Term Reversal]]
- [[Pairs Trading]]
- [[Statistical Arbitrage]]
- [[Strategy Blueprint - Factor-Neutral Short-Term Reversal]]

### Directional timing

- [[Signal Aggregation]]
- [[Strategy Blueprint - Prospective Market Timing]]

## Common validation path

[[Quantitative Model Lifecycle]] → [[Data Mining Bias]] → [[Prospective Validation]] → [[Liquidity Service Cost]] → [[Global Risk]] → [[Strategy Decay Monitoring]].

> [!inference] Composition rule
> Combine signals only after checking that their assumptions, factor exposures, holding periods, liquidity demands, and tail losses are compatible. A shared expected return is not enough.
