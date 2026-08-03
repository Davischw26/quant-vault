---
title: "Greeks, Hedging, and Hedge Error"
type: chapter
route: 4
order: 3
tags:
  - options
  - hedging
  - greeks
---
# Greeks, Hedging, and Hedge Error

> [!summary]
> Greeks describe local sensitivity. A hedge manages selected sensitivities; it does not remove jumps, model error, or trading friction.

## The local P&L map

For option value $V(S,\sigma,r,t)$, a small-change approximation is:

$$
\Delta V
\approx
\Delta\,\Delta S
+\frac12\Gamma(\Delta S)^2
+\text{Vega}\,\Delta\sigma
+\Theta\,\Delta t
+\rho\,\Delta r.
$$

| Greek | Meaning |
|---|---|
| $\Delta=\partial V/\partial S$ | first-order stock sensitivity |
| $\Gamma=\partial^2V/\partial S^2$ | change in delta and curvature |
| Vega $=\partial V/\partial\sigma$ | volatility sensitivity |
| $\Theta=\partial V/\partial t$ | passage-of-time sensitivity |
| $\rho=\partial V/\partial r$ | interest-rate sensitivity |

These are derivatives at the current state. They are accurate only for sufficiently small changes and a sufficiently accurate model.

## Delta hedging

If a portfolio is long one option and short $\Delta$ shares, its first-order stock exposure is approximately zero:

$$
\Pi=V-\Delta S.
$$

As $S$, $\sigma$, and time change, delta changes. Gamma tells us how quickly:

$$
\Delta_{\text{new}}\approx\Delta_{\text{old}}+\Gamma\,\Delta S.
$$

High gamma means the hedge becomes stale quickly.

## Why discrete hedging differs from theory

Black–Scholes replication assumes continuous, frictionless rebalancing. Real hedges are updated at discrete times and prices.

Between hedges:

- the stock can move;
- volatility can change;
- the option’s delta changes;
- the next trade pays spread and impact.

More frequent rebalancing reduces some discretization error but increases transaction cost. There is no free convergence to the theoretical hedge.

Thorp’s volatility work uses a law-of-large-numbers argument to explain why frequent rebalancing across many sufficiently small intervals can reduce certain random hedge errors under the model. That argument relies on continuous diffusion behavior and does not neutralize jumps or structural misspecification. [[Common Stock Volatilities in Option Formulas|Thorp (1973), dynamic hedging and hedge-error discussion]]

## Sources of hedge error

### Discrete rebalancing

Delta changes before the hedge is updated.

### Volatility error

The model uses the wrong level or dynamics of volatility.

### Jumps

The stock moves across prices where rebalancing would have occurred. A delta hedge cannot trade through the gap.

### Higher-order and cross effects

Large simultaneous changes make the local Taylor approximation incomplete.

### Dividends, rates, and borrow

Cash flows and financing differ from the model.

### Liquidity

The hedge cannot be traded at the assumed price or size when needed.

### Exercise and operational risk

American exercise, assignment, settlement, or system failure changes the actual position.

## Hedge the risk you intend

A delta-neutral position may still be:

- long or short gamma;
- long or short volatility;
- exposed to time decay;
- exposed to rate, dividend, credit, and borrow changes;
- nonlinear under a large stock move.

Write the intended profit source. If the trade is “long volatility,” explain how realized movement, implied repricing, gamma trading, and costs produce that profit. “Delta neutral” is a state description, not a strategy thesis.

## A complete hedge plan

Record:

- current Greeks and stressed Greeks;
- hedge instrument;
- rebalance trigger;
- expected turnover and cost;
- trading-hour mismatch;
- gap and overnight exposure;
- borrow and funding needs;
- maximum unhedged interval;
- action when liquidity disappears.

Then simulate the combined option-and-hedge path, not the option alone.

## Risk principle

> Local neutrality is not global safety.

Greeks help manage ordinary movement. [[Stress Testing the Whole Portfolio]] is needed for large moves and broken relationships.

---

**Previous:** [[Volatility Is an Estimate]] · **Next:** [[Convertibles and Capital Structure]] · **Playbook:** [[Options Trade Checklist]]
