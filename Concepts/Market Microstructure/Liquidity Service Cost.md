---
title: "Liquidity Service Cost"
type: concept
area: "Market Microstructure"
status: evergreen
tags:
  - liquidity
  - transaction-costs
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Liquidity Service Cost

> [!summary]
> The expected price concession paid for immediate execution against a market maker.

## Purpose

The empirical study distinguishes quoted spread from expected liquidity cost and estimates the latter using 1,894 option transactions. It reports an average cost of 0.54% of option value for the fund’s trades. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Mathematical foundation

For a public buy, estimated percentage cost is $100(P_{trade}-P_{close})/P_{close}$; for a sale it is $100(P_{close}-P_{trade})/P_{close}$, using closing price as the equilibrium-price proxy. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Assumptions

Observed random trades and the close are unbiased equilibrium-price proxies on average; average market-maker premiums and discounts balance; intraday drift is small. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Limitations

The estimate mixes the cost conditional on meeting a dealer with the probability of doing so, applies to one fund and period, and has noisy close-to-trade measurement. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Practical use

Model expected execution cost as participation probability times conditional concession, and estimate it for the actual strategy rather than using the full quoted spread mechanically. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Relationships

- **Prerequisites:** [[Bid-Ask Spread]]; [[Market Maker]]
- **Extensions:** [[Expected Transaction Cost]]
- **Conflicts:** [[Frictionless Market Assumption]]
- **Applications:** [[Strategy Net Alpha]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992
- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994
