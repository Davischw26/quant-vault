---
title: "Kelly Criterion"
type: chapter
route: 2
order: 1
aliases:
  - Expected log growth
tags:
  - sizing
  - kelly
---
# Kelly Criterion

> [!summary]
> Kelly chooses the exposure that maximizes expected compound growth. In practice, treat the result as a model-dependent upper bound.

## The objective

Let $R$ be the return on one unit of risky exposure and let $f$ be the fraction of wealth exposed. The next-period wealth multiplier is $1+fR$. Kelly chooses:

$$
f^*=\arg\max_f E[\log(1+fR)]
$$

subject to:

$$
1+fR>0
$$

for every modeled outcome. The positivity condition prevents modeled bankruptcy. [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Binary case

Suppose a bet wins $b$ units per unit staked with probability $p$ and loses the stake with probability $q=1-p$. Then:

$$
G(f)=p\log(1+bf)+q\log(1-f).
$$

Setting $G'(f)=0$ gives:

$$
\boxed{f^*=\frac{bp-q}{b}}
$$

For even money, $b=1$, so $f^*=p-q=2p-1$.

### Example

For $p=0.53$, $q=0.47$, and even-money odds:

$$
f^*=0.53-0.47=0.06.
$$

Full Kelly says 6% of current wealth. Half Kelly says 3%. If your estimate of $p$ falls to 0.51, full Kelly falls to 2%. The large change in size from a small change in $p$ is exactly why estimation error matters.

## General return distribution

For many possible returns with distribution $F$:

$$
G(f)=\int \log(1+fr)\,dF(r).
$$

An interior solution satisfies:

$$
\int \frac{r}{1+fr}\,dF(r)=0.
$$

There may be no closed form. Estimate or simulate the distribution, enforce the worst-case wealth constraint, and solve numerically. Strict concavity gives a unique optimum under the conditions in the source. [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Why overbetting is uniquely bad

The log-growth curve is concave. Moving above $f^*$:

- lowers expected compound growth;
- increases dispersion and drawdown;
- can eventually make modeled long-run growth negative.

This is worse than ordinary inefficiency: you accept more risk for less growth. In the repeated binary model, a second fraction $f_0>f^*$ may satisfy $G(f_0)=0$. Beyond it, wealth tends toward zero almost surely under the modeled process. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), growth and ruin results]]

## What the formula needs

Full Kelly is justified only when:

- the return distribution is known well enough;
- outcomes and dependence are modeled correctly;
- capital can be rebalanced proportionally;
- the opportunity repeats;
- all relevant costs and financing are included;
- wealth can remain positive through every modeled outcome;
- maximizing long-run log growth matches the investor’s objective.

These assumptions are unusually strong in markets.

## What Kelly does not decide

Kelly does not by itself specify:

- how to estimate expected returns;
- how to model structural breaks or unbounded tails;
- drawdown or liability constraints;
- taxes, market impact, margin calls, or liquidity;
- how several simultaneous bets interact;
- how a finite-horizon investor values different outcomes.

Those are not small implementation details. They determine the practical fraction.

## Practical interpretation

Use full Kelly as:

1. a consistency check between claimed edge and claimed size;
2. a warning line against overbetting;
3. a starting point for simulation;
4. a ceiling that uncertainty and hard constraints reduce.

Do not use it as automatic authorization for leverage.

## Apply it

Use [[Position Sizing Checklist]] to calculate a practical position. Continue to [[Fractional Kelly and Survival]] to choose how far below the ceiling to operate.

---

**Route:** [[02 Position Sizing]] · **Next:** [[Fractional Kelly and Survival]] · **Foundation:** [[Compounding, Not Averages]]
