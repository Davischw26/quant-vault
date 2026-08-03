---
title: "Scenario Stress Testing"
type: method
area: "Risk Management"
status: evergreen
tags:
  - stress-testing
  - scenario
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Scenario Stress Testing

> [!summary]
> Reprice a portfolio under large specified changes in market factors, including combinations outside historical experience.

## Purpose

Thorp’s portfolio process asked how value would change under index crashes, yield-surface shifts, volatility changes, earthquakes, and other catastrophic events. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

For scenario $s$, compute $L_s=V(x_0)-V(x_0+\Delta x_s)$ using full revaluation when possible. This formal notation is an inferred implementation of the source’s described repricing questions.

## Assumptions

Positions and pricing relationships can be revalued under shocked inputs; operational and counterparty effects may need separate overlays. The first is inferred, while record-resilience concerns appear in the source. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Results are only as complete as the chosen shocks and dependency assumptions. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Include equity, rate-curve, credit, volatility, liquidity, and operational scenarios; record the largest capital loss and hedge failure. The broader factor checklist is an inferred extension of the cited examples.

## Relationships

- **Prerequisites:** [[Global Risk]]; [[Factor Exposure]]
- **Extensions:** [[Reverse Stress Test]]
- **Alternatives:** [[Historical Simulation]]
- **Applications:** [[Portfolio Risk Limit]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
