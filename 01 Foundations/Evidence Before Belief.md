---
title: "Evidence Before Belief"
type: chapter
route: 1
order: 3
tags:
  - foundations
  - validation
---
# Evidence Before Belief

> [!summary]
> Data used to discover a pattern cannot also provide an honest final test of that pattern.

## Why attractive false discoveries are normal

If enough indicators, assets, periods, thresholds, and parameter combinations are tried, some will look exceptional by chance. Selecting the winner changes the question from:

> “How surprising is this result under the null?”

to:

> “How surprising is the best result among everything we tried?”

The second probability is much larger. Ordinary significance tests usually answer the first question, so they overstate evidence after extensive search.

The Granville market-timing study makes this problem explicit: a successful-looking rule may be the survivor of a larger, partly unrecorded search. The authors therefore distinguish historical analysis from a prospectively specified test. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data-mining appendix]]

## The evidence ladder

### 1. Economic or behavioral mechanism

State why the effect should exist and who is paying for it. A mechanism does not prove a strategy, but it limits the degrees of freedom available during testing.

### 2. Descriptive evidence

Measure the effect, distribution, turnover, and exposure in the discovery sample. This stage is allowed to generate new ideas.

### 3. Robustness

Change reasonable implementation choices:

- nearby parameter values;
- start and end dates;
- asset universes;
- return definitions;
- execution delays;
- cost assumptions.

A result that depends on one exact choice is a clue, not a conclusion.

### 4. Untouched holdout

Freeze the rule before revealing a separate test period. No tuning after looking.

### 5. Prospective observation

Record signals as they occur and evaluate them later. This removes ambiguity about which data were available and which version of the rule was active. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations and prospective record]]

### 6. Live or shadow implementation

Measure real fills, rejected orders, borrow, financing, latency, operational errors, and capacity.

## Match the test to the claim

A timing rule that identifies a fixed number of “up” periods without replacement can be tested with a hypergeometric model. If $N$ periods contain $K$ successes and the rule selects $n$ periods, the probability of exactly $k$ successes under random selection is:

$$
P(X=k)=\frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}.
$$

This tests classification success under a specific null. It does not prove tradable profit, independence, stability, or freedom from data mining.

A two-sample return test asks whether returns differ between signaled and non-signaled regimes. It adds magnitude, but still depends on distributional assumptions and a properly specified rule.

The lesson is broader: choose a test that matches the actual claim, and state what the test does **not** establish.

## What complete evidence includes

For a strategy, the final evidence packet should contain:

- the exact frozen rule;
- a record of variants tried;
- discovery and holdout periods;
- return distributions, not only averages;
- conservative trading and financing costs;
- factor exposures;
- stress losses;
- prospective or shadow results;
- a rejection and shutdown rule.

## The standard

Historical evidence is valuable for discovery and for estimating ranges. It is not a license to ignore selection. A convincing process makes it progressively harder for luck, hidden discretion, and implementation fantasy to survive.

> Believe the result in proportion to how many independent opportunities it has had to fail.

## Apply it

Continue to [[From Idea to Live Evidence]] for the full research workflow, or open [[Strategy Test Checklist]] to audit a specific claim.

---

**Previous:** [[Models Are Decision Tools]] · **Route:** [[01 Foundations]] · **Next route:** [[02 Position Sizing]]
