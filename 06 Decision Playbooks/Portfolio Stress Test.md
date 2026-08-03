---
title: "Portfolio Stress Test"
type: playbook
route: 6
tags:
  - playbook
  - risk
  - stress-testing
---
# Portfolio Stress Test

Use this for a portfolio-level review. The objective is to connect exposures to losses, cash needs, and predefined actions.

## 1 · Inventory the book

- [ ] Every material position has current market value.
- [ ] Leverage, margin, and financing terms are recorded.
- [ ] Market, industry, rate, volatility, credit, currency, and liquidity exposure are mapped.
- [ ] Nonlinear positions are identified.
- [ ] Normal and stressed exit time are estimated.

## 2 · Aggregate shared drivers

- [ ] Positions are grouped by actual loss factor, not only asset class.
- [ ] Concentration by issuer, theme, counterparty, and funding source is visible.
- [ ] Hedges are tested in the same scenario as the positions they protect.

See [[Local Risk and Global Risk]].

## 3 · Run the minimum scenarios

- [ ] Fast risk-off: equities down, volatility/correlation/spreads up.
- [ ] Rate or inflation shock: curve, duration, financing, and multiples change.
- [ ] Liquidity freeze: spread, impact, exit time, margin, and borrow worsen.
- [ ] Largest position gaps before trading.
- [ ] Key model relationship breaks.
- [ ] Strategy edge decays slowly while costs remain.
- [ ] Portfolio-specific scenario added.

## 4 · Reprice the system

For every scenario:

- [ ] Revalue nonlinear positions.
- [ ] Recalculate factors, Greeks, leverage, and margin.
- [ ] Add trading and liquidation costs.
- [ ] Calculate peak cash need.
- [ ] Identify exposures that grow as losses occur.
- [ ] Identify unavailable hedges or markets.

## 5 · Reverse the test

- [ ] Define the practical ruin boundary.
- [ ] Find the changes that breach it.
- [ ] Judge whether the combination is plausible.
- [ ] Reduce exposure if the boundary is too close.

## 6 · Decide the action

- [ ] Hold, hedge, reduce, or exit is specified per material scenario.
- [ ] Trigger and owner are assigned.
- [ ] Action does not require perfect timing.
- [ ] Cash and liquid reserves cover the response.

See [[Stress Testing the Whole Portfolio]].

## Pass conditions

The portfolio passes only when:

- no plausible scenario crosses the ruin boundary;
- peak cash and margin need fit inside committed liquid resources;
- stressed exit assumptions match available depth;
- risk does not depend on one fragile hedge or funding source;
- every breach has a predefined response.

## Copyable stress record

```text
# Portfolio stress review

Date:
Owner:
Capital:
Liquid reserves:

## Shared exposures
Largest factors:
Largest issuers/themes:
Funding and counterparties:

## Scenarios
Scenario:
Portfolio loss:
Peak cash / margin:
Slowest exit:
Broken hedge or relationship:
Limits breached:
Action:
Owner:

## Reverse stress
Ruin boundary:
Combination that breaches it:
Assessment:

## Decision
Changes now:
Triggers:
Next review:
```

---

**Route:** [[06 Decision Playbooks]] · **Deep dive:** [[05 Risk and Execution]] · **Home:** [[Home]]
