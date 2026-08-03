---
title: "Statistical Arbitrage"
type: strategy
area: "Trading Strategies"
status: evergreen
tags:
  - stat-arb
  - market-neutral
  - area/trading-strategies
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Statistical Arbitrage

> [!summary]
> A diversified, repeatable long-short program that extracts small empirical return forecasts while controlling common-factor risk.

## Purpose

The source traces a progression from short-term reversal to industry-neutral, global factor-neutral, principal-component, and multi-predictor versions. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A generic portfolio maximizes predicted return $\alpha^\top w$ subject to factor-neutrality, leverage, and risk/cost constraints. This optimization is an inferred synthesis of the described systems.

## Assumptions

Small predictive effects persist across many bets and diversification makes aggregate outcomes more reliable. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Gross edge is reduced by commissions and impact; competition erodes inefficiency; extreme favorable periods can distort backtests. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Use broad diversification, short holding periods, cost-aware sizing, factor neutrality, and continual research. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Short-Term Reversal]]; [[Factor Exposure]]
- **Extensions:** [[Multi-Predictor Alpha Model]]
- **Alternatives:** [[Pairs Trading]]
- **Applications:** [[Market-Neutral Portfolio]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
