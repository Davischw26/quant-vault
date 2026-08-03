---
title: "Bid-Ask Spread"
type: concept
area: "Market Microstructure"
status: evergreen
tags:
  - spread
  - liquidity
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Bid-Ask Spread

> [!summary]
> The difference between immediate dealer ask and bid quotes; it is not automatically the expected cost of every trade.

## Purpose

Market makers supply always-present prices: the public can sell at the bid or buy at the ask. The equilibrium price represents a patient public-to-public clearing level. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990

## Mathematical foundation

A quoted round-trip spread is $A-B$; a one-way concession is often compared with half the spread. Expected cost additionally multiplies by the chance the strategy actually trades with a market maker. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Assumptions

The simple diagram separates public supply/demand from dealer quotes and treats equilibrium price as a useful latent benchmark. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990

## Limitations

Inventory can tilt quotes around equilibrium, and actual executions may occur between public participants. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Practical use

Do not invalidate a strategy using the entire spread unless its execution actually crosses both sides at that frequency. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Relationships

- **Prerequisites:** [[Market Maker]]
- **Extensions:** [[Liquidity Service Cost]]
- **Applications:** [[Transaction Cost Model]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990
- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992
- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994
