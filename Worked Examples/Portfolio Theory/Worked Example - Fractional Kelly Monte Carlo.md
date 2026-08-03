---
title: "Worked Example - Fractional Kelly Monte Carlo"
type: worked-example
area: "Portfolio Theory"
status: evergreen
tags:
  - worked-example
  - simulation
  - area/portfolio-theory
source_files:
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Worked Example - Fractional Kelly Monte Carlo

## Problem

Reproduce the structure of the Ziemba–Hausch experiment: five independent binary wagers, each with expected payoff multiple 1.14, selected with stated probabilities, and compare $1$, $3/4$, $1/2$, $1/4$, and $1/8$ Kelly over 700 decisions and 2,000 paths. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Algorithm

1. Encode odds $b\in\{1,2,3,4,5\}$, win probabilities $(0.570,0.380,0.285,0.228,0.190)$, and opportunity-selection weights $(0.1,0.3,0.3,0.2,0.1)$. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]
2. Compute full-Kelly fractions $(0.140,0.070,0.047,0.035,0.028)$. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]
3. For every path and decision, sample an opportunity, stake $c f^*$ of current wealth, sample win/loss, and update wealth multiplicatively.
4. Report mean, median, minimum, maximum, standard deviation, skewness, excess kurtosis, wealth-threshold counts, and extreme paths. These are the diagnostics used by the source. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Expected qualitative result

Higher fractions create far larger right tails and higher average final wealth, but full Kelly still finished below starting wealth in 12.4% of the article’s 700-decision paths; smaller fractions materially improved downside outcomes. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Validation

Use a fixed random seed for reproducibility, then repeat across seeds. Compare log-wealth CDFs and do not claim [[First-Order Stochastic Dominance]] when they cross. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Trace

[[Return Distribution]] → [[Monte Carlo Simulation]] → [[Terminal Wealth Distribution]] → [[Fractional Kelly Strategy]].
