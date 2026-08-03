---
title: "Option-Implied Interest Rate Index"
type: method
area: "Derivatives Pricing"
status: evergreen
tags:
  - interest-rate
  - options-index
  - area/derivatives-pricing
source_files:
  - "A Public Index for Listed Options"
---
# Option-Implied Interest Rate Index

> [!summary]
> Infer the financing rate embedded in deep-in-the-money option prices and aggregate it across contracts.

## Purpose

Deep-in-the-money rational option prices depend mainly on the interest rate, so the option market can be inverted to estimate an effective rate. [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]

## Mathematical foundation

For each option, solve $C_{model}(r_i)=C_{mkt}$, truncate infeasible or extreme values, and weight by rate sensitivity $\partial C/\partial r$. [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]

## Assumptions

The option model is appropriate, prices exceed necessary lower bounds, and other inputs—especially volatility—matter little in the selected region. [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]

## Limitations

Transaction costs, taxes, price dispersion, nonsynchronous stock/option quotes, and market noise complicate the inference. [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]

## Practical use

Compare the implied rate with actual funding and lending curves to identify financing-rich or financing-cheap structures. This trading comparison is inferred from the index’s purpose.

## Relationships

- **Prerequisites:** [[Deep-In-the-Money Call Decomposition]]; [[Rho]]
- **Extensions:** [[Funding Basis Trade]]
- **Alternatives:** [[Treasury Bill Rate]]
- **Applications:** [[Deep-In-the-Money Call Financing Trade]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]
