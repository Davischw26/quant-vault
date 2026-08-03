---
title: "Growth-Security Tradeoff"
type: concept
area: "Portfolio Theory"
status: evergreen
tags:
  - kelly
  - risk-return
  - area/portfolio-theory
source_files:
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Growth-Security Tradeoff

> [!summary]
> Higher Kelly fractions raise typical growth but also widen terminal-wealth dispersion and worsen adverse paths.

## Purpose

It makes the cost of pursuing maximal asymptotic growth visible at a finite decision horizon. Across the simulations, mean and maximum terminal wealth rise with the Kelly fraction while minimum wealth falls and standard deviation rises. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.2 Bicksler - Thorp (1973) Case I - Uniform Returns|MacLean et al. (2010), uniform-return experiment]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]

## Mathematical foundation

A useful empirical frontier plots $E[\log W_T]$ against $\operatorname{sd}(\log W_T)$ over fractions $c$. The full-Kelly point maximizes the first coordinate; fractions above one can be inefficient because they lower growth and raise dispersion. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Assumptions

Results depend on the specified return generator, horizon, rebalancing rule, and leverage mechanics. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#1 Introduction|MacLean et al. (2010), Introduction]]

## Limitations

Terminal mean and variance do not fully describe skewed or heavy-tailed wealth. The simulations report skewness, kurtosis, threshold probabilities, and path extremes for that reason. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Practical use

Choose a Kelly fraction using tolerable drawdown or terminal-loss probabilities rather than long-run growth alone. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Relationships

- **Prerequisites:** [[Fractional Kelly Strategy]]; [[Terminal Wealth Distribution]]
- **Extensions:** [[Risk-Constrained Kelly]]
- **Alternatives:** [[Mean-Variance Allocation]]
- **Applications:** [[Monte Carlo Simulation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.2 Bicksler - Thorp (1973) Case I - Uniform Returns|MacLean et al. (2010), uniform-return experiment]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]
