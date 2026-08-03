---
title: "Fractional Kelly Strategy"
type: strategy
area: "Portfolio Theory"
status: evergreen
tags:
  - kelly
  - risk-control
  - area/portfolio-theory
source_files:
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Fractional Kelly Strategy

> [!summary]
> Invest a fraction $c\in(0,1)$ of the full-Kelly allocation to exchange some growth for substantially better downside protection.

## Purpose

Fractional Kelly creates a tunable growth-versus-security tradeoff. Simulations compare full, three-quarter, half, quarter, and eighth Kelly across repeated betting and asset-return environments. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]

## Mathematical foundation

If $w_K$ is the growth-optimal risky allocation, use $w=cw_K$ with $0<c<1$. In the tested settings, mean log wealth peaks at $c=1$ while the standard deviation of log wealth rises with $c$. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Assumptions

The full-Kelly solution is meaningful and the fractional portfolio can be implemented proportionally through time. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#1 Introduction|MacLean et al. (2010), Introduction]]

## Limitations

No fraction eliminates finite-horizon bad sequences. Lower fractions sacrifice long-run growth and do not stochastically dominate full Kelly across all wealth levels. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Practical use

Use smaller $c$ when volatility, correlations, parameter estimates, risk preferences, or the planning horizon are uncertain. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Relationships

- **Prerequisites:** [[Expected Log-Growth Criterion]]
- **Extensions:** [[Growth-Security Tradeoff]]
- **Alternatives:** [[Risk-Constrained Kelly]]
- **Conflicts:** [[Overbetting]]
- **Applications:** [[Position Sizing]]; [[Drawdown Control]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]
