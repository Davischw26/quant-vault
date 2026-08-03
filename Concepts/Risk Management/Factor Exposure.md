---
title: "Factor Exposure"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - factors
  - portfolio-risk
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Factor Exposure

> [!summary]
> Sensitivity of portfolio value or returns to common market drivers.

## Purpose

Thorp makes factor exposure one of two central investment-risk questions and describes factor-neutral statistical arbitrage plus yield-curve, duration, credit, volatility, and market exposures. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

A linear approximation is $r_p=\alpha+\beta^\top f+\varepsilon$; neutrality targets selected components of $\beta$ near zero. The equation is an inferred formalization of the source’s factor-neutral description.

## Assumptions

The selected factors span material local co-movement and exposures are estimable. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Factors and betas change; hidden nonlinear and jump exposures can remain even when estimated betas are zero. This warning is inferred from the local/global distinction.

## Practical use

Estimate exposures before and after each trade, neutralize unintended components, and stress factor breaks. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Linear Factor Model]]
- **Extensions:** [[Factor-Neutral Portfolio]]
- **Alternatives:** [[Principal Component Model]]
- **Applications:** [[Statistical Arbitrage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
