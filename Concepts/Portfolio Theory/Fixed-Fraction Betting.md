---
title: "Fixed-Fraction Betting"
type: method
area: "Portfolio Theory"
status: evergreen
tags:
  - kelly
  - position-sizing
  - area/portfolio-theory
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Fixed-Fraction Betting

> [!summary]
> Stake a constant fraction of current wealth, making exposure automatically scale with the bankroll.

## Purpose

With $B_i=fX_{i-1}$, wins and losses multiply wealth rather than adding a fixed dollar amount. After $S$ wins and $F$ losses in an even-money game, $X_n=X_0(1+f)^S(1-f)^F$. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

The per-trial log-growth converges to $G(f)=p\log(1+f)+q\log(1-f)$ under repeated independent trials. The rule links position size directly to current equity. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Assumptions

The basic analysis assumes the same fractional exposure can be placed each period and that wealth is infinitely divisible. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Limitations

Discrete bet sizes can reintroduce ruin, and borrowed exposure can create negative wealth. Proportional sizing alone does not protect against model error or correlated losses. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Practical use

Translate a strategy signal into an equity fraction, update the dollar position after each wealth change, and impose minimum trade and leverage rules. The last implementation detail is inferred from the proportional rule.

## Relationships

- **Prerequisites:** [[Geometric Compounding]]
- **Extensions:** [[Expected Log-Growth Criterion]]; [[Fractional Kelly Strategy]]
- **Alternatives:** [[Fixed-Dollar Betting]]
- **Applications:** [[Position Sizing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
