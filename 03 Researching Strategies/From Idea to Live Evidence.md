---
title: "From Idea to Live Evidence"
type: chapter
route: 3
order: 1
tags:
  - strategy-research
  - validation
---
# From Idea to Live Evidence

> [!summary]
> A complete strategy is a falsifiable claim plus portfolio construction, execution, risk control, forward evidence, and a stopping rule.

## Begin with one sentence

Write:

> When **[observable condition]** occurs, **[asset or spread]** should move **[direction]** over **[horizon]** because **[mechanism]**.

This sentence fixes the unit of observation, signal, target, direction, horizon, and proposed cause. If it cannot be written before testing, the research question is not stable.

## The complete research route

### 1. Form the hypothesis

Describe who behaves predictably, why the effect persists, and what risk or service earns the return. A mechanism reduces the temptation to explain any result after seeing it.

### 2. Specify the trading rule

Freeze:

- universe and eligibility;
- signal calculation;
- observation time;
- entry and execution assumption;
- position weighting;
- holding period and exit;
- missing and stale data treatment;
- corporate actions;
- leverage and shorting.

Someone else should be able to reproduce the positions from the specification.

### 3. Build point-in-time data

Use only information available at each simulated decision time. Include delisted securities, historical index membership, revisions, and realistic publication lags. Otherwise the backtest receives information the live strategy would not have had.

### 4. Separate discovery from proof

Keep a final period or market untouched. Record every meaningful variant tried. A holdout loses its evidentiary value once it influences the rule. See [[Evidence Before Belief]].

### 5. Measure the effect before optimizing it

Report:

- number of independent observations;
- mean, median, dispersion, skew, and tails;
- win/loss distribution;
- stability by time and subgroup;
- turnover and holding period;
- factor exposures.

Do not hide a weak effect inside an optimized portfolio before understanding it.

### 6. Model implementation

Use tradable prices with delays. Include:

- bid–ask concession;
- market impact;
- commissions and fees;
- borrow availability and cost;
- financing;
- partial and failed fills;
- capacity.

A strategy earns only its net return. See [[Liquidity, Spreads, and Real Trading Costs]].

### 7. Construct the portfolio

Convert forecasts into weights under factor, leverage, concentration, turnover, and liquidity constraints. Small signals usually require many diversified bets; a single concentrated trade is a different strategy.

### 8. Stress the strategy

Ask how it behaves when:

- the signal weakens;
- volatility doubles;
- correlations converge;
- spreads widen;
- borrow disappears;
- assets gap before exit;
- the largest historical contributor is removed.

### 9. Validate forward

Run the frozen system prospectively or in shadow trading. Record all signals, orders, fills, and operational failures. Thorp’s account repeatedly emphasizes moving from historical discovery to prospective validation and live refinement. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations and prospective record]]; [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), research and implementation process]]

### 10. Launch gradually and monitor

Increase capital only as real evidence accumulates. Track:

- forecast calibration;
- gross and net alpha;
- cost per unit turnover;
- exposure drift;
- drawdowns versus expected distribution;
- capacity and crowding;
- model/version changes.

## Predefine failure

Every strategy needs a shutdown rule. Examples:

- forward return is below a stated threshold after enough observations;
- net edge is consumed by costs;
- exposure is no longer the intended exposure;
- the mechanism has structurally changed;
- capacity falls below deployed capital;
- stress loss breaches the portfolio limit.

Without a rejection rule, monitoring becomes storytelling.

## What a backtest can establish

A careful backtest can show:

- how a frozen rule would have behaved under explicit assumptions;
- which periods and exposures created returns;
- the approximate scale of turnover, drawdown, and capacity;
- whether a mechanism is worth further testing.

It cannot prove that the future distribution is unchanged, that the rule was not selected from many failures, or that simulated execution is achievable.

## The launch standard

The strategy is ready for limited capital only when:

- the rule is reproducible;
- evidence survives unseen data;
- net returns remain positive under conservative costs;
- factor and tail risks are bounded;
- the live process can actually execute;
- the stop rule is written before launch.

---

**Route:** [[03 Researching Strategies]] · **Next:** [[Testing Market-Timing Claims]] · **Playbook:** [[Strategy Test Checklist]]
