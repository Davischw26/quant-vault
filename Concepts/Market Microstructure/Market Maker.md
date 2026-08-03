---
title: "Market Maker"
type: concept
area: "Market Microstructure"
status: evergreen
tags:
  - dealer
  - liquidity
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Market Maker

> [!summary]
> An intermediary that maintains executable buy and sell prices and is compensated through favorable trade prices on average.

## Purpose

The article models option-market participants as the public and market makers, contrasting AMEX’s specialist structure with CBOE’s competitive crowd. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990

## Mathematical foundation

Public purchase price is modeled as equilibrium price plus random markup; public sale price as equilibrium price plus a random discount whose expectation is negative. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Assumptions

A market maker must earn enough on average to supply immediacy and eventually balance purchases and sales. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Limitations

Inventory and information alter optimal quotes; a specialist’s book can create informational asymmetry absent from the competitive CBOE design. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990; [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992

## Practical use

Track whether executions are dealer-facing or public-to-public because expected cost depends on that mix. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Relationships

- **Prerequisites:** [[Order-Driven Market]]
- **Extensions:** [[Inventory-Dependent Quote Tilt]]
- **Alternatives:** [[Public Limit Order]]
- **Applications:** [[Liquidity Service Cost]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 989–990
- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 990–992
