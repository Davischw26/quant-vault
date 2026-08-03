---
title: "Option Greeks"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - options
  - greeks
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
  - "Common Stock Volatilities in Option Formulas"
---
# Option Greeks

> [!summary]
> Local derivatives of option value with respect to market inputs: delta, gamma, theta, vega, and rho.

## Purpose

Thorp reports using the power-series sensitivities of the Black–Scholes formula to manage local portfolio risk: delta, gamma/curvature, theta, vega, and rho. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

$\Delta=\partial V/\partial S$, $\Gamma=\partial^2V/\partial S^2$, $\Theta=\partial V/\partial t$, vega $=\partial V/\partial\sigma$, and $\rho=\partial V/\partial r$. The corpus derives rate and volatility sensitivities and relates vega to curvature. [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]; [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Assumptions

Local differentiability and small input changes; the computed sensitivities inherit the pricing model’s assumptions. [[Common Stock Volatilities in Option Formulas#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]

## Limitations

Greeks are local and can fail to represent large discontinuous moves or joint nonlinear shifts. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Practical use

Aggregate Greeks across the portfolio for local control, then pair them with scenario shocks for global risk. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Relationships

- **Prerequisites:** [[Black-Scholes Model]]
- **Extensions:** [[Local Risk]]
- **Alternatives:** [[Scenario Stress Testing]]
- **Conflicts:** [[Global Risk]]
- **Applications:** [[Delta-Neutral Option Hedge]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
- [[Common Stock Volatilities in Option Formulas#^volatility-estimation|Thorp (1976), volatility estimation]]
- [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]
