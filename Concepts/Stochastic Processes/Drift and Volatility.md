---
title: "Drift and Volatility"
type: concept
area: "Stochastic Processes"
status: evergreen
tags:
  - volatility
  - drift
  - area/stochastic-processes
source_files:
  - "Common Stock Volatilities in Option Formulas"
  - "A Public Index for Listed Options"
---
# Drift and Volatility

> [!summary]
> Drift controls the conditional mean trend of log price; volatility controls the scale of random fluctuations.

## Purpose

The corpus separates $m$, the drift or trend of log price, from $v$, the volatility. A remarkable feature of the Black–Scholes call formula is that stock drift does not appear, while volatility does. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Mathematical foundation

Over a short interval, the source writes the price increment as a drift term of order $\Delta t$ plus a random volatility term of order $\sqrt{\Delta t}$. It relates mean compound growth $R$ to log drift by $R=m+v^2/2$. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Assumptions

In the baseline model both parameters are constant. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Limitations

Observed volatility can vary through time and with price; neglecting these changes creates model error. [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]

## Practical use

Estimate volatility from returns, treat drift estimates cautiously, and distinguish historical, instantaneous, future, and implied volatility. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Relationships

- **Prerequisites:** [[Geometric Brownian Motion]]
- **Extensions:** [[Historical Volatility Estimator]]; [[Implied Volatility]]
- **Applications:** [[Black-Scholes Model]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]
- [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]
- [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]
