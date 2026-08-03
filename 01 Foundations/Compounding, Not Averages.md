---
title: "Compounding, Not Averages"
type: chapter
route: 1
order: 1
tags:
  - foundations
  - compounding
---
# Compounding, Not Averages

> [!summary]
> Wealth compounds by multiplication. That makes the order and size of losses central to long-run results, even when the average payoff is favorable.

## The idea

If wealth changes by return $R_t$ in period $t$, then

$$
W_T=W_0\prod_{t=1}^{T}(1+R_t).
$$

The arithmetic average describes the typical one-period return. It does not describe the wealth path. A 50% loss followed by a 50% gain leaves $0.5\times1.5=0.75$ of the starting wealth. The average return is zero, but wealth is down 25%.

Taking logs turns the product into a sum:

$$
\log\frac{W_T}{W_0}=\sum_{t=1}^{T}\log(1+R_t).
$$

This is why expected log growth appears throughout Thorp’s work. It measures the average contribution of each repeated decision to compound wealth. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## A simple favorable game

Suppose a bet pays even money, wins with probability $p=0.53$, and loses with probability $q=0.47$. If fraction $f$ of wealth is bet each time, one round multiplies wealth by:

- $1+f$ after a win;
- $1-f$ after a loss.

The expected arithmetic change is positive for every positive $f$:

$$
E[R]=f(p-q)=0.06f.
$$

That does **not** mean every positive stake is sensible. Compound growth is

$$
G(f)=p\log(1+f)+q\log(1-f).
$$

This function rises, reaches a maximum at $f=0.06$, then falls. Large bets turn the same favorable game into poor compound growth. Betting all wealth makes one loss terminal.

## What this changes in practice

### 1. Judge a strategy after sizing

An edge is a property of the opportunity. Growth is a property of the opportunity **and the exposure**. A positive-return strategy can still be destructive when overleveraged.

### 2. Compare paths, not only endpoints

Two strategies with the same average terminal wealth can have very different probabilities of deep drawdown, recovery time, or failure. The fractional-Kelly simulations therefore examine the full terminal-wealth distribution, threshold probabilities, dispersion, and extreme paths—not only the mean. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), simulation design]]

### 3. Keep wealth positive

The logarithm is undefined at zero or negative wealth. This mathematical restriction matches a practical truth: once capital, margin, or trust is exhausted, attractive future opportunities no longer help.

## A useful mental model

For any repeated investment decision, separate four questions:

1. **Edge:** Is the expected payoff positive after costs?
2. **Distribution:** What are all plausible gains and losses?
3. **Size:** How much of wealth is exposed?
4. **Path:** Can the position survive the sequence of outcomes?

The first question alone is incomplete.

## Where this model is limited

Expected log growth assumes a repeatable process, divisible capital, a usable return distribution, and wealth as the state variable that matters. Real investors also face taxes, liabilities, illiquid assets, changing opportunities, borrowing limits, and preferences over finite-horizon outcomes.

The correct lesson is therefore not “always maximize log wealth.” It is:

> Evaluate investment decisions in the geometry of compounding, and never let an arithmetic average hide a destructive path.

## Apply it

Continue to [[Kelly Criterion]] for the sizing rule, or use [[Position Sizing Checklist]] for a live decision.

---

**Route:** [[01 Foundations]] · **Next:** [[Models Are Decision Tools]] · **Home:** [[Home]]
