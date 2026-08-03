---
title: "Ruin Boundary"
type: theorem
area: "Risk Management"
status: evergreen
tags:
  - kelly
  - ruin
  - area/risk-management
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Ruin Boundary

> [!summary]
> The nonzero fraction where expected log growth crosses zero separates positive asymptotic growth from almost-sure decay.

## Purpose

It distinguishes merely suboptimal stakes from stakes that turn a favorable game into long-run loss through excessive exposure. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

For fixed fraction $f$, find $f_0>f^*$ such that $G(f_0)=0$. The cited theorem states: $G(f)>0$ implies wealth tends to infinity almost surely; $G(f)<0$ implies wealth tends to zero almost surely; $G(f)=0$ yields oscillation between arbitrarily small and large values. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Assumptions

The theorem is stated for the repeated favorable-game framework and the relevant admissible strategy conditions. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Limitations

“Ruin” means convergence toward arbitrarily small wealth under infinitely divisible capital; literal bankruptcy behaves differently with discrete money or borrowing. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Practical use

Compute both $f^*$ and $f_0$ when a distribution permits it; the gap quantifies how far overbetting can proceed before modeled log growth turns negative. This use is an inference from the theorem.

## Relationships

- **Prerequisites:** [[Expected Log-Growth Criterion]]
- **Extensions:** [[Drawdown Control]]
- **Conflicts:** [[Expected Value Criterion]]
- **Applications:** [[Leverage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- [[The Kelly Criterion and the Stock Market#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]
