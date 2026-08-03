---
title: "Implied Volatility"
type: method
area: "Derivatives Pricing"
status: evergreen
tags:
  - volatility
  - options
  - area/derivatives-pricing
source_files:
  - "A Public Index for Listed Options"
---
# Implied Volatility

> [!summary]
> The volatility parameter that makes a chosen option-pricing model equal the observed market price.

## Purpose

Given a rate and option price, solve the model backward for market volatility. In the public-index article this is interpreted, under strong efficiency and model assumptions, as the market’s estimate of future volatility. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Mathematical foundation

Solve $C_{model}(S,K,T,r,\sigma_{imp})=C_{mkt}$. Call value increases with volatility, so for a fixed feasible rate there is at most one implied volatility. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Assumptions

Observed price is valid, the model is appropriate, the rate is fixed, and the option price lies in the model’s feasible range. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Limitations

Deep in- or out-of-the-money prices can imply absurd values because of rate error, price discreteness, noise, or misspecification; the index procedure truncates extremes. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Practical use

Use robust root finding, filter stale or infeasible quotes, and compare with [[Historical Volatility Estimator]] only after aligning horizon and model inputs.

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]; [[Market Price]]
- **Extensions:** [[Option-Implied Volatility Index]]
- **Alternatives:** [[Historical Volatility Estimator]]
- **Applications:** [[Volatility Relative-Value Trade]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]
