---
title: "Discrete Hedging Error"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - hedging
  - risk
  - area/risk-management
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Discrete Hedging Error

> [!summary]
> Residual return risk created when a dynamic hedge is rebalanced at finite intervals.

## Purpose

The revised derivation shows that a hedge is risky between adjustments and derives a leading random term for its return around the riskless rate. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]

## Mathematical foundation

The leading error is proportional to option curvature, variance, squared price, and $(Z^2-1)$. Its variance persists over one interval but diversifies as independent adjustment intervals become finer. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]

## Assumptions

The derivation uses the geometric-Brownian price model, smooth option value, and independent normal shocks. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Limitations

Actual errors also include costs, jumps, stale prices, and volatility error; these are outside the simple leading-term calculation but are raised elsewhere in the corpus. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]; [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]

## Practical use

Backtest hedge P&L at the intended rebalance interval and treat gamma and volatility as primary drivers. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]

## Relationships

- **Prerequisites:** [[Delta Hedging]]; [[Option Gamma]]
- **Extensions:** [[Hedging Error Simulation]]
- **Conflicts:** [[Continuous Hedging Assumption]]
- **Applications:** [[Risk Budgeting]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]
- [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]
