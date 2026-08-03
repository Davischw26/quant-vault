---
title: "Models Are Decision Tools"
type: chapter
route: 1
order: 2
tags:
  - foundations
  - models
---
# Models Are Decision Tools

> [!summary]
> A useful model makes a decision clearer, exposes its assumptions, and survives comparison with reality. It does not need to be a literal description of the market.

## Three different jobs

Thorp distinguishes models by the job they perform:

| Job | Question |
|---|---|
| **Normative** | What action should be taken under a stated objective and assumptions? |
| **Descriptive** | How well does the model represent observed behavior? |
| **Predictive** | Does it improve decisions on data not used to build it? |

A model can succeed at one job and fail at another. Black–Scholes can be a useful no-arbitrage benchmark without stock returns literally following geometric Brownian motion. A historical pattern can describe the past while having no forward predictive value. [[Common Stock Volatilities in Option Formulas|Thorp (1973), model categories and volatility discussion]]

## The anatomy of a complete model

A decision model needs five visible parts:

1. **Objective** — what is being optimized or estimated;
2. **Inputs** — prices, probabilities, volatility, rates, costs, or other data;
3. **Mechanism** — the relationship that converts inputs into an answer;
4. **Assumptions** — the conditions under which that relationship is useful;
5. **Validation** — evidence that the answer works for its intended job.

If any part is missing, the output may still be a calculation, but it is not a complete decision model.

## Start simple

The best first model is usually the simplest one that can be falsified.

For option pricing, geometric Brownian motion and continuous hedging create a baseline. The baseline tells us which variables should matter and where replication would constrain price. When observed volatility changes with price or time, the miss becomes measurable. More elaborate models should be added because they repair a decision-relevant error—not because complexity looks more realistic.

For strategy research, a single indicator and a simple test make the claim visible. Additional predictors, neutralization, and portfolio construction come later, after the basic effect survives.

## The model lifecycle

Thorp’s quantitative-finance history suggests a recurring cycle:

```text
Observe an anomaly or decision problem
        ↓
Build the simplest usable model
        ↓
Estimate inputs and calculate an action
        ↓
Test against historical and withheld data
        ↓
Implement with costs and risk controls
        ↓
Monitor errors and structural change
        ↓
Revise or stop
```

The cycle never ends at “the backtest looks good.” [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), model development and risk process]]

## Common category mistakes

### Treating an estimate as a fact

Volatility, correlation, and expected return are not fixed inputs delivered by nature. They are estimates with sampling error and regime dependence.

### Treating calibration as validation

A model can fit the data used to tune it and still fail on new data. Fit proves internal consistency, not predictive value.

### Treating precision as confidence

An optimizer can return six decimal places from weak assumptions. Numerical precision says nothing about input reliability.

### Treating a local approximation as a global description

Delta, duration, and factor sensitivities work for small moves near the current state. Jumps and regime changes require full revaluation and scenarios.

### Treating a model error as a trading opportunity

A market price may disagree with a model because the model omits liquidity, borrow, jump risk, dividends, early exercise, or a volatility premium. Disagreement is a research question before it is an edge.

## A completeness test

Before using any model, complete these sentences:

```text
The decision is:
The model’s job is:
The output means:
The most uncertain inputs are:
The assumptions most likely to fail are:
The comparison model is:
The evidence that would reject it is:
```

If the last line is blank, the model has become a belief.

---

**Previous:** [[Compounding, Not Averages]] · **Next:** [[Evidence Before Belief]] · **Route:** [[01 Foundations]]
