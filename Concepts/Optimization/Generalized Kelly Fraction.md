---
title: "Generalized Kelly Fraction"
type: method
area: "Optimization"
status: evergreen
tags:
  - kelly
  - continuous-distribution
  - area/optimization
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Generalized Kelly Fraction

> [!summary]
> For a nonbinary return distribution, choose the exposure that maximizes expected log wealth.

## Purpose

The continuous formulation permits stock returns or other many-outcome gambles to be analyzed with the same compound-growth objective as binary games. [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Mathematical foundation

For return $R\sim F$, define $G(f)=\int \log(1+fr)\,dF(r)$. An interior optimum satisfies $G'(f)=\int r/(1+fr)\,dF(r)=0$, with feasibility $1+fr>0$ on the support. Under the article’s conditions, strict concavity gives a unique maximum. [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Assumptions

The lower support bound must be finite for a nontrivial positive solution in the stated formulation; the mean return is positive; and the integral and derivative exist. [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Limitations

A fitted continuous distribution may allow unrealistic tails or omit transaction costs, taxes, and extreme events. [[The Kelly Criterion and the Stock Market#AN APPLICATION TO THE U.S. STOCK MARKET|Rotando & Thorp (1992), U.S. stock-market application]]; [[The Kelly Criterion and the Stock Market#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]

## Practical use

Estimate or simulate $F$, solve the first-order condition numerically, stress the lower tail, then consider a fraction of the answer. [[The Kelly Criterion and the Stock Market#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Relationships

- **Prerequisites:** [[Expected Log-Growth Criterion]]; [[Return Distribution]]
- **Extensions:** [[Continuous-Time Kelly Allocation]]
- **Alternatives:** [[Mean-Variance Allocation]]
- **Applications:** [[Numerical Integration]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]
- [[The Kelly Criterion and the Stock Market#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]
