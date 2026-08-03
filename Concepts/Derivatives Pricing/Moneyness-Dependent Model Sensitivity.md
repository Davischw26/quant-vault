---
title: "Moneyness-Dependent Model Sensitivity"
type: concept
area: "Derivatives Pricing"
status: evergreen
tags:
  - moneyness
  - model-risk
  - area/derivatives-pricing
source_files:
  - "A Public Index for Listed Options"
---
# Moneyness-Dependent Model Sensitivity

> [!summary]
> Deep-in-the-money, near-strike, and far-out-of-the-money options are dominated by different inputs and error modes.

## Purpose

The public-index design separates three regions: deep-in-the-money values mainly reflect rates, near-strike values mainly reflect volatility, and far-out-of-the-money values have large relative sensitivity to model specification. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

## Mathematical foundation

Vega is largest near the strike, while the source relates $\partial C/\partial\sigma$ to curvature and remaining time. Deep-in-the-money call value approaches stock conversion value plus financing value. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]; [[A Public Index for Listed Options#2. THE r AND v PARAMETERS|Thorp (1977), model parameters]]

## Assumptions

The qualitative ranking is derived in the Black–Scholes framework and for the stated option classes. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

## Limitations

Dividends, exercise features, liquidity, and alternate stochastic processes can move the boundaries between regions. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

## Practical use

Match the diagnostic to moneyness: rate index for deep ITM, volatility comparison near strike, and explicit model-risk label far OTM. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]
- **Extensions:** [[Option-Implied Volatility Index]]; [[Option-Implied Interest Rate Index]]
- **Applications:** [[Option Mispricing Screen]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]
- [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]
