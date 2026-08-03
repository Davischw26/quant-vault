---
title: "Delta Hedging"
type: method
area: "Derivatives Pricing"
status: evergreen
tags:
  - hedging
  - delta
  - area/derivatives-pricing
source_files:
  - "Extensions of the Black-Scholes Option Model"
  - "Common Stock Volatilities in Option Formulas"
---
# Delta Hedging

> [!summary]
> Offset an option’s first-order stock-price sensitivity with the underlying asset.

## Purpose

The Black–Scholes construction combines a long stock position with a short option position and continuously adjusts the mix to target a locally riskless return. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]

## Mathematical foundation

If option value is $C(S,t)$, the first-order change is $dC\approx C_SdS$. A position long one option and short $\Delta=C_S$ shares is locally insensitive to $dS$. Thorp’s reciprocal hedge writes one share against $1/C_S$ options. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Assumptions

A smooth option-value function, tradable underlying, and sufficiently frequent adjustment. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Limitations

Gamma creates discrete hedge error; costs, jumps, and model misspecification prevent exact risklessness. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]; [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Recompute delta after price and time changes; budget the residual error with [[Discrete Hedging Error]] and [[Transaction Costs]].

## Relationships

- **Prerequisites:** [[Option Delta]]
- **Extensions:** [[Delta-Neutral Option Hedge]]; [[Dynamic Replication]]
- **Alternatives:** [[Static Hedge]]
- **Applications:** [[Convertible Bond Arbitrage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]
- [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]
- [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]
