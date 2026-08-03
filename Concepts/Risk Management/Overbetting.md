---
title: "Overbetting"
type: concept
area: "Risk Management"
status: evergreen
tags:
  - kelly
  - ruin
  - leverage
  - area/risk-management
source_files:
  - "The Kelly Criterion and the Stock Market"
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Overbetting

> [!summary]
> Allocate more than the growth-optimal exposure; expected log growth falls while risk rises.

## Purpose

Overbetting identifies the dangerous side of the Kelly curve. In the even-money binary model, growth becomes negative beyond the positive root $f_0>f^*$ of $G(f)=0$, so wealth converges toward zero almost surely. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

The Kelly optimum satisfies $G'(f^*)=0$. Concavity implies $G$ decreases after $f^*$; the simulations define fractions above one as overbetting and show lower mean log wealth with higher log-wealth dispersion. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Assumptions

The long-run result uses repeated compounding under the modeled return process. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Limitations

A finite sample may reward overbetting, which can disguise the deterioration in long-run growth. Leveraged losses can also push wealth below zero, violating the classical positive-wealth setup. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]

## Practical use

Treat $f^*$ as a ceiling before additional constraints, not a target to exceed. Stress leverage and bankruptcy mechanics explicitly. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Relationships

- **Prerequisites:** [[Expected Log-Growth Criterion]]
- **Extensions:** [[Ruin Boundary]]
- **Alternatives:** [[Fractional Kelly Strategy]]
- **Applications:** [[Leverage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]
