---
title: "Worked Example - Volatility Estimation Bias Test"
type: worked-example
area: "Derivatives Pricing"
status: evergreen
tags:
  - worked-example
  - option-pricing
  - area/derivatives-pricing
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Worked Example - Volatility Estimation Bias Test

## Question

Does plugging an unbiased variance estimator into Black–Scholes produce an unbiased option value? The source says not in general and proposes evaluating the expectation under the estimator’s chi-square distribution. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Monte Carlo experiment

1. Fix true $(S,K,T,r,\sigma)$.
2. Draw $Q_j\sim\chi_n^2$ and set $\hat\sigma_j^2=\sigma^2Q_j/n$.
3. Compute $C_j=C_{BS}(S,K,T,r,\hat\sigma_j)$.
4. Compare $\bar C$ with $C_{BS}(S,K,T,r,\sigma)$.
5. Repeat over moneyness and maturity.

The simulation is a direct numerical version of the source’s suggested theoretical or numerical integration. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## What to inspect

Bias can vary with moneyness; the article expected the most meaningful upward correction in out-of-the-money regions but explicitly treated the proposed estimator as unfinished. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Research status

Do not encode the article’s tentative direction as a fact. Store the result as a reproducible experiment and link it to [[Research Gap - Estimator-Induced Option Bias]].
