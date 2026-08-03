---
title: "Stress Testing the Whole Portfolio"
type: chapter
route: 5
order: 2
tags:
  - risk
  - stress-testing
---
# Stress Testing the Whole Portfolio

> [!summary]
> A stress test tells a coherent bad-world story, reprices the entire portfolio, includes cash and liquidity effects, and ends with an action.

## Start from exposures, not headlines

Inventory every material position:

- market value and leverage;
- intended thesis;
- market, sector, rate, volatility, credit, currency, and liquidity exposure;
- nonlinear payoff;
- financing and margin terms;
- time required to exit.

Aggregate shared drivers. Ten trades are not diversified if they all need cheap funding and calm liquidity.

## Design coherent scenarios

A useful scenario changes related variables together.

### Fast risk-off

- equity indexes fall;
- volatility and correlations rise;
- credit and bid–ask spreads widen;
- market depth falls;
- margin requirements increase.

### Rate and inflation shock

- yield levels and curve shape change;
- duration assets reprice;
- equity multiples and volatility change;
- financing cost rises.

### Liquidity freeze

- spreads and impact multiply;
- partial fills become common;
- borrow disappears;
- exit time grows;
- collateral haircuts rise.

### Position-specific failure

- the largest issuer or relationship gaps;
- the hedge instrument remains open but the main position does not;
- credit, equity, and volatility move together.

### Slow strategy decay

- forecast strength falls;
- turnover and capital use remain;
- crowding and cost rise;
- losses arrive gradually rather than through one shock.

Historical events can calibrate magnitudes. They should not define the outer boundary. Thorp explicitly includes hypothetical and unprecedented events in global-risk analysis. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), extreme-event risk]]

## Reprice the whole system

For each scenario:

1. shock all relevant market variables;
2. fully revalue nonlinear positions when possible;
3. recalculate Greeks, factors, leverage, and margin;
4. model spread, impact, and exit time;
5. add financing, borrow, counterparty, and operational effects;
6. identify positions that become more dangerous as they lose;
7. calculate required cash before orderly exit.

The portfolio loss is only one output. A survivable mark-to-market loss can become terminal when it triggers a margin call before positions can be sold.

## Reverse stress testing

Instead of asking “What happens in this scenario?”, ask:

> What combination of changes would breach the ruin boundary, cash reserve, or risk limit?

Then judge whether that combination is plausible.

Reverse stress tests are particularly useful when ordinary scenarios all appear comfortable. They reveal which assumptions are doing the work.

## Make scenarios independent enough

A long list of variations on the same equity crash creates false coverage. Include different failure mechanisms:

- price;
- volatility;
- correlation;
- credit;
- liquidity;
- funding;
- operations;
- model;
- legal or contractual terms.

The goal is not to predict the next crisis. It is to find portfolio fragilities.

## Define pass conditions before seeing results

Examples:

- no plausible scenario crosses the practical ruin boundary;
- peak cash need fits inside committed liquid resources;
- no action depends on perfect intraday timing;
- stressed exit assumptions match market depth;
- every limit breach has an owner and response;
- remaining portfolio after de-risking is still coherent.

If the response to every stress is “we would decide then,” the exercise has not produced a control.

## Turn results into action

Possible actions:

- reduce the concentrated driver;
- buy a hedge that remains liquid in the scenario;
- lower leverage;
- increase reserves;
- diversify funding or counterparties;
- change terms or settlement;
- stop a strategy whose edge does not justify the stress loss.

Record the decision even when no change is made.

## Review frequency

Run stress tests:

- on a fixed schedule;
- after large P&L or volatility changes;
- when positions, leverage, or funding change;
- when a model or data process changes;
- before launching a new strategy;
- after a near miss.

Stress testing is a control loop, not a quarterly document.

---

**Previous:** [[Local Risk and Global Risk]] · **Next:** [[Liquidity, Spreads, and Real Trading Costs]] · **Playbook:** [[Portfolio Stress Test]]
