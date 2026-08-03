---
title: "Jump Risk"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - jumps
  - tail-risk
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
  - "Common Stock Volatilities in Option Formulas"
---
# Jump Risk

> [!summary]
> Sudden discontinuous price changes that local diffusion hedges and lognormal tail estimates can miss.

## Purpose

Thorp distinguishes local “normal” fluctuations from global catastrophic jumps and lists jump processes as an alternate option-model direction. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]; [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]

## Mathematical foundation

The corpus does not specify one jump equation. A generic extension adds a discontinuous term to a diffusion; this notation is an inferred bridge to the cited jump-process research agenda.

## Assumptions

Stress analysis assumes shocks can exceed historical experience; the corpus explicitly rejects historical maxima as hard future bounds. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Jump sizes and probabilities are difficult to estimate from one market history. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Use scenario losses, reserves, and position limits because delta-gamma control alone does not cover discontinuities. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Global Risk]]
- **Extensions:** [[Jump-Diffusion Process]]
- **Alternatives:** [[Diffusion Risk]]
- **Conflicts:** [[Continuous Hedging Assumption]]
- **Applications:** [[Scenario Stress Testing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
- [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]
