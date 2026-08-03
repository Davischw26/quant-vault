---
title: "Chi-Square Variance Inference"
type: method
area: "Probability"
status: evergreen
tags:
  - chi-square
  - confidence-interval
  - area/probability
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Chi-Square Variance Inference

> [!summary]
> Under normal independent increments, a scaled realized-variance estimator has a chi-square distribution.

## Purpose

This sampling distribution quantifies measurement uncertainty in estimated stock variance and supports confidence intervals. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Mathematical foundation

With zero drift and $n$ equal independent increments, $n\hat\sigma^2/\sigma^2\sim\chi_n^2$. With unknown mean, the centered sample variance uses $n-1$ degrees of freedom. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Assumptions

Normality, independence, constant variance, and the stated treatment of drift. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Limitations

Time-varying volatility, jumps, and serial dependence invalidate the exact chi-square calibration. These violations are connected from the source’s alternate-model research agenda. [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]

## Practical use

Report interval estimates for volatility inputs and propagate them into option-value sensitivity or scenario ranges. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Relationships

- **Prerequisites:** [[Historical Volatility Estimator]]; [[Normal Distribution]]
- **Extensions:** [[Volatility Parameter Uncertainty]]
- **Applications:** [[Option Model Risk]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]
- [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]
