---
title: "Worked Example - Global Portfolio Stress Grid"
type: worked-example
area: "Risk Management"
status: evergreen
tags:
  - worked-example
  - stress-testing
  - area/risk-management
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Worked Example - Global Portfolio Stress Grid

## Objective

Translate the source’s global-risk questions into a reproducible portfolio revaluation grid. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Scenario axes

- Equity index: $-10\%$, $-25\%$, $-40\%$.
- Parallel rate shift: $+200$, $+500$, $+800$ basis points.
- Volatility level: $+25\%$, $+100\%$.
- Credit spread: moderate and severe widening.
- Liquidity: double or quadruple expected execution costs.

The first three axes reflect shocks explicitly discussed by Thorp; credit and liquidity overlays are inferred from the convertible and execution material. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]; [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Procedure

For every joint scenario, fully revalue positions, recompute hedge ratios, record P&L, funding demand, and inability to trade, and compare the loss with reserves. Do not clip shocks at historical maxima because the source identifies that practice as a fallacy. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Output

Store the worst scenario, largest factor contributor, failed hedge, and remediation. Link each position back to its pricing model and model-assumption notes.
