---
title: "Prospective Validation"
type: method
area: "Optimization"
status: evergreen
tags:
  - validation
  - backtesting
  - area/optimization
source_files:
  - "Can Joe Granville Time the Market"
---
# Prospective Validation

> [!summary]
> Evaluate forecasts after the rule and intention to test are fixed, reducing ex-post selection bias.

## Purpose

The Granville study separately analyzes the period beginning when the researchers started monitoring forecasts before the fact, specifically to reduce the data-mining problem. [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]

## Mathematical foundation

Split observations at commitment time $t_0$: earlier data can motivate the hypothesis; only later data supplies the primary validation statistic. This notation formalizes the source’s design.

## Assumptions

The signal definition and evaluation protocol remain stable after $t_0$. [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]

## Limitations

The underlying method was judgmental and difficult to mechanize, so exact procedural replication remained impossible. [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Practical use

Timestamp signals, freeze code and thresholds, and record any discretionary override before the outcome is known. The audit-trail details are inferred extensions.

## Relationships

- **Prerequisites:** [[Data Mining Bias]]
- **Extensions:** [[Live Shadow Trading]]
- **Alternatives:** [[Backtest]]
- **Applications:** [[Quantitative Model Lifecycle]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]
- [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]
