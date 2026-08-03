---
title: "Black-Scholes Model"
type: model
area: "Derivatives Pricing"
status: evergreen
tags:
  - options
  - black-scholes
  - area/derivatives-pricing
source_files:
  - "Extensions of the Black-Scholes Option Model"
  - "Common Stock Volatilities in Option Formulas"
---
# Black-Scholes Model

> [!summary]
> A no-arbitrage option-pricing model obtained by continuously hedging option exposure with stock and financing.

## Purpose

The model supplies an observable-input valuation formula and a normative hedge relation. Thorp presents it as a breakthrough and distinguishes its no-arbitrage purpose from descriptive fit or predictive power. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]; [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Mathematical foundation

For a non-dividend European call, normalized notation is $C=S N(d_1)-Ke^{-rT}N(d_2)$, with $d_1=[\ln(S/K)+(r+\sigma^2/2)T]/(\sigma\sqrt T)$ and $d_2=d_1-\sigma\sqrt T$. The PDE is $C_t+\tfrac12\sigma^2S^2C_{SS}+rSC_S-rC=0$. Formula notation is normalized from OCR. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]

## Assumptions

Constant known short rate; lognormal stock price with constant variance rate; no distributions; European exercise; no transaction costs; fractional borrowing; and usable short-sale proceeds. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]

## Limitations

Dividends, American exercise, unavailable short proceeds, transaction costs, uncertain rates, volatility estimation, jumps, and extreme tails require extensions or caution. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]; [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]; [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Practical use

Use the formula for valuation, Greeks, implied parameters, hedging, and mispricing screens while keeping its normative and empirical roles distinct. [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]; [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

## Relationships

- **Prerequisites:** [[Geometric Brownian Motion]]; [[No-Arbitrage Principle]]
- **Extensions:** [[Dividend-Adjusted Call Valuation]]; [[Warrant Pricing with Restricted Short Proceeds]]
- **Alternatives:** [[Constant Elasticity of Variance Model]]
- **Applications:** [[Delta-Neutral Option Hedge]]; [[Implied Volatility]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]
- [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]
