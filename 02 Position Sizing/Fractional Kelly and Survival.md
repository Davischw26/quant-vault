---
title: "Fractional Kelly and Survival"
type: chapter
route: 2
order: 2
tags:
  - sizing
  - fractional-kelly
  - drawdown
---
# Fractional Kelly and Survival

> [!summary]
> Fractional Kelly deliberately gives up some modeled growth to gain a less fragile wealth path.

## The rule

If the full-Kelly exposure is $f^*$, fractional Kelly uses:

$$
f=c f^*, \qquad 0<c<1.
$$

Common labels are half Kelly ($c=0.5$) and quarter Kelly ($c=0.25$). The fraction is not a new estimate of the edge. It is a choice about how aggressively to act on that estimate.

## Why use a fraction?

The full-Kelly optimum maximizes **asymptotic expected log growth under the model**. An investor experiences a finite path under an imperfect model.

The simulations in the source compare full, three-quarter, half, quarter, and eighth Kelly across repeated gambling models and equity returns. As the Kelly fraction rises:

- typical growth tends to rise toward full Kelly;
- dispersion of terminal log wealth rises;
- adverse paths become worse;
- the probability of falling below important wealth thresholds can rise;
- fractions above full Kelly become inefficient.

Lower fractions sacrifice long-run growth but provide substantially greater security over finite horizons. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch experiment]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]

## Estimation error makes full Kelly fragile

Suppose the true even-money win probability is 53%, so full Kelly is 6%. If you estimate 56%, you calculate 12%—twice the true optimum.

The error in the probability estimate is only three percentage points, but the error in the stake is 100%. Small edges create this sensitivity because the stake depends on the difference between two nearly equal quantities.

Using a fraction protects against:

- overstated expected return;
- understated volatility or loss severity;
- missing correlation between positions;
- regime change;
- costs that were omitted from the distribution;
- behavioral abandonment during drawdown.

It cannot protect against an edge that does not exist.

## Choose the fraction from consequences

Do not choose $c$ because “half Kelly is common.” Choose it by simulating or enumerating outcomes and setting constraints.

For several candidate fractions, compare:

- expected log growth;
- median terminal wealth;
- probability of losing capital over the actual horizon;
- probability and depth of drawdown;
- recovery time;
- worst plausible path;
- leverage and margin requirements;
- sensitivity to worse inputs.

Pick the largest fraction whose consequences remain acceptable across plausible inputs—not only the point estimate.

## Survival comes before optimization

Define a practical ruin boundary. It may be above literal zero:

- a margin call;
- inability to meet liabilities;
- loss of investor confidence;
- forced liquidation;
- violation of a risk limit;
- a drawdown that causes you to abandon the process.

Any scenario that crosses this boundary invalidates the size, even if the expected log-growth calculation is attractive.

## Hard constraints dominate

After choosing a Kelly fraction, apply:

1. concentration limits;
2. liquidity and exit limits;
3. financing and margin limits;
4. factor and correlation limits;
5. maximum drawdown and loss limits;
6. operational limits.

The final exposure is the **minimum** of the fractional-Kelly size and every hard limit.

## What fractional Kelly does not solve

- It does not make a negative-edge trade positive.
- It does not make an unbounded or unknown loss safe.
- It does not remove tail dependence.
- It does not guarantee a tolerable finite-horizon outcome.
- It does not replace scenario analysis.

Fractional Kelly is a robust-sizing device, not a complete risk system.

## Decision rule

> When inputs are uncertain, prefer a size that remains reasonable when you are wrong to a size that is optimal only when you are exactly right.

---

**Previous:** [[Kelly Criterion]] · **Next:** [[From One Bet to a Portfolio]] · **Playbook:** [[Position Sizing Checklist]]
