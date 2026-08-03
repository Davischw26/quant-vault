---
title: "Estimator-Induced Option Price Bias"
type: concept
area: "Derivatives Pricing"
status: evergreen
tags:
  - estimation
  - option-pricing
  - area/derivatives-pricing
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Estimator-Induced Option Price Bias

> [!summary]
> An unbiased variance estimate does not generally produce an unbiased option value after passing through a nonlinear pricing formula.

## Purpose

Thorp emphasizes that for nonlinear $h$, $E[h(\hat\sigma^2)]$ generally differs from $h(\sigma^2)$. He investigates whether ordinary plug-in Black–Scholes prices are biased, especially for out-of-the-money options. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Mathematical foundation

The issue is Jensen-type nonlinearity: plug-in value $C(\hat\sigma^2)$ is random, and its expectation need not equal $C(\sigma^2)$. The paper proposes averaging model values over variance contributions and suggests numerical integration under the chi-square sampling density. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Assumptions

A specified sampling distribution for the volatility estimator and a fixed pricing model. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Limitations

The article presents the proposed estimator as unfinished work and calls for theoretical or numerical evaluation; it is not a validated correction. [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]

## Practical use

Monte Carlo the estimator distribution, reprice each draw, and compare the average plug-in price with the price at true variance. This directly implements the proposed test.

## Relationships

- **Prerequisites:** [[Historical Volatility Estimator]]; [[Black-Scholes Model]]
- **Extensions:** [[Parameter-Uncertainty Pricing]]
- **Alternatives:** [[Plug-In Estimation]]
- **Applications:** [[Worked Example - Volatility Estimation Bias Test]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]
