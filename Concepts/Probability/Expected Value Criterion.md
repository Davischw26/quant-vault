---
title: "Expected Value Criterion"
type: concept
area: "Probability"
status: evergreen
tags:
  - probability
  - decision-criterion
  - area/probability
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Expected Value Criterion

> [!summary]
> Choose the action with the largest expected terminal wealth; in repeated favorable bets this can recommend ruinous all-in behavior.

## Purpose

Expected value collapses a distribution to its probability-weighted mean. In the favorable even-money coin game, maximizing expected wealth at a fixed horizon pushes every stake to the full bankroll because every additional dollar bet has positive expected gain. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

For wealth recursion $X_k=X_{k-1}+I_kB_k$, with $I_k\in\{-1,1\}$ and $P(I_k=1)=p$, the article writes $E[X_n]=X_0+\sum_{k=1}^n(p-q)E[B_k]$. If $p>q$, this is maximized by maximizing each $B_k$. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Assumptions

The comparison uses a known, positive edge; an infinitely wealthy counterparty; repeated independent trials; and a fixed terminal-horizon objective. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Limitations

Betting the entire bankroll makes the probability of ruin $1-p^n$, which converges to one when $p<1$. Expected terminal wealth therefore ignores path survival and compounding. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Practical use

Use it to calculate edge, not as a standalone sizing rule. Pair it with [[Expected Log-Growth Criterion]], [[Fractional Kelly Strategy]], and explicit drawdown constraints. This recommendation is an inferred workflow rather than a claim tested in the article.

## Relationships

- **Prerequisites:** [[Probability-Weighted Outcome]]
- **Extensions:** [[Expected Utility Maximization]]
- **Alternatives:** [[Expected Log-Growth Criterion]]
- **Conflicts:** [[Timid Betting]]
- **Applications:** [[Position Sizing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
