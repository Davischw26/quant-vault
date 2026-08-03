---
title: "Dividend-Adjusted Call Valuation"
type: model
area: "Derivatives Pricing"
status: evergreen
tags:
  - options
  - dividends
  - area/derivatives-pricing
source_files:
  - "Extensions of the Black-Scholes Option Model"
---
# Dividend-Adjusted Call Valuation

> [!summary]
> Value an American call around known cash dividends by comparing continuation value with immediate exercise and bounding when early exercise matters.

## Purpose

Thorp extends the no-dividend model to one known cash dividend, provides the condition under which the no-dividend solution is unchanged, and gives upper and lower bounds otherwise; the method recurses over a finite dividend series. [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]

## Mathematical foundation

Immediately before ex-dividend time, compare shifted continuation value with intrinsic value $S-K$. Their intersection defines an exercise threshold; no intersection means holding remains optimal. The OCR-corrupted threshold formula should be checked in the linked PDF before exact implementation. [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]

## Assumptions

Known dividend amount and timing, the otherwise Black–Scholes setting, and American exercise rights. [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]

## Limitations

The article provides bounds where the dividend changes the solution, not a universal closed form; uncertain dividends add another state variable. [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]

## Practical use

Use backward induction over ex-dividend dates and verify exercise versus continuation at each date. This implementation restates the source’s recursive extension.

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]; [[American Option]]
- **Extensions:** [[Finite-Dividend Backward Induction]]
- **Alternatives:** [[European Call Valuation]]
- **Applications:** [[Early Exercise Decision]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]
