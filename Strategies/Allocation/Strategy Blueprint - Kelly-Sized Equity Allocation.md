---
title: "Strategy Blueprint - Kelly-Sized Equity Allocation"
type: strategy-blueprint
area: "Trading Strategies"
status: evergreen
tags:
  - strategy
  - kelly
  - area/trading-strategies
source_files:
  - "The Kelly Criterion and the Stock Market"
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Strategy Blueprint - Kelly-Sized Equity Allocation

> [!summary]
> Estimate the long-run excess-return distribution, solve the log-growth allocation, then apply a fractional and leverage-constrained implementation.

## Dependency chain

[[Log Return]] → [[Return Distribution]] → [[Generalized Kelly Fraction]] → [[Expected Log-Growth Criterion]] → [[Fractional Kelly Strategy]] → [[Position Sizing]] → [[Drawdown Control]].

## Sourced design

The S&P application fits a bounded quasi-normal approximation to historical annual excess log returns and numerically maximizes expected log growth. It estimated a 117% stock allocation under borrowing at the T-bill rate, while warning that real funding costs, taxes, short-term losses, volatility change, and disasters reduce or qualify that result. [[The Kelly Criterion and the Stock Market#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]

The later simulations show why full Kelly should not be automatic: rates, volatility, correlation, estimation error, risk preferences, and horizon all affect an appropriate fraction. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Testable implementation

1. Estimate forward excess returns with explicit uncertainty.
2. Solve $\max_f E\log(1+fR)$ under a hard wealth-positivity constraint.
3. Apply $c<1$ and a leverage cap.
4. Simulate pathwise wealth, drawdown, and bankruptcy under parameter and tail stress.
5. Trade only if net expected benefit survives financing and transaction costs.

Steps 1–5 are inferred engineering requirements built from the cited caveats.

## Failure tests

Reject or reduce the strategy when the lower-tail model is unstable, estimated $f^*$ changes sign across plausible inputs, leverage creates negative-wealth paths, or the planning horizon makes the simulated loss probability unacceptable.
