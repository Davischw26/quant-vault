---
title: "No-Arbitrage Principle"
type: assumption
area: "Derivatives Pricing"
status: evergreen
tags:
  - no-arbitrage
  - pricing
  - area/derivatives-pricing
source_files:
  - "Extensions of the Black-Scholes Option Model"
  - "Common Stock Volatilities in Option Formulas"
---
# No-Arbitrage Principle

> [!summary]
> Two portfolios with the same future payoffs should not sustain different prices once trading and financing are feasible.

## Purpose

Black–Scholes reasoning makes a continuously hedged option-stock portfolio locally riskless and equates its return to the market riskless rate. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]

## Mathematical foundation

Delta hedging removes the first-order stock shock; imposing return $r$ on the hedged equity yields the pricing PDE. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Assumptions

Trading, borrowing, shorting, and rebalancing must be sufficiently feasible for the replicating argument. [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]

## Limitations

Borrow/lend spreads, retained short proceeds, transaction costs, margin limits, and discrete hedging create bands rather than one frictionless price. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]; [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Practical use

Construct payoff-equivalent packages and compare their all-in costs, not quoted prices alone. [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Relationships

- **Prerequisites:** [[Payoff Replication]]
- **Extensions:** [[Black-Scholes Model]]
- **Alternatives:** [[No-Arbitrage Price Band]]
- **Applications:** [[Deep-In-the-Money Call Financing Trade]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]
- [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]
- [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]
