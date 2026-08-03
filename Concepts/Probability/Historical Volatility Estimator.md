---
title: "Historical Volatility Estimator"
type: method
area: "Probability"
status: evergreen
tags:
  - volatility
  - estimation
  - area/probability
source_files:
  - "Common Stock Volatilities in Option Formulas"
  - "A Public Index for Listed Options"
---
# Historical Volatility Estimator

> [!summary]
> Estimate variance rate from squared log-price increments, with weights and interval-length corrections.

## Purpose

The source derives an unbiased estimator of constant variance rate under geometric Brownian motion and studies its measurement error. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Mathematical foundation

For log price $Y=\log S$, normalized equal-spacing notation is $\hat\sigma^2=(1/n\Delta t)\sum_i(\Delta Y_i-m\Delta t)^2$. For unequal intervals, dividing each squared increment by its interval and then averaging gives equal statistical weights. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Assumptions

Independent normal log increments, constant volatility, and either known drift or a sample-mean adjustment. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Limitations

Volatility changes through time; near-term versus remote weighting, regression to the mean, Bayesian estimation, and option-implied information remain research choices. [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]

## Practical use

Use three months to one year of data with heavier recent weighting in the public-index procedure, and attach confidence intervals rather than treating the estimate as exact. [[A Public Index for Listed Options#2. THE r AND v PARAMETERS|Thorp (1977), model parameters]]

## Relationships

- **Prerequisites:** [[Log Return]]; [[Chi-Square Variance Inference]]
- **Extensions:** [[Recency-Weighted Volatility]]
- **Alternatives:** [[Implied Volatility]]
- **Applications:** [[Black-Scholes Model]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]
- [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]
- [[A Public Index for Listed Options#2. THE r AND v PARAMETERS|Thorp (1977), model parameters]]
