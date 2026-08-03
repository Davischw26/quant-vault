---
title: "Risk Management MOC"
type: moc
area: "Risk Management"
status: evergreen
tags:
  - moc
  - risk-management
  - area/risk-management
---
# Risk Management MOC

## Two-layer architecture

[[Local Risk]] uses [[Option Greeks]], factor exposures, and yield/credit sensitivities.

[[Global Risk]] uses [[Scenario Stress Testing]], [[Jump Risk]], [[Fat-Tail Risk]], and capital limits.

## Sizing and survival

- [[Fractional Kelly Strategy]]
- [[Overbetting]]
- [[Ruin Boundary]]
- [[Growth-Security Tradeoff]]
- [[Leverage]]
- [[Capital Reserves]]

## Model and parameter risk

- [[Moneyness-Dependent Model Sensitivity]]
- [[Volatility Parameter Uncertainty]]
- [[Estimator-Induced Option Price Bias]]
- [[Research Gap - OCR Formula Verification]]

## Frictions

[[Bid-Ask Spread]] → [[Liquidity Service Cost]] → net [[Strategy Net Alpha]].

## Worked example

[[Worked Example - Global Portfolio Stress Grid]].

> [!inference] Control loop
> Measure local exposures continuously, run global shocks periodically and after structural change, then feed both into position sizing and reserves.
