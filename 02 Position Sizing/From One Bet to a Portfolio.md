---
title: "From One Bet to a Portfolio"
type: chapter
route: 2
order: 3
tags:
  - sizing
  - portfolio
  - utility
---
# From One Bet to a Portfolio

> [!summary]
> Portfolio sizing is not a list of independent Kelly bets. Shared factors, correlations, constraints, and investor preferences must be solved together.

## Joint wealth matters

With position-weight vector $w$ and asset-return vector $R$, portfolio wealth changes by:

$$
W_{t+1}=W_t(1+w^\top R).
$$

A log-growth portfolio solves:

$$
\max_w E[\log(1+w^\top R)]
$$

subject to wealth positivity and constraints on leverage, concentration, liquidity, and exposures.

Sizing every position independently ignores terms created by dependence. Two individually attractive trades may both lose in the same market state.

## Find the real bets

Positions that look different can share:

- equity-market beta;
- industry or country exposure;
- interest-rate duration;
- volatility exposure;
- credit and funding risk;
- liquidity dependence;
- the same behavioral anomaly.

Map these common factors before deciding that a portfolio is diversified. A market-neutral portfolio offsets a broad directional factor; a factor-neutral portfolio constrains several chosen exposures. Neutrality reduces named risks, not every risk.

## Growth is one possible objective

Expected log growth represents one set of preferences. More generally, expected utility chooses:

$$
\max_w E[U(W_T)]
$$

where a concave utility function gives diminishing value to additional wealth and penalizes downside.

Thorp’s utility-separation work shows that different concave utilities can choose different optimal strategies unless the available investment family has a special separating structure. There is no preference-free command to hold the same risky portfolio in every problem. [[Concave Utilities are Distinguished by their Optimal Strategies|Thorp (2011), optimal strategies and utility separation]]

This matters because “optimal” is incomplete without:

- an objective;
- a horizon;
- liabilities and cash needs;
- admissible losses;
- implementation constraints.

## A complete portfolio construction sequence

### 1. Define the opportunity set

Specify assets, return definitions, holding period, currencies, borrowing, shorting, and tradability.

### 2. Estimate distributions and dependence

Use ranges, not only point estimates. Give special attention to lower tails and correlations during stress.

### 3. Choose the objective

Examples:

- compound growth;
- a utility function;
- return subject to drawdown or loss limits;
- liability matching;
- factor-neutral alpha.

### 4. Solve under constraints

Include leverage, concentration, turnover, liquidity, borrow, and factor bounds inside the problem when possible. A solution that will be clipped afterward may no longer preserve the intended portfolio.

### 5. Reduce for uncertainty

Shrink expected returns, stress covariance, use fractional Kelly, or compare robust nearby solutions. If tiny input changes cause large reallocations, the optimum is not decision-stable.

### 6. Stress the complete portfolio

Reprice it under jumps, volatility changes, correlation convergence, funding pressure, and liquidity withdrawal. See [[Stress Testing the Whole Portfolio]].

### 7. Define rebalancing and review

State when weights change, what triggers de-risking, and how estimated capacity affects size.

## Capital reserves are a position

Cash or liquid reserves reduce modeled growth in normal states but preserve optionality in adverse states. Reserves cover margin, redemptions, operating needs, and the ability to exploit future opportunities.

Treating every uninvested dollar as inefficiency assumes capital is always available on the same terms. That is exactly when reserves matter least—and exactly when leverage models tend to look best.

## Final test

A portfolio is complete when you can answer:

- What is the objective?
- What are the true shared bets?
- Which constraints bind?
- What happens when correlations change?
- Where does required cash come from?
- What causes a reduction or exit?

If the answers exist only position by position, the portfolio has not been modeled.

---

**Previous:** [[Fractional Kelly and Survival]] · **Route:** [[02 Position Sizing]] · **Next route:** [[03 Researching Strategies]]
