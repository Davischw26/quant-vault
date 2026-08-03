---
title: "Worked Example - Hypergeometric Timing Test"
type: worked-example
area: "Probability"
status: evergreen
tags:
  - worked-example
  - market-timing
  - area/probability
source_files:
  - "Can Joe Granville Time the Market"
---
# Worked Example - Hypergeometric Timing Test

## Problem

In the full Granville sample, the source reports $N=719$ non-flat market days, $K=372$ up days, $n=446$ days labeled “up,” and $x=254$ actual up days inside that set. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]

## Test

Under no timing ability,

$$X\sim\operatorname{Hypergeometric}(N=719,K=372,n=446).$$

Compute the one-sided tail

$$p=P(X\ge254)=\sum_{j=254}^{\min(372,446)}
\frac{\binom{372}{j}\binom{347}{446-j}}{\binom{719}{446}}.$$

The article reports approximately $0.000231$. [[Can Joe Granville Time the Market#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]

## Interpretation

Conditioned on the period’s total up/down counts, the called-up set contains unusually many up days. This supports directional association in the sample; it does not by itself prove stable skill, economic profitability, or absence of selection bias. [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]; [[Can Joe Granville Time the Market#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]

## Next checks

Run the prospective subperiod, pair with [[Two-Sample Return Test]], model costs, and freeze any future signal definition before observing outcomes. [[Can Joe Granville Time the Market#THE DATA|Baesel, Shows & Thorp (1982), data]]; [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]
