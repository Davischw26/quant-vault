---
title: "Probability and Statistics MOC"
type: moc
area: "Probability"
status: evergreen
tags:
  - moc
  - probability
  - area/probability
---
# Probability and Statistics MOC

## Start here

This map connects distributional foundations to estimation, hypothesis tests, simulation, and validation.

### Compounding and distributions

- [[Expected Value Criterion]] contrasts with [[Expected Log-Growth Criterion]].
- [[Geometric Compounding]] creates [[Terminal Wealth Distribution]].
- [[First-Order Stochastic Dominance]] compares entire terminal distributions.
- [[Log Return]], [[Normal Distribution]], and [[Lognormal Wealth Approximation]] support the baseline models.

### Sampling and estimation

- [[Historical Volatility Estimator]] → [[Chi-Square Variance Inference]] → [[Volatility Parameter Uncertainty]].
- [[Estimator-Induced Option Price Bias]] shows why a nonlinear transform of an unbiased estimate need not remain unbiased.
- [[Monte Carlo Simulation]] supports finite-horizon strategy comparison.

### Hypothesis testing

- [[Sampling Without Replacement]] → [[Hypergeometric Market-Timing Test]].
- [[Two-Sample Return Test]] tests regime return differences.
- [[Data Mining Bias]] → [[Prospective Validation]] prevents a lucky survivor from becoming a false discovery.

### Worked examples

- [[Worked Example - Biased Coin Kelly Bet]]
- [[Worked Example - Fractional Kelly Monte Carlo]]
- [[Worked Example - Volatility Confidence Interval]]
- [[Worked Example - Hypergeometric Timing Test]]

> [!inference] Traversal
> For any claimed signal, follow: distribution → estimator → sampling uncertainty → null test → prospective validation → costs.
