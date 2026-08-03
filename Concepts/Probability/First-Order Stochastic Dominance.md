---
title: "First-Order Stochastic Dominance"
type: concept
area: "Probability"
status: evergreen
tags:
  - stochastic-dominance
  - distribution
  - area/probability
source_files:
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# First-Order Stochastic Dominance

> [!summary]
> Distribution A first-order dominates B when it offers at least as much wealth at every cumulative-probability level and more somewhere.

## Purpose

The Kelly simulations use inverse cumulative distributions to check whether one terminal-wealth distribution dominates another. Intersecting plots show that dominance does not hold among the fractional strategies. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Mathematical foundation

For wealth distributions $F_A$ and $F_B$, A first-order dominates B when $F_A(w)\le F_B(w)$ for all $w$, with strict inequality somewhere. Crossing CDFs prevent that ordering.

## Assumptions

Comparison is made on the same wealth scale and horizon. The definition here normalizes standard notation; the source applies the crossing-CDF criterion. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Limitations

Absence of first-order dominance does not mean the choices are equivalent; preferences or other risk criteria are then needed. This is an inferred decision-theory connection.

## Practical use

Plot empirical CDFs or inverse CDFs before declaring a higher-growth strategy “better” at all wealth levels. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]

## Relationships

- **Prerequisites:** [[Terminal Wealth Distribution]]
- **Extensions:** [[Expected Utility Maximization]]
- **Alternatives:** [[Mean-Variance Allocation]]
- **Applications:** [[Fractional Kelly Strategy]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]
