---
title: "Hypergeometric Market-Timing Test"
type: method
area: "Probability"
status: evergreen
tags:
  - hypergeometric
  - market-timing
  - area/probability
source_files:
  - "Can Joe Granville Time the Market"
---
# Hypergeometric Market-Timing Test

> [!summary]
> Test whether forecasted-up days contain more actual up days than random sampling without replacement would produce.

## Purpose

The first Granville test conditions on the total counts of up and down DJIA days and treats the called-up subset as a sample from that finite population. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]

## Mathematical foundation

If the full period has $N$ days with $K$ up days and the forecaster selects $n$ “up” days, then $X\sim\operatorname{Hypergeometric}(N,K,n)$ under the null and the one-sided p-value is $P(X\ge x_{obs})$. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]

## Assumptions

The selected days are no better than random under the null, zero-change days are excluded, and conditioning on aggregate counts is appropriate. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]

## Limitations

The test ignores return magnitudes and can overstate independent evidence when forecasts affect the market or selection was data-mined. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]; [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Practical use

Use it as a directional hit-rate test and pair it with a magnitude-sensitive return test. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]

## Relationships

- **Prerequisites:** [[Sampling Without Replacement]]
- **Extensions:** [[Prospective Validation]]
- **Alternatives:** [[Two-Sample Return Test]]
- **Applications:** [[Worked Example - Hypergeometric Timing Test]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]
- [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]
- [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]
