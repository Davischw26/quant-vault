---
title: "Two-Sample Return Test"
type: method
area: "Probability"
status: evergreen
tags:
  - t-test
  - market-timing
  - area/probability
source_files:
  - "Can Joe Granville Time the Market"
---
# Two-Sample Return Test

> [!summary]
> Compare mean log returns during buy and sell regimes using a pooled-variance t statistic.

## Purpose

The second Granville test asks whether the mean daily log return in buy periods exceeds that in sell periods. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]

## Mathematical foundation

The source assumes independent normal log returns with equal variances and uses the standard pooled two-sample t statistic for $H_0:\mu_B-\mu_S\le0$. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]

## Assumptions

Normality, independence, equal variances, fixed regime labels, and no causal price impact from the recommendations. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]

## Limitations

Serial dependence, heteroskedasticity, data mining, and self-induced price moves can invalidate the nominal p-value. Data mining and causal impact are explicit source caveats; the first two are inferred modern diagnostics. [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]; [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]

## Practical use

Reproduce the original statistic, then add heteroskedasticity/autocorrelation-robust or permutation checks as inferred robustness extensions.

## Relationships

- **Prerequisites:** [[Log Return]]; [[Hypothesis Testing]]
- **Extensions:** [[Robust Return Test]]
- **Alternatives:** [[Hypergeometric Market-Timing Test]]
- **Applications:** [[Market Timing Strategy]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Can Joe Granville Time the Market#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]
- [[Can Joe Granville Time the Market#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]
