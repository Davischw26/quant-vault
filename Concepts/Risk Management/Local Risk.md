---
title: "Local Risk"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - risk
  - greeks
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Local Risk

> [!summary]
> Portfolio risk from ordinary small changes in prices, rates, volatility, time, and credit conditions.

## Purpose

Princeton Newport’s framework separated local diffusion-like movements from global jumps. Local risk was managed using option sensitivities and yield-surface exposures. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A local Taylor approximation is $dV\approx\Delta dS+\tfrac12\Gamma(dS)^2+\Theta dt+\text{vega}\,d\sigma+\rho\,dr$, augmented with yield and credit factors. The normalized formula synthesizes the source’s listed sensitivities.

## Assumptions

Changes are small enough that local derivatives describe P&L. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Large or discontinuous shocks invalidate the approximation and require [[Global Risk]] analysis. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Aggregate factor sensitivities and hedge them near neutral while maintaining separate global scenarios. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Option Greeks]]
- **Extensions:** [[Factor Exposure]]
- **Conflicts:** [[Global Risk]]
- **Applications:** [[Market-Neutral Portfolio]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
