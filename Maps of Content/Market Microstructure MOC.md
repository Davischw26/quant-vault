---
title: "Market Microstructure MOC"
type: moc
area: "Market Microstructure"
status: evergreen
tags:
  - moc
  - market-microstructure
  - area/market-microstructure
---
# Market Microstructure MOC

## Liquidity provision

[[Market Maker]] supplies immediate bid and ask quotes. [[Inventory-Dependent Quote Tilt]] explains why quotes need not be symmetric around equilibrium.

## Cost measurement

[[Bid-Ask Spread]] is a quoted conditional concession; [[Liquidity Service Cost]] is the strategy’s average expected concession after dealer-participation probability.

## Execution

[[Option Mispricing Screen]] → [[Contingent Limit Order]] → [[Transaction Cost Model]].

## Strategy implications

- [[Strategy Blueprint - Liquidity-Aware Option Mispricing]]
- [[Worked Example - Expected Liquidity Cost]]
- [[Statistical Arbitrage]] must model turnover and impact.

## Unresolved

Dealer inventory was unobserved in the source study; current-market replication should estimate side-, venue-, order-, and regime-specific costs rather than transport the 1978–1979 average.
