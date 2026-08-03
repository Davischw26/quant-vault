---
title: "Fat-Tail Risk"
type: assumption
area: "Risk Management"
status: evergreen
tags:
  - tail-risk
  - model-risk
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Fat-Tail Risk

> [!summary]
> Extreme market moves occur more often than a convenient lognormal model implies.

## Purpose

The source explicitly identifies the lognormal model’s underestimation of extreme moves as a fallacy that can contribute to severe losses. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A diagnostic compares empirical tail exceedances $P(|R|>x)$ with those implied by the fitted normal or lognormal baseline. This diagnostic is an inferred operationalization.

## Assumptions

Historical samples are informative but not hard bounds; future extremes may exceed observed limits. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Tail estimation itself is data-poor and regime-dependent because markets provide only one realized history. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Use reserves, fractional sizing, and scenario shocks beyond history rather than multiplying Gaussian standard deviations alone. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Geometric Brownian Motion]]
- **Extensions:** [[Extreme Event Risk]]
- **Conflicts:** [[Normal Tail Approximation]]
- **Applications:** [[Scenario Stress Testing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
