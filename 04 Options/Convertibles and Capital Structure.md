---
title: "Convertibles and Capital Structure"
type: chapter
route: 4
order: 4
tags:
  - options
  - convertibles
  - credit
---
# Convertibles and Capital Structure

> [!summary]
> A convertible combines bond cash flows with an equity conversion option, so valuation and hedging require both credit and option reasoning.

## Decompose the security

A first approximation is:

$$
V_{\text{convertible}}
\approx
V_{\text{straight bond}}
+
V_{\text{conversion option}}.
$$

The straight-bond component provides an investment-value or bond-floor estimate. The conversion privilege behaves like an option or warrant on the issuer’s stock.

Thorp and Kassouf used this decomposition to compare convertibles across securities and through time, then developed hedge ratios and error bounds. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), convertible valuation and hedging]]

## The basic relative-value trade

If a convertible appears cheap relative to its components:

1. buy the convertible;
2. short approximately its equity delta in common stock;
3. rebalance as delta changes;
4. collect the convergence or mispricing if it exceeds financing, borrow, and trading costs.

For convertible value $V_c(S)$, the local stock hedge is:

$$
\text{shares short}\approx\frac{\partial V_c}{\partial S}.
$$

This offsets a small stock move at the current state.

## Why the decomposition is only a start

Bond value and option value are not truly independent.

When the stock falls:

- leverage rises;
- credit quality may deteriorate;
- the bond floor may fall;
- equity volatility may rise;
- the conversion option changes;
- borrow and liquidity can worsen together.

The same stock move can therefore damage both sides of the decomposition. A single-factor stock model misses this coupling.

## Equity as an option on firm assets

In a simplified structural model, firm asset value $A_T$ pays debt face value $D$ first. Equity receives:

$$
E_T=\max(A_T-D,0).
$$

Equity is therefore call-like on firm assets with strike equal to debt. This view explains why equity volatility can increase when asset value falls: the residual equity claim becomes more levered. [[Common Stock Volatilities in Option Formulas|Thorp (1973), leverage effect and equity-as-call argument]]

The structural picture is useful, but real capital structures contain multiple debt classes, covenants, maturities, recovery uncertainty, and strategic behavior.

## Risks in convertible arbitrage

- **Credit jump:** bond value falls discontinuously.
- **Stock gap:** the delta hedge cannot rebalance through the move.
- **Volatility change:** option value and delta change.
- **Borrow squeeze:** the short stock becomes expensive or unavailable.
- **Liquidity mismatch:** the stock trades but the convertible does not.
- **Call or conversion terms:** issuer actions alter the expected life.
- **Model error:** bond floor, recovery, and stock-credit coupling are wrong.
- **Financing:** leveraged carry disappears when funding terms change.

Delta neutrality addresses only the first-order stock exposure.

## A complete analysis

Record:

1. contractual cash flows, conversion ratio, calls, puts, and covenants;
2. comparable straight-bond yield and recovery assumptions;
3. option inputs and volatility surface;
4. stock borrow and financing;
5. current and stressed delta;
6. stock-credit-volatility scenarios;
7. liquidity and exit time for both legs;
8. model-value range rather than one fair value;
9. total convergence needed after all costs.

## The broader lesson

Capital-structure trades often look hedged because their market beta is small. Their real exposure is the relationship among claims on the same issuer. When that relationship changes during distress, local hedges and historical correlations are least reliable.

---

**Previous:** [[Greeks, Hedging, and Hedge Error]] · **Route:** [[04 Options]] · **Next route:** [[05 Risk and Execution]]
