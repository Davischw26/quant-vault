---
title: "Principal Component Model"
type: model
area: "Optimization"
status: evergreen
tags:
  - pca
  - factors
  - area/optimization
source_files:
  - "A Perspective on Quantitative Finance Models for Beating the Market"
---
# Principal Component Model

> [!summary]
> Represent correlated stock returns with orthogonal empirical components and trade residual behavior.

## Purpose

Thorp reports launching a simpler principal-components version of statistical arbitrage in 1992, later expanded with additional predictors. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Mathematical foundation

Return matrix $R$ is decomposed into component loadings and scores; residuals after projecting onto retained components become candidate idiosyncratic signals. The linear-algebra description is an inferred standard implementation because the article gives no algorithm.

## Assumptions

The estimated covariance structure is stable enough for components to capture common movements. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]

## Limitations

Components are statistical rather than causal and can rotate or break across regimes. This is an inferred model-risk warning.

## Practical use

Fit components on a rolling window, neutralize component exposures, and test residual reversal net of costs. This is an inferred implementation path tied to the described system.

## Relationships

- **Prerequisites:** [[Covariance Matrix]]
- **Extensions:** [[Factor-Neutral Portfolio]]
- **Alternatives:** [[Industry-Neutral Model]]
- **Applications:** [[Statistical Arbitrage]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), quantitative-finance perspective]]
