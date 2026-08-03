---
title: "Convertible Bond Decomposition"
type: model
area: "Derivatives Pricing"
status: evergreen
tags:
  - convertible-bond
  - decomposition
  - area/derivatives-pricing
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Convertible Bond Decomposition

> [!summary]
> View a convertible as an ordinary bond plus an embedded conversion option or latent warrant.

## Purpose

Thorp and Kassouf separated the investment value of a comparable straight bond from the value of the conversion privilege, enabling cross-sectional and historical cheapness comparisons. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

$V_{convertible}\approx V_{straight\ bond}+V_{conversion\ option}$. The latent warrant’s effective exercise economics depend on expected future investment value. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Assumptions

Straight-bond investment value and option inputs can be estimated; the simplified decomposition initially treats them as separable. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Credit quality and investment value change with stock price, so ad hoc and later analytic corrections are needed. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Estimate the bond floor, value the conversion option, map equity delta, and attach error bounds before constructing a hedge. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Bond Valuation]]; [[Embedded Option]]
- **Extensions:** [[Convertible Bond Arbitrage]]
- **Alternatives:** [[Single-Factor Convertible Model]]
- **Applications:** [[Relative-Value Screening]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
