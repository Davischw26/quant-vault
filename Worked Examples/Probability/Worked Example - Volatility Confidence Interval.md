---
title: "Worked Example - Volatility Confidence Interval"
type: worked-example
area: "Probability"
status: evergreen
tags:
  - worked-example
  - volatility
  - area/probability
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Worked Example - Volatility Confidence Interval

## Problem

Attach sampling uncertainty to a constant-volatility estimate built from $n$ equally spaced normal log-return increments. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Method

Under the zero-drift model,

$$\frac{n\hat\sigma^2}{\sigma^2}\sim\chi_n^2.$$

A two-sided $(1-\alpha)$ interval for variance is therefore

$$
\left[
\frac{n\hat\sigma^2}{\chi^2_{1-\alpha/2,n}},
\frac{n\hat\sigma^2}{\chi^2_{\alpha/2,n}}
\right],
$$

and the volatility interval is obtained by taking square roots. This formula normalizes the article’s chi-square inequalities. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Interpretation

Daily data provide more degrees of freedom and therefore a tighter interval than weekly data under the model. The source uses this to argue that measured volatility is uncertain even before time variation or model misspecification is considered. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]

## Implementation idea

Return the point estimate and interval together; reprice options at the lower and upper endpoints to expose [[Volatility Parameter Uncertainty]]. If returns show jumps or volatility clustering, label the chi-square interval “model-conditional.” That label is an inferred safeguard based on [[Common Stock Volatilities in Option Formulas#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]].
