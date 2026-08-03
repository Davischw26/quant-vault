---
title: "Pairs Trading"
type: strategy
area: "Trading Strategies"
status: evergreen
tags:
  - pairs-trading
  - mean-reversion
  - area/trading-strategies
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Pairs Trading

> [!summary]
> Trade deviations between related securities on the expectation that their historical relationship will reassert itself.

## Purpose

The source describes finding related stocks with strong statistical and possibly causal relationships, then betting on correction of deviations. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A basic spread is $z_t=P_{1,t}-\beta P_{2,t}$ or a normalized residual from a fitted relation. This equation is an inferred implementation; the source does not specify its algorithm.

## Assumptions

The relationship is economically or statistically persistent and the deviation is temporary. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Correlation alone does not guarantee convergence, and structural breaks can make the deviation permanent. This warning is an inferred consequence of the source’s “one history” principle.

## Practical use

Require a relationship rationale, estimate hedge ratio, set entry/exit rules, and stress a non-converging spread. These are inferred implementation steps.

## Relationships

- **Prerequisites:** [[Relative-Value Relationship]]
- **Extensions:** [[Statistical Arbitrage]]
- **Alternatives:** [[Short-Term Reversal]]
- **Applications:** [[Market-Neutral Portfolio]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
