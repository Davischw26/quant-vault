---
title: "Terminal Wealth Distribution"
type: concept
area: "Probability"
status: evergreen
tags:
  - simulation
  - wealth
  - area/probability
source_files:
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Terminal Wealth Distribution

> [!summary]
> The full distribution of compounded terminal wealth, not just its mean, describes the finite-horizon consequences of a strategy.

## Purpose

The simulation study compares maxima, means, minima, standard deviations, skewness, excess kurtosis, threshold counts, and extreme paths across Kelly fractions. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Mathematical foundation

For proportional returns $R_t$ and allocation $f$, $W_T=W_0\prod_{t=1}^T(1+fR_t)$, so $\log W_T=\log W_0+\sum_t\log(1+fR_t)$. This explains why log wealth can appear approximately normal while wealth is strongly right-skewed. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Assumptions

Approximate lognormality relies on the return process and breaks in levered cases with negative wealth. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]

## Limitations

Sample maxima and minima are scenario-dependent, and 3,000 paths cannot establish tail probabilities at much smaller levels. The sample-size caution is inferred from simulation methodology.

## Practical use

Report quantiles, loss probability, drawdown, bankruptcy frequency, and threshold attainment alongside mean wealth. The article explicitly uses threshold counts and path extremes. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Relationships

- **Prerequisites:** [[Geometric Compounding]]
- **Extensions:** [[Lognormal Wealth Approximation]]
- **Alternatives:** [[Expected Terminal Wealth]]
- **Applications:** [[Monte Carlo Simulation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]
