---
title: "Law of Large Numbers in Dynamic Hedging"
type: theorem
area: "Probability"
status: evergreen
tags:
  - law-of-large-numbers
  - hedging
  - area/probability
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Law of Large Numbers in Dynamic Hedging

> [!summary]
> As hedge adjustments become more frequent, independent small hedging errors average out in the source’s revised derivation.

## Purpose

Thorp’s corrected derivation keeps the random squared-normal term omitted in an earlier Taylor argument, then shows that cumulative risk tends to zero as a fixed interval is subdivided into increasingly many hedge adjustments. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Mathematical foundation

Each subinterval error contains a term proportional to $(Z_i^2-1)\Delta t/n$. With independent standard-normal $Z_i$, the sample average of $Z_i^2$ converges to one, leaving the deterministic Black–Scholes PDE term in the limit. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Assumptions

Independent normal shocks, smooth option value, continuous rebalancing limit, and controlled Taylor remainders. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Limitations

At finite adjustment frequency, hedged returns remain risky; transaction costs and discontinuous jumps obstruct the ideal limit. The finite-frequency risk is sourced, while the jump obstruction is connected from the corpus’s global-risk warning. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]; [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Model discrete hedge error instead of treating a delta hedge as literally riskless. [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]

## Relationships

- **Prerequisites:** [[Independent Increments]]; [[Delta Hedging]]
- **Extensions:** [[Black-Scholes PDE]]
- **Conflicts:** [[Jump Risk]]
- **Applications:** [[Discrete Hedging Error]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]
- [[Common Stock Volatilities in Option Formulas#APPLICATION|Thorp (1976), discrete hedge risk]]
