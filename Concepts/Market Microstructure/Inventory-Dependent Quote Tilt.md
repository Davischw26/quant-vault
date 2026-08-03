---
title: "Inventory-Dependent Quote Tilt"
type: model
area: "Market Microstructure"
status: evergreen
tags:
  - inventory
  - market-making
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Inventory-Dependent Quote Tilt

> [!summary]
> A dealer may shift both bid and ask around equilibrium in response to inventory, so markup and markdown need not be symmetric.

## Purpose

The liquidity article cites optimal-quote work showing that the spread can tilt or shift as a function of dealer inventory, qualifying its own no-tilt assumption. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Mathematical foundation

No explicit formula is developed in the article; the qualitative model makes quote center a function of inventory. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Assumptions

Dealer inventory creates risk and therefore affects desired order flow. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Limitations

The dataset lacks dealer inventory, so the paper cannot estimate tilt and adopts symmetry as a useful approximation. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Practical use

When possible, include dealer inventory proxies or order-flow imbalance in execution-cost models. This is an inferred implementation of the cited limitation.

## Relationships

- **Prerequisites:** [[Market Maker]]
- **Extensions:** [[Dealer Inventory Risk]]
- **Conflicts:** [[Symmetric Spread Assumption]]
- **Applications:** [[Execution Cost Model]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992
