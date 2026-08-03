---
title: "Testing Market-Timing Claims"
type: chapter
route: 3
order: 2
tags:
  - strategy-research
  - market-timing
  - hypothesis-testing
---
# Testing Market-Timing Claims

> [!summary]
> A timing claim needs a frozen signal, a matching null hypothesis, return magnitudes, and a prospective test.

## Define the claim precisely

“The indicator predicts the market” is not testable. A complete claim states:

- the information available at the decision time;
- the exact indicator rule;
- whether it predicts direction, return magnitude, volatility, or drawdown;
- the market and return interval;
- the action taken;
- trading costs and exposure when no signal exists.

The Granville study separated the historical record into identified buy and sell calls, then examined directional success, return differences, and prospective signals. [[Can Joe Granville Time the Market|Baesel, Shows & Thorp (1982)]]

## Test 1: directional selection

Suppose the full sample contains $N$ periods, of which $K$ are positive. A rule selects $n$ periods as “up,” and $k$ of them are actually positive.

Under random selection without replacement:

$$
P(X=k)=\frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}.
$$

A one-sided tail probability sums outcomes at least as favorable as the observed $k$.

### What this answers

Whether the rule selected more positive periods than random selection would usually produce under this specific null.

### What it does not answer

- whether gains exceed losses in magnitude;
- whether the rule is profitable after costs;
- whether observations are independent;
- whether this was the only rule tested;
- whether performance persists forward.

## Test 2: return magnitude

Split returns into signaled and comparison regimes. A two-sample test asks whether their means differ:

$$
t=\frac{\bar r_1-\bar r_0}
{\sqrt{s_1^2/n_1+s_0^2/n_0}}.
$$

In financial returns, skew, fat tails, autocorrelation, and changing variance weaken textbook approximations. Use the test as one piece of evidence and inspect the full distribution.

## Test 3: economic implementation

Translate signals into a frozen strategy:

- entry and exit price;
- time in the market;
- cash return when uninvested;
- turnover;
- tax and trading cost;
- leverage;
- drawdown.

A statistically detectable directional effect may still be too small or too costly to trade.

## The data-mining correction

If the published indicator is the survivor of many unreported variants, its historical p-value is optimistic. The source explicitly raises this concern and treats a prospective sequence of future forecasts as more informative. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data-mining appendix]]

The defensible response is procedural:

1. document the search;
2. freeze the chosen rule;
3. set the sample size and evaluation metric;
4. collect future signals without revision;
5. judge only after the test window closes.

## A complete verdict

Use four separate labels:

| Dimension | Question |
|---|---|
| **Directional** | Does the rule classify outcomes better than chance? |
| **Economic** | Is the return difference large enough after costs? |
| **Robust** | Does it survive reasonable definitions and periods? |
| **Prospective** | Does the frozen rule work on later observations? |

Do not compress these into one “works / does not work” label.

## Stop conditions

Reject or pause the timing strategy when:

- the rule changes after each failure;
- the effect is carried by a few dates;
- realistic delay removes the result;
- opportunity count is too small for a useful conclusion;
- forward observations contradict the historical estimate;
- drawdown exceeds what the claimed mechanism can explain.

---

**Previous:** [[From Idea to Live Evidence]] · **Next:** [[Statistical Arbitrage as a System]] · **Foundation:** [[Evidence Before Belief]]
