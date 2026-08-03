---
title: "Volatility Is an Estimate"
type: chapter
route: 4
order: 2
tags:
  - options
  - volatility
  - estimation
---
# Volatility Is an Estimate

> [!summary]
> Volatility is not a known model input. Historical and implied volatility answer different questions, and both require interpretation.

## Historical volatility

For log returns $r_1,\ldots,r_n$, sample variance is:

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(r_i-\bar r)^2.
$$

Annualized volatility is often:

$$
\hat\sigma=s\sqrt{m},
$$

where $m$ is the number of return intervals per year.

This estimate depends on:

- sampling interval;
- lookback window;
- treatment of dividends and overnight moves;
- changing volatility regimes;
- serial dependence and outliers.

It describes a selected history; it is not automatically a forecast.

## Sampling uncertainty

Under independent normal returns with constant variance:

$$
\frac{(n-1)s^2}{\sigma^2}\sim\chi^2_{n-1}.
$$

A $(1-\alpha)$ confidence interval for variance is:

$$
\left[
\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}
\right].
$$

Take square roots for a volatility interval.

The interval is useful because an option price calculated at one volatility point can look much more certain than the estimate supports. It is conditional on normality, independence, and constant variance—assumptions that are themselves questionable in markets. [[Common Stock Volatilities in Option Formulas|Thorp (1973), volatility estimation and chi-square inference]]

## Implied volatility

Implied volatility is the value $\sigma_{\text{imp}}$ that solves:

$$
C_{\text{model}}(S,K,T,r,\sigma_{\text{imp}})=C_{\text{market}}.
$$

It translates a market price into the units of a chosen model. It is not directly observed future volatility.

Implied volatility can embed:

- expected realized volatility;
- volatility risk premium;
- jump and tail risk;
- supply and demand;
- hedging pressure;
- liquidity and funding;
- model misspecification.

If implied volatility varies by strike and maturity, the market is telling us that a single constant-volatility model cannot fit all options simultaneously.

## Historical versus implied

| Historical | Implied |
|---|---|
| estimated from past returns | backed out from current option prices |
| depends on lookback and estimator | depends on pricing model and market price |
| useful as a realized-volatility baseline | useful as a market-consistent quoting measure |
| omits forward market information | includes premiums and market frictions |

Neither dominates. The decision is usually about the relationship among forecast realized volatility, implied volatility, hedge cost, and tail exposure.

## Nonlinearity creates estimation bias

Even if $s^2$ is an unbiased estimator of variance, an option price calculated with it need not be unbiased:

$$
E[C(s^2)]\neq C(E[s^2]).
$$

The pricing function is nonlinear. Jensen’s inequality and curvature matter. A “best” parameter estimate passed through a nonlinear model can create a biased value estimate. [[Common Stock Volatilities in Option Formulas|Thorp (1973), estimator-induced option bias]]

## Volatility may depend on state

The constant-elasticity-of-variance family writes:

$$
dS=\mu S\,dt+\delta S^\alpha dW.
$$

When $\alpha\neq1$, percentage volatility changes with the stock price. Thorp also links equity volatility to corporate leverage: if equity is a call-like residual claim on firm assets, falling equity value can increase the volatility of the equity claim. [[Common Stock Volatilities in Option Formulas|Thorp (1973), CEV and leverage discussion]]

## A complete volatility decision

For an options position:

1. estimate historical volatility over several defensible windows;
2. quantify sampling uncertainty;
3. inspect strike and maturity implied volatilities;
4. state a forecast range, not one point;
5. reprice and re-hedge across the range;
6. add jumps and liquidity stress separately;
7. identify whether profit comes from volatility, skew, timing, or execution.

An option is not cheap merely because implied volatility exceeds one historical estimate.

---

**Previous:** [[Pricing by Replication]] · **Next:** [[Greeks, Hedging, and Hedge Error]] · **Route:** [[04 Options]]
