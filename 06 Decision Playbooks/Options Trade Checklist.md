---
title: "Options Trade Checklist"
type: playbook
route: 6
tags:
  - playbook
  - options
---
# Options Trade Checklist

Use this before entering an option, volatility, or option-like relative-value position.

## 1 · Describe the contract

- [ ] Payoff diagram is understood.
- [ ] Exercise style, expiry, settlement, and multiplier are correct.
- [ ] Dividends and corporate actions are included.
- [ ] Maximum contractual and gap loss are known.
- [ ] Assignment and operational details are known.

## 2 · Establish a value range

- [ ] No-arbitrage bounds are calculated.
- [ ] The simplest adequate model is chosen.
- [ ] Model value is a range, not one point.
- [ ] Early exercise is considered where applicable.

See [[Pricing by Replication]].

## 3 · Audit the inputs

- [ ] Historical volatility uses defensible windows.
- [ ] Sampling uncertainty is quantified.
- [ ] Implied volatility by strike and maturity is inspected.
- [ ] Rates, dividends, borrow, and financing are stressed.
- [ ] The trade’s actual disagreement is named: volatility, skew, correlation, rate, dividend, credit, or financing.

See [[Volatility Is an Estimate]].

## 4 · Map and hedge the risks

- [ ] Delta, gamma, vega, theta, and rho are recorded.
- [ ] Greeks are recalculated under stressed states.
- [ ] Hedge instrument and rebalance rule are explicit.
- [ ] Overnight and trading-hours mismatch is included.
- [ ] Discrete hedge cost and error are simulated.

See [[Greeks, Hedging, and Hedge Error]].

## 5 · Price implementation

- [ ] Entry and exit spread are estimated.
- [ ] Expected impact and partial fills are included.
- [ ] Financing, margin, and borrow are included.
- [ ] Hedge turnover is included.
- [ ] Stressed liquidity and exit time are included.

## 6 · Break the model

- [ ] Price jump.
- [ ] Volatility level and skew change.
- [ ] Correlation or credit relationship changes.
- [ ] Early exercise or contract event.
- [ ] Hedge market becomes unavailable.
- [ ] Financing or borrow changes.

## Reject when

- profit exists only at the point estimate;
- conservative all-in costs consume the difference;
- the hedge assumes continuous liquidity;
- a plausible jump crosses the loss budget;
- contract details remain unclear;
- the thesis is only “the model says the market is wrong.”

## Copyable trade record

```text
# Options trade

Position:
Date:
Owner:

## Contract and payoff
Payoff:
Expiry / exercise / settlement:
Maximum contractual loss:
Gap loss:

## Valuation
Market price:
No-arbitrage bounds:
Model:
Value range:
Source of disagreement:

## Inputs
Historical volatility range:
Implied volatility:
Rates / dividends / borrow:

## Risk and hedge
Greeks:
Hedge:
Rebalance rule:
Largest model failure:

## Implementation
Entry / exit cost:
Hedge cost:
Financing:
Stressed exit time:

## Decision
Size:
Exit / invalidate when:
Review:
```

---

**Route:** [[06 Decision Playbooks]] · **Deep dive:** [[04 Options]] · **Home:** [[Home]]
