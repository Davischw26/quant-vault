---
title: "Position Sizing Checklist"
type: playbook
route: 6
tags:
  - playbook
  - sizing
---
# Position Sizing Checklist

Use this after the opportunity has been defined. If the edge is not yet supported, use [[Strategy Test Checklist]] first.

## 1 · Describe the exposure

- [ ] What exactly gains and loses?
- [ ] What is the holding period?
- [ ] What is the maximum contractual loss?
- [ ] What larger loss is possible through gaps, leverage, or forced liquidation?
- [ ] Which other positions lose in the same state?

## 2 · Estimate the net return distribution

- [ ] List plausible outcomes and probabilities or scenarios.
- [ ] Subtract spread, impact, fees, financing, and borrow.
- [ ] Use a range for expected return and loss severity.
- [ ] Include a worse regime than the estimation sample.
- [ ] State what evidence supports the edge.

See [[Compounding, Not Averages]] and [[Liquidity, Spreads, and Real Trading Costs]].

## 3 · Calculate a ceiling

For a binary bet with net odds $b:1$:

$$
f^*=\frac{bp-q}{b}.
$$

For a general return $R$, solve:

$$
\max_f E[\log(1+fR)]
$$

subject to positive wealth in every modeled outcome.

- [ ] Recalculate using the low edge estimate.
- [ ] Recalculate using the high loss estimate.
- [ ] Recalculate with stressed correlation and cost.

The result is a ceiling, not the final size. See [[Kelly Criterion]].

## 4 · Choose a conservative fraction

- [ ] Compare full, half, quarter, and smaller Kelly fractions.
- [ ] Inspect drawdown, recovery time, and terminal-loss probability.
- [ ] Choose the largest fraction that remains acceptable across plausible inputs.

See [[Fractional Kelly and Survival]].

## 5 · Apply hard limits

Reduce the size for:

- [ ] concentration;
- [ ] leverage and margin;
- [ ] factor exposure;
- [ ] liquidity and stressed exit time;
- [ ] liability and cash needs;
- [ ] maximum drawdown;
- [ ] operational capacity.

Final size:

$$
\text{size}
=
\min(\text{fractional Kelly},\text{all hard limits}).
$$

## 6 · Define the control

- [ ] What new evidence permits an increase?
- [ ] What causes a reduction?
- [ ] What causes immediate exit?
- [ ] When is the next review?
- [ ] Who owns the decision?

## Reject the position when

- plausible inputs change the sign of the edge;
- one gap can cross the practical ruin boundary;
- the position cannot be exited inside the loss budget;
- size relies on funding that may disappear under stress;
- you would abandon the strategy during an ordinary modeled drawdown;
- the final size is justified by the upside rather than bounded by the downside.

## Copyable decision record

```text
# Position decision

Instrument / strategy:
Date:
Decision owner:

## Thesis
Why the edge exists:
Evidence:
Holding period:

## Distribution after costs
Base expected return:
Low expected return:
Worst plausible loss:
Shared loss factors:

## Sizing
Full-Kelly ceiling:
Fraction chosen:
Hardest binding limit:
Final capital / exposure:

## Survival
Stress loss:
Peak cash or margin need:
Stressed exit time:

## Control
Increase when:
Reduce when:
Exit when:
Review date:
```

---

**Route:** [[06 Decision Playbooks]] · **Deep dive:** [[02 Position Sizing]] · **Home:** [[Home]]
