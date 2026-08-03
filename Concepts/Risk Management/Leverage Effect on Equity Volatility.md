---
title: "Leverage Effect on Equity Volatility"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - leverage
  - volatility
  - area/risk-management
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Leverage Effect on Equity Volatility

> [!summary]
> Equity’s percentage volatility tends to rise as debt becomes larger relative to equity or as equity price falls.

## Purpose

The structural option example suggests that common-stock volatility increases with debt-to-equity and that percentage moves can be larger after price declines. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Mathematical foundation

If equity is a call $E(A)$ on firm assets, relative sensitivity is $(A/E)(\partial E/\partial A)$; leverage makes this exceed one and vary with moneyness. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Assumptions

The mechanism relies on the simplified equity-as-option representation and stable asset volatility. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Limitations

The article presents empirical tests as desirable rather than completed and warns that long-horizon changes in leverage and prices can offset one another. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Practical use

Add debt-to-equity and price level to volatility regressions; check whether option “mispricing” is actually unmodeled state-dependent volatility. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Relationships

- **Prerequisites:** [[Equity as a Call Option on Firm Assets]]
- **Extensions:** [[Constant Elasticity of Variance Model]]
- **Conflicts:** [[Constant Volatility Assumption]]
- **Applications:** [[Volatility Forecasting]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]
