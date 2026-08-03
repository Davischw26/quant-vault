---
title: "Strategy Blueprint - Factor-Neutral Short-Term Reversal"
type: strategy-blueprint
area: "Trading Strategies"
status: evergreen
tags:
  - strategy
  - stat-arb
  - area/trading-strategies
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Strategy Blueprint - Factor-Neutral Short-Term Reversal

> [!summary]
> Rank recent stock returns, buy relative losers, short relative winners, and neutralize common factors before costs.

## Dependency chain

[[Short-Term Reversal]] → [[Cross-Sectional Ranking]] → [[Factor Exposure]] → [[Principal Component Model]] → [[Market-Neutral Portfolio]] → [[Statistical Arbitrage]] → [[Transaction Cost Model]].

## Sourced design

The first version sorted stocks into recent-return deciles and formed a long-most-down/short-most-up portfolio. Later systems added industry neutrality, global factor neutrality, principal components, and more predictors. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

The mature program diversified across roughly 200 longs and 200 shorts, turned over in about ten days, and found that commissions plus impact reduced a large gross expectation materially. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Testable implementation

Use a lagged return rank, optimize weights under dollar, beta, industry, and principal-component neutrality, forecast turnover cost, and hold out crisis periods as named regime tests rather than deleting them silently. The precise optimizer is inferred; the article notes that the 1987 period was so favorable it was removed from later simulations as an outlier.

## Failure tests

Stop or shrink when net alpha decays, neutralization becomes unstable, borrow or impact costs rise, factor residuals cease reverting, or live results diverge from prospective estimates.
