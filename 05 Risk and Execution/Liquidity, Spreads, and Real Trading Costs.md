---
title: "Liquidity, Spreads, and Real Trading Costs"
type: chapter
route: 5
order: 3
tags:
  - execution
  - liquidity
  - transaction-costs
---
# Liquidity, Spreads, and Real Trading Costs

> [!summary]
> The quoted spread is not automatically the cost of a trade. Real cost depends on order choice, participation, size, timing, impact, and the state of liquidity.

## The basic market

A market maker posts:

- a **bid** at which the public can sell immediately;
- an **ask** at which the public can buy immediately.

The quoted spread is:

$$
\text{spread}=A-B.
$$

A patient public order may trade with another public participant inside that spread. An urgent market order is more likely to pay for immediacy.

The spread therefore describes available quotes. It is not a universal charge applied to every transaction.

## Liquidity service cost

The historical Thorp study separates:

1. the price concession conditional on trading with a dealer;
2. the probability that a strategy actually trades with a dealer.

Expected liquidity cost combines both. Using the closing price as a noisy equilibrium proxy, the study measured buy and sell concessions for 1,894 listed-option trades and reported an average cost of 0.54% of option value for that fund and period. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–994

That number is not portable to current markets. The reusable lesson is the decomposition.

## A complete cost model

For an order, estimate:

$$
\text{net alpha}
=
\text{gross alpha}
-\text{spread concession}
-\text{impact}
-\text{commissions and fees}
-\text{financing}
-\text{borrow}
-\text{delay and failed-fill cost}.
$$

### Spread concession

Difference between execution and an appropriate pre-trade benchmark caused by demanding immediacy.

### Market impact

Price movement caused by the order itself. Impact grows with participation, urgency, and scarcity of liquidity.

### Delay and opportunity cost

A patient order may avoid the spread but miss the trade or execute after the signal decays.

### Financing and borrow

Holding-period cost of capital, short borrow, margin, and cash collateral.

### Operational cost

Rejected orders, stale data, routing errors, settlement, and monitoring.

## Order choice is a tradeoff

| Order approach | Main benefit | Main risk |
|---|---|---|
| Marketable order | immediate execution | pays spread and impact |
| Passive limit | price control | non-execution and adverse selection |
| Contingent limit | trades only when relationship is favorable | leg and fill uncertainty |
| Scheduled execution | reduces visible urgency | signal decay and market drift |

The right choice depends on how quickly the opportunity decays and how costly non-execution is.

## Market-maker inventory

Dealer quotes need not sit symmetrically around an unobserved equilibrium price. A dealer with unwanted inventory may shade quotes to encourage offsetting trades.

This means:

- midpoint is an imperfect fair-value estimate;
- execution cost depends on trade direction;
- liquidity is state- and dealer-dependent;
- closing price is a noisy benchmark.

## Cost, capacity, and size are one problem

A strategy with small per-trade edge cannot be sized independently of impact.

As capital increases:

- orders become a larger share of available volume;
- impact and fill time rise;
- the universe may shift toward more liquid, lower-edge trades;
- the signal may decay before completion.

Capacity is reached when additional capital reduces net expected profit or breaches risk and liquidity limits.

## Stress liquidity, not only average cost

Average cost estimates are least informative during:

- volatility spikes;
- crowded exits;
- market open/close;
- news gaps;
- borrow recalls;
- dealer balance-sheet pressure.

Model a stressed exit separately from normal execution. A position is too large when it can be entered cheaply but cannot be exited inside the loss budget.

## The implementation standard

Before accepting a backtest or trade:

1. define the executable price and delay;
2. estimate cost by order type, size, and market state;
3. show gross and net results separately;
4. test higher-cost and lower-fill scenarios;
5. estimate capacity;
6. include liquidation cost in stress loss.

Paper alpha is not a smaller version of net alpha. Sometimes it is a different sign.

---

**Previous:** [[Stress Testing the Whole Portfolio]] · **Route:** [[05 Risk and Execution]] · **Next route:** [[06 Decision Playbooks]]
