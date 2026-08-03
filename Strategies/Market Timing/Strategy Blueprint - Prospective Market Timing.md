---
title: "Strategy Blueprint - Prospective Market Timing"
type: strategy-blueprint
area: "Trading Strategies"
status: evergreen
tags:
  - strategy
  - market-timing
  - area/trading-strategies
source_files:
  - "Can Joe Granville Time the Market"
---
# Strategy Blueprint - Prospective Market Timing

> [!summary]
> Convert a directional indicator ensemble into an auditable, prospectively tested regime strategy before applying leverage or options.

## Dependency chain

[[Signal Aggregation]] → [[Data Mining Bias]] → [[Prospective Validation]] → [[Hypergeometric Market-Timing Test]] + [[Two-Sample Return Test]] → [[Market Timing Strategy]] → [[Liquidity Service Cost]].

## Sourced design

Granville used many technical and volume indicators, waited for broad agreement, and issued unambiguous long or short calls during the study period. [[Can Joe Granville Time the Market#THE METHOD|Baesel, Shows & Thorp (1982), method]]; [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]

Both original directional and return-magnitude tests were significant in the full and prospectively monitored subperiod, but the authors would not claim that an ex-post test proved persistent ability. The method was highly judgmental and could not be mechanically reproduced. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]; [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]; [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Testable implementation

Define every indicator and vote rule in code, timestamp signals, use an untouched forward period, compare direction and return magnitude, account for causal market impact and costs, and size without assuming the historical 1978–1981 return repeats. These are inferred safeguards built from the study’s caveats.
