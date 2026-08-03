---
title: "Strategy Blueprint - Delta-Neutral Convertible Relative Value"
type: strategy-blueprint
area: "Trading Strategies"
status: evergreen
tags:
  - strategy
  - convertibles
  - area/trading-strategies
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Strategy Blueprint - Delta-Neutral Convertible Relative Value

> [!summary]
> Decompose a convertible into bond and option value, buy cheap issues, and hedge local equity risk while separately controlling credit and jump exposures.

## Dependency chain

[[Bond Valuation]] + [[Embedded Option]] → [[Convertible Bond Decomposition]] → [[Option Greeks]] → [[Delta Hedging]] → [[Convertible Bond Arbitrage]] → [[Local Risk]] + [[Global Risk]].

## Sourced design

Thorp’s process progressed from standardized price-stock diagrams to analytic valuation using volatility, stock price, rates, stock-dependent investment value, real-time alpha, hedge ratios, and error bounds. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Testable implementation

Estimate the bond floor under a yield/credit surface; value the conversion option; model credit deterioration as equity falls; require value spread beyond error, borrow, and liquidity cost; short delta shares; and stress joint equity-credit jumps. The pipeline is inferred from the source’s model evolution and risk framework.

## Failure tests

A trade fails the blueprint if cheapness disappears under plausible credit/volatility inputs, stock borrow is unreliable, downside stock-credit dependence produces unacceptable global loss, or model error exceeds the quoted edge.
