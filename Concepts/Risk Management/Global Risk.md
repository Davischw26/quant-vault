---
title: "Global Risk"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - stress-testing
  - tail-risk
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Global Risk

> [!summary]
> Portfolio exposure to large systemic or discontinuous moves that cannot be summarized by local sensitivities.

## Purpose

The source evaluates specified extreme changes in equity indexes, yield curves, and volatility, including shocks beyond prior historical records. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

Global analysis reprices the full portfolio under scenario vector $\Delta x$ rather than truncating at local Greeks. No probability is required for a pure stress loss.

## Assumptions

Scenarios are decision-relevant even when their frequencies are unknown. The source’s examples explicitly include unprecedented events. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

A scenario set can omit the event that matters; one historical record cannot enumerate all future regimes. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Ask “what are the factor exposures?” and “what are the risks from extreme events?”, then limit the worst losses to acceptable levels. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Factor Exposure]]
- **Extensions:** [[Scenario Stress Testing]]
- **Alternatives:** [[Value at Risk]]
- **Conflicts:** [[Local Risk]]
- **Applications:** [[Capital Reserves]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
