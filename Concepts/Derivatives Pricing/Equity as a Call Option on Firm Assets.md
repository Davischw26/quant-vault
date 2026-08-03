---
title: "Equity as a Call Option on Firm Assets"
type: model
area: "Derivatives Pricing"
status: evergreen
aliases:
  - "structural equity model"
  - "superstock model"
tags:
  - structural-model
  - credit
  - area/derivatives-pricing
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Equity as a Call Option on Firm Assets

> [!summary]
> In a simplified capital structure, common equity is a European call on total firm assets with debt face value as strike.

## Purpose

If asset value at debt maturity exceeds promised debt, shareholders redeem debt and keep the residual; otherwise they default and equity is zero. This produces payoff $E_T=\max(A_T-D,0)$. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Mathematical foundation

Under lognormal firm assets and zero-coupon debt, Black–Scholes maps asset value to equity value. The option delta amplifies equity’s relative volatility, offering a mechanism for price-dependent equity volatility. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Assumptions

One zero-coupon debt issue, no other liabilities, no dividends, active trading, and lognormal total assets. The article states that this is deliberately oversimplified. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Limitations

Real firms have multiple debts, coupons, taxes, covenants, changing leverage, and strategic default. These are natural missing extensions; the source explicitly notes that restrictions can be lifted and mentions multiple debt classes. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Practical use

Use debt-to-equity changes as a candidate volatility factor and test whether higher leverage predicts higher equity volatility. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]; [[Corporate Debt]]
- **Extensions:** [[Structural Credit Model]]; [[Leverage Effect]]
- **Applications:** [[Equity Volatility Forecasting]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]
