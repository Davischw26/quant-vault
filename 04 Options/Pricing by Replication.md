---
title: "Pricing by Replication"
type: chapter
route: 4
order: 1
tags:
  - options
  - pricing
  - replication
---
# Pricing by Replication

> [!summary]
> An option’s model value comes from the cost of reproducing its payoff, not from forecasting whether the stock will rise.

## Begin with the contract

For a European call with stock price $S_T$, strike $K$, and expiry $T$:

$$
\text{payoff}=\max(S_T-K,0).
$$

Before choosing a pricing model, record:

- exercise style;
- expiry and settlement;
- strike and contract multiplier;
- dividends and corporate actions;
- borrow and short-sale terms;
- currency and interest rate;
- counterparty and margin terms.

An incomplete contract description cannot produce a defensible value.

## No-arbitrage comes before precision

If two portfolios have identical future cash flows, they must have the same price when both can be traded and financed under the same conditions. Otherwise, buy the cheaper payoff and sell the dearer one.

This law-of-one-price argument creates price bounds and replication relationships without requiring a forecast of the stock’s expected return.

For a non-dividend-paying European call:

$$
\max(0,S_0-Ke^{-rT})\le C \le S_0.
$$

Violating a bound is more fundamental than disagreeing with a model’s exact value. But real short-sale, financing, and transaction constraints widen implementable bounds.

## Dynamic replication

An option’s stock sensitivity is its delta:

$$
\Delta=\frac{\partial V}{\partial S}.
$$

A short option can be locally hedged by holding $\Delta$ shares. As the stock and time change, delta changes, so the hedge must be rebalanced.

In the idealized Black–Scholes setting, the stock risk of a delta-hedged position disappears over an infinitesimal interval. The remaining return must equal the risk-free rate or an arbitrage would exist. This produces the pricing equation:

$$
\frac{\partial V}{\partial t}
+\frac12\sigma^2S^2\frac{\partial^2V}{\partial S^2}
+rS\frac{\partial V}{\partial S}
-rV=0.
$$

The stock’s expected drift is absent. Replication, volatility, financing, and contract terms determine the price.

## Black–Scholes call value

For a non-dividend-paying European call:

$$
C=S_0N(d_1)-Ke^{-rT}N(d_2),
$$

where

$$
d_1=\frac{\ln(S_0/K)+(r+\tfrac12\sigma^2)T}{\sigma\sqrt{T}},
\qquad
d_2=d_1-\sigma\sqrt{T}.
$$

$N(\cdot)$ is the standard normal cumulative distribution.

The model assumes frictionless trading, continuous hedging, constant volatility and rate, a geometric-Brownian stock path, and no jumps. [[Extensions of the Black-Scholes Option Model|Thorp (1973), Black–Scholes extensions and assumptions]]

## Dividends and early exercise

Known dividends reduce the stock value available to the call holder and can make early exercise of an American call rational shortly before an ex-dividend date.

A complete valuation compares:

- immediate exercise value;
- continuation value;
- the present value of dividends;
- financing saved by delaying payment of the strike.

For several known dividends, valuation can work backward across exercise opportunities. The logic matters more than memorizing one adjustment: model the actual cash flows and exercise rights.

## What replication proves—and what it does not

Replication gives a conditional statement:

> If the model dynamics hold and the hedge can be traded as assumed, this price prevents arbitrage.

It does not prove:

- volatility is constant or known;
- markets move continuously;
- the hedge is costless;
- borrow and financing remain available;
- observed prices must equal the model;
- model disagreement is a profit.

Those gaps become volatility, hedge-error, liquidity, and model risk.

## Practical valuation order

1. Describe the payoff and cash flows.
2. Establish robust no-arbitrage bounds.
3. Choose the simplest model adequate for the decision.
4. estimate and stress inputs.
5. Map sensitivities and hedge mechanics.
6. Add execution, financing, and failure states.

Only then label a price difference.

---

**Route:** [[04 Options]] · **Next:** [[Volatility Is an Estimate]] · **Playbook:** [[Options Trade Checklist]]
