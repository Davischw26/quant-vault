---
title: "Geometric Brownian Motion"
type: model
area: "Stochastic Processes"
status: evergreen
tags:
  - stochastic-process
  - black-scholes
  - area/stochastic-processes
source_files:
  - "Extensions of the Black-Scholes Option Model"
  - "Common Stock Volatilities in Option Formulas"
---
# Geometric Brownian Motion

> [!summary]
> A positive price process whose log returns are normal with constant drift and variance rate.

## Purpose

The simple Black–Scholes model assumes stock price follows stationary geometric Brownian motion, making log price changes normal and option values functions of price, time, rate, and volatility. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Mathematical foundation

In normalized notation, $dS_t=\mu S_tdt+\sigma S_tdW_t$, so $\log(S_{t+\Delta}/S_t)$ is normal with mean proportional to $\Delta$ and variance $\sigma^2\Delta$. The source denotes drift by $m$ and volatility by $v$. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Assumptions

Continuous paths, constant drift and volatility, lognormal finite-horizon prices, and independent normal increments. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]; [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Limitations

The corpus explicitly warns that lognormal models understate extreme moves and raises jumps, time-varying volatility, and price-dependent volatility as alternatives. [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]; [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Use it as the baseline process for [[Black-Scholes Model]] and historical-volatility estimation, then stress violations through [[Jump Risk]] and [[Constant Elasticity of Variance Model]].

## Relationships

- **Prerequisites:** [[Brownian Motion]]; [[Normal Distribution]]
- **Extensions:** [[Black-Scholes Model]]
- **Alternatives:** [[Constant Elasticity of Variance Model]]; [[Jump-Diffusion Process]]
- **Conflicts:** [[Fat-Tail Risk]]
- **Applications:** [[Option Pricing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]
- [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]
- [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]
