---
title: "Research Gap - Estimator-Induced Option Bias"
type: research-gap
area: "Derivatives Pricing"
status: evergreen
tags:
  - research-gap
  - estimation
  - area/derivatives-pricing
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Research Gap - Estimator-Induced Option Bias

## Open question

Is the proposed averaging estimator unbiased for Black–Scholes option value, and how large is ordinary plug-in bias across volatility, maturity, moneyness, and sample size? The article explicitly says the author had not finished the problem. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Minimal research program

- Derive $E[C(\hat\sigma^2)]$ under the chi-square law where possible.
- Validate by [[Worked Example - Volatility Estimation Bias Test]].
- Compare correction size with bid-ask and [[Liquidity Service Cost]].
- Repeat under time-varying volatility and jumps as out-of-model robustness tests.

The final two extensions are inferred from the corpus’s transaction-cost and alternate-process cautions.
