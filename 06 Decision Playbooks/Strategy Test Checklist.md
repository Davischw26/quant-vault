---
title: "Strategy Test Checklist"
type: playbook
route: 6
tags:
  - playbook
  - strategy-research
---
# Strategy Test Checklist

Use this to review a signal, backtest, or proposed strategy.

## 1 · Freeze the claim

- [ ] The observable condition is explicit.
- [ ] The predicted asset, direction, and horizon are explicit.
- [ ] A plausible mechanism is stated.
- [ ] The rule can be reproduced without discretionary interpretation.

Template:

> When **[condition]** occurs, **[asset]** should move **[direction]** over **[horizon]** because **[mechanism]**.

## 2 · Audit the data

- [ ] Only point-in-time information is used.
- [ ] Delisted assets and historical membership are included.
- [ ] Publication and execution lags are realistic.
- [ ] Missing data and corporate actions have fixed treatment.
- [ ] Discovery and final test samples are separate.
- [ ] Tried variants are recorded.

## 3 · Inspect the raw effect

- [ ] Number of independent observations is reported.
- [ ] Full return distribution is shown.
- [ ] Stability by period and subgroup is shown.
- [ ] The largest contributors are identified.
- [ ] Nearby parameters preserve the result.
- [ ] A simple baseline is included.

See [[Evidence Before Belief]].

## 4 · Build the trade honestly

- [ ] Signal observation time precedes the simulated execution.
- [ ] Entry, exit, and failed-fill logic are explicit.
- [ ] Spreads, impact, fees, financing, and borrow are included.
- [ ] Gross and net results are separate.
- [ ] Capacity is estimated.

See [[Liquidity, Spreads, and Real Trading Costs]].

## 5 · Find accidental bets

- [ ] Market and industry exposure are measured.
- [ ] Rate, volatility, credit, liquidity, and currency exposure are measured where relevant.
- [ ] Concentration by asset and time is bounded.
- [ ] “Alpha” remains after intentional neutralization.

## 6 · Try to break it

- [ ] Delay execution.
- [ ] Raise costs.
- [ ] Remove the best asset and period.
- [ ] Reduce forecast strength.
- [ ] Increase volatility and correlation.
- [ ] Withdraw borrow or liquidity.
- [ ] Run a position-specific gap.

## 7 · Require forward evidence

- [ ] The rule is frozen before the test.
- [ ] The test period and pass metric are fixed.
- [ ] All signals and version changes are logged.
- [ ] Shadow results include real executable prices.
- [ ] Capital increases only after evidence accumulates.

See [[From Idea to Live Evidence]].

## Reject when

- most profit comes from one date, asset, or parameter;
- a small delay removes the result;
- conservative cost consumes the edge;
- the holdout rule changed after results were seen;
- the strategy is a disguised common-factor bet;
- no outcome would convince the owner to stop.

## Copyable research record

```text
# Strategy test

Name:
Research owner:
Rule frozen on:

## Claim
Condition:
Predicted outcome:
Horizon:
Mechanism:

## Evidence design
Discovery data:
Untouched test data:
Variants tried:
Primary metric:
Pass threshold:

## Implementation
Execution assumption:
Cost model:
Borrow / financing:
Capacity:

## Risk
Factor exposures:
Stress cases:
Worst loss:

## Forward test
Start:
End:
Result:

## Decision
Launch / revise / reject:
Stop threshold:
Next review:
```

---

**Route:** [[06 Decision Playbooks]] · **Deep dive:** [[03 Researching Strategies]] · **Home:** [[Home]]
