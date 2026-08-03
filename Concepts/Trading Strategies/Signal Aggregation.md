---
title: "Signal Aggregation"
type: method
area: "Trading Strategies"
status: evergreen
tags:
  - signals
  - ensemble
  - area/trading-strategies
source_files:
  - "Can Joe Granville Time the Market"
---
# Signal Aggregation

> [!summary]
> Combine many weak or noisy indicators and act only when a large majority aligns.

## Purpose

Granville described a tree of indicators and sought broad agreement before calling a market turn. The authors propose that uncorrelated noise may diversify while common signal remains. [[Can Joe Granville Time the Market#THE METHOD|Baesel, Shows & Thorp (1982), method]]; [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Mathematical foundation

A simple formalization is a weighted vote $s_t=\sum_jw_jz_{j,t}$ with a high action threshold. This equation is an inferred representation; the source says the actual process was judgmental, not mechanized. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Assumptions

At least some indicators have weak predictive content and their errors are not perfectly aligned. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Limitations

Indicator dependence, discretionary interpretation, and selection after observing performance can defeat noise diversification. The judgment and data-mining issues are explicit. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]; [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Practical use

Measure each signal’s incremental out-of-sample contribution and correlation before combining; treat the mechanical ensemble as a new testable strategy, not a reproduction of Granville. This is an inferred research design.

## Relationships

- **Prerequisites:** [[Weak Predictive Signal]]
- **Extensions:** [[Ensemble Strategy]]
- **Alternatives:** [[Single-Indicator Strategy]]
- **Applications:** [[Market Timing Strategy]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Can Joe Granville Time the Market#THE METHOD|Baesel, Shows & Thorp (1982), method]]
- [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]
- [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]
