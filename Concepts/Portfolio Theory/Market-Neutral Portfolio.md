---
title: "Market-Neutral Portfolio"
type: strategy
area: "Portfolio Theory"
status: evergreen
tags:
  - market-neutral
  - hedging
  - area/portfolio-theory
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Market-Neutral Portfolio

> [!summary]
> A portfolio constructed to keep broad market sensitivity near zero while retaining security-specific expected returns.

## Purpose

Princeton Newport managed local risk close to market neutral, and later statistical-arbitrage systems used industry or global factor neutrality. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A basic constraint is $\beta_{market}^\top w\approx0$; richer versions impose $B^\top w=0$ for multiple factors. The constraint notation is inferred from the source’s descriptions.

## Assumptions

Betas or hedge ratios are stable enough to estimate and shorting/financing are feasible. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Neutrality to measured local factors does not eliminate global jumps, basis changes, liquidity risk, or model error. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Separate expected alpha from factor exposures, rebalance neutrality, and maintain global stress limits. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Factor Exposure]]; [[Short Selling]]
- **Extensions:** [[Factor-Neutral Portfolio]]
- **Alternatives:** [[Long-Only Portfolio]]
- **Applications:** [[Statistical Arbitrage]]; [[Convertible Bond Arbitrage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
