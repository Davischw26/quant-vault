---
title: "Stochastic Processes MOC"
type: moc
area: "Stochastic Processes"
status: evergreen
tags:
  - moc
  - stochastic-processes
  - area/stochastic-processes
---
# Stochastic Processes MOC

## Baseline process

[[Brownian Motion]] → [[Geometric Brownian Motion]] → [[Drift and Volatility]] → [[Black-Scholes Model]].

## Departures from the baseline

- [[Constant Elasticity of Variance Model]] makes absolute volatility scale as $S^\alpha$.
- [[Equity as a Call Option on Firm Assets]] provides a structural route to the [[Leverage Effect on Equity Volatility]].
- [[Jump Risk]] separates discontinuities from diffusion.
- [[Fat-Tail Risk]] conflicts with thin lognormal tails.
- [[Research Gap - Time-Varying Volatility]] collects random-walk volatility, recency weighting, and volume-time questions.

## Estimation and testing

[[Historical Volatility Estimator]] → [[Chi-Square Variance Inference]]; compare with [[Implied Volatility]]. Test price dependence through [[Research Gap - CEV Exponent and Leverage]].

> [!inference] Model ladder
> Begin with GBM as a falsifiable baseline, then add only the state dependence, jumps, or time variation that produces measurable forward improvement.
