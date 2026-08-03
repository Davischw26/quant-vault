---
title: "Warrant Pricing with Restricted Short Proceeds"
type: model
area: "Derivatives Pricing"
status: evergreen
tags:
  - warrants
  - short-selling
  - area/derivatives-pricing
source_files:
  - "Extensions of the Black-Scholes Option Model"
---
# Warrant Pricing with Restricted Short Proceeds

> [!summary]
> Modify option value when a broker retains short-sale proceeds, changing the financing economics of the hedge.

## Purpose

The standard short-sale assumption is inappropriate for warrant hedgers when proceeds remain with the broker. Thorp derives distinct prices for short-warrant/long-stock and long-warrant/short-stock hedges. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]

## Mathematical foundation

The solutions rescale the standard call value to reflect that the retained proceeds become available only later. Exact OCR notation is unreliable; consult the source PDF before implementing the exponential factors. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]

## Assumptions

Calls and warrants are treated alike except for the specified short-proceeds restriction; other Black–Scholes assumptions remain. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]

## Limitations

Corporate dilution and other warrant-specific terms can create additional differences, which the source acknowledges. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]

## Practical use

Calculate a financing-adjusted no-arbitrage band; hedge only when the market price clears the relevant side after costs. [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]; [[Short-Sale Financing]]
- **Extensions:** [[No-Arbitrage Price Band]]
- **Alternatives:** [[Standard Call Valuation]]
- **Applications:** [[Warrant Hedge]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]]
