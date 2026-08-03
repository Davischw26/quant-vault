---
title: "Option-Implied Volatility Index"
type: method
area: "Derivatives Pricing"
status: evergreen
tags:
  - volatility-index
  - options
  - area/derivatives-pricing
source_files:
  - "A Public Index for Listed Options"
---
# Option-Implied Volatility Index

> [!summary]
> Aggregate option-implied volatility relative to contemporaneous historical-volatility estimates to indicate class-wide rich or cheap pricing.

## Purpose

Thorp’s first index compares an average market-implied forecast with an average historical estimate, aiming to measure whether listed options as a class appear over- or underpriced. [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]; [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Mathematical foundation

For each option, solve for $\sigma_{imp}$, truncate it to a band around historical $\hat\sigma$, weight options on one stock by approximate vega, average within stock and across stocks, then form an implied-to-historical ratio. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Assumptions

The chosen model and rate are sufficiently valid; historical volatility is a useful comparator; quote errors are controlled; and aggregation is meaningful. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Limitations

The weights, truncation, and arithmetic averaging are acknowledged as partly arbitrary. The original sample was short and rate adjustment could change conclusions. [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]

## Practical use

Rebuild with liquid quotes, transparent filters, vega weights, and forward-looking realized-volatility validation. The validation target extends the article’s lag analysis.

## Relationships

- **Prerequisites:** [[Implied Volatility]]; [[Historical Volatility Estimator]]
- **Extensions:** [[Volatility Risk Premium]]
- **Alternatives:** [[Gastineau Volatility Index]]
- **Applications:** [[Volatility Relative-Value Trade]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Public Index for Listed Options#1. INTRODUCTION|Thorp (1977), option-index design]]
- [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]
- [[A Public Index for Listed Options#4. COMPARISON WITH GASTINEAU'S VOLATILITY INDEX|Thorp (1977), index comparison]]
