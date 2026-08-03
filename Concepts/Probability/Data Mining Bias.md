---
title: "Data Mining Bias"
type: concept
area: "Probability"
status: evergreen
aliases:
  - "multiple-testing bias"
  - "lucky survivor problem"
tags:
  - backtesting
  - bias
  - area/probability
source_files:
  - "Can Joe Granville Time the Market"
---
# Data Mining Bias

> [!summary]
> Selecting a successful forecaster or rule after observing many candidates inflates apparent statistical significance.

## Purpose

The Granville appendix imagines many random market callers; a few will look nearly perfect by chance, so investing after selecting the luckiest can fail even when the historical record is significant. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Mathematical foundation

The family-wise probability of at least one extreme result rises with the number of candidates. The article does not give a correction formula but solves part of the problem with a prospective subperiod. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Assumptions

Multiple analysts, rules, dates, or specifications were implicitly available for selection. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Limitations

A holdout beginning after monitoring starts reduces ex-post selection but does not remove all discretion in signals, endpoints, or statistics. The residual-discretion warning is inferred.

## Practical use

Predeclare the rule and test window, preserve a true holdout, and count the research paths that led to the selected signal. [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]; [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Relationships

- **Prerequisites:** [[Hypothesis Testing]]
- **Extensions:** [[Prospective Validation]]
- **Alternatives:** [[Survivorship Bias]]
- **Applications:** [[Backtest Validation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]
- [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]
