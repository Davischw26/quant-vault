---
title: "Worked Example - Expected Liquidity Cost"
type: worked-example
area: "Market Microstructure"
status: evergreen
tags:
  - worked-example
  - liquidity
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Worked Example - Expected Liquidity Cost

## Problem

Reconcile a roughly 2.5% one-way dealer concession with the study’s roughly 0.5% average expected cost. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Calculation

Phillips and Smith estimated dealer participation near 20% and a one-way concession near 2.5% of option value. The expected cost across all trades is therefore

$$0.20\times2.5\%=0.50\%,$$

close to the fund’s observed 0.54%. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Lesson

[[Bid-Ask Spread]] measures the price of immediate dealer liquidity when used; [[Liquidity Service Cost]] averages that concession over the probability the strategy actually meets a dealer. Applying the full spread to every trade can overstate cost. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Strategy use

Estimate **expected cost = dealer-participation probability × conditional concession** separately for buys, sells, puts, calls, venues, and order types. The segmentation is an inferred implementation that respects the article’s strategy-specific warning.
