---
title: "Strategy Blueprint - Liquidity-Aware Option Mispricing"
type: strategy-blueprint
area: "Trading Strategies"
status: evergreen
tags:
  - strategy
  - options
  - area/trading-strategies
source_files:
  - "Common Stock Volatilities in Option Formulas"
  - "The Cost of Liquidity Services in Listed Options - A Note"
  - "A Public Index for Listed Options"
---
# Strategy Blueprint - Liquidity-Aware Option Mispricing

> [!summary]
> Trade option-model deviations only after assigning the contract to the correct sensitivity region and subtracting strategy-specific expected execution cost.

## Dependency chain

[[Black-Scholes Model]] → [[Moneyness-Dependent Model Sensitivity]] → [[Implied Volatility]] / [[Option-Implied Interest Rate Index]] → [[Option Mispricing Screen]] → [[Contingent Limit Order]] → [[Liquidity Service Cost]].

## Sourced design

Near-strike contracts mainly diagnose volatility, deep-in-the-money calls mainly diagnose financing rates, and far-out-of-the-money contracts carry high relative model risk. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

The studied fund selected options using a Black–Scholes variant, required mispricing beyond a cutoff, and placed stock-contingent day limits. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], p. 992

Expected liquidity cost can be far below the quoted spread because not every trade uses a market maker, but it varies by strategy and side. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Testable implementation

Compute model value and uncertainty band, require **edge > model uncertainty + expected cost + capital charge**, use a contingent limit, and attribute realized P&L among convergence, hedge P&L, volatility, rates, and execution. This rule is an inferred synthesis.

## Conflict checks

- A far-OTM “cheap” price may be model misspecification, not edge.
- An apparent rate mispricing may reflect actual funding, tax, or short-sale constraints.
- A gross edge that does not survive realized execution cost is not a viable strategy.
