---
title: "Convertible Bond Arbitrage"
type: strategy
area: "Trading Strategies"
status: evergreen
tags:
  - convertible-arbitrage
  - delta-neutral
  - area/trading-strategies
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Convertible Bond Arbitrage

> [!summary]
> Trade an underpriced convertible against a stock hedge sized to offset local equity exposure.

## Purpose

Convertible hedging was a core profit center at Princeton Newport; scatter diagrams and later analytic models supplied cheapness measures and delta-neutral hedge ratios. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

For long convertible value $V_c(S)$, short approximately $\Delta_c=\partial V_c/\partial S$ shares per unit exposure, then rebalance as delta changes. The derivative notation formalizes the source’s hedge-ratio description.

## Assumptions

Model value, bond floor, credit relation, volatility, rates, borrow, and execution are sufficiently reliable. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Local neutrality does not eliminate credit jumps, volatility shifts, liquidity risk, or model error. These follow from the source’s local/global risk discussion and convertible-model evolution. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Screen cheapness, estimate delta and error bounds, monitor yield/credit exposures, and stress stock-credit coupling. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Convertible Bond Decomposition]]; [[Delta Hedging]]
- **Extensions:** [[Capital-Structure Arbitrage]]
- **Alternatives:** [[Warrant Hedge]]
- **Applications:** [[Market-Neutral Portfolio]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
