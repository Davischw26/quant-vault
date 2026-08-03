---
title: "Contingent Limit Order"
type: method
area: "Market Microstructure"
status: evergreen
tags:
  - execution
  - options
  - area/market-microstructure
source_files:
  - "The Cost of Liquidity Services in Listed Options - A Note"
---
# Contingent Limit Order

> [!summary]
> An option limit order whose acceptable price is conditional on the contemporaneous underlying-stock price.

## Purpose

The studied fund screened options for model mispricing and typically entered day orders specifying an option limit conditional on the stock being at a stated price or better. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], p. 992

## Mathematical foundation

An execution rule can be written “buy option if $C\le L(S)$,” where $L(S)$ is the model-derived limit as a function of stock price. This notation formalizes the described order.

## Assumptions

The option model and stock quote update quickly enough for the contingent relation to remain meaningful. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], p. 992

## Limitations

Partial fills, nonsynchronous prices, and market impact can make recorded daily aggregates differ from individual executions. [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994

## Practical use

Generate a live stock-contingent option limit from model value minus required edge and estimated costs. This follows the execution procedure described in the source.

## Relationships

- **Prerequisites:** [[Option Mispricing Screen]]
- **Extensions:** [[Algorithmic Execution]]
- **Alternatives:** [[Market Order]]
- **Applications:** [[Transaction Cost Control]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], p. 992
- [[The Cost of Liquidity Services in Listed Options - A Note|Baesel, Shows & Thorp (1983)]], pp. 992–994
