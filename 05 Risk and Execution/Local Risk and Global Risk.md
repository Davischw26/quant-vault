---
title: "Local Risk and Global Risk"
type: chapter
route: 5
order: 1
tags:
  - risk
  - factors
  - tails
---
# Local Risk and Global Risk

> [!summary]
> Local risk measures small moves around today’s market. Global risk asks what happens when the market moves far enough for the approximation or relationship to fail.

## Local risk

For portfolio value $V(x)$ and risk-factor vector $x$, a local approximation is:

$$
\Delta V
\approx
\nabla V^\top\Delta x
+
\frac12\Delta x^\top H\Delta x.
$$

$\nabla V$ contains first-order sensitivities; $H$ contains curvature and cross-effects.

Examples include:

- equity beta and factor exposure;
- option delta, gamma, vega, theta, and rho;
- interest-rate duration and convexity;
- credit-spread sensitivity;
- currency exposure.

Local measures answer:

> If ordinary changes occur and the current model remains useful, how should portfolio value move?

They support hedging, limit monitoring, and day-to-day explanation.

## Global risk

Global analysis reprices the portfolio under a materially different state:

$$
L_s=V(x_0)-V(x_0+\Delta x_s).
$$

The shock may include large moves, jumps, changing volatility, broken correlations, wider credit spreads, or unavailable liquidity. It does not have to be assigned a reliable probability to be decision-relevant.

Thorp describes a portfolio process that separately examined local factor sensitivities and large changes in indexes, yield curves, volatility, and catastrophic events—including events beyond the historical record. [[A Perspective on Quantitative Finance Models for Beating the Market|Thorp (2003), local and global risk process]]

## Why both are necessary

| Local question | Global question |
|---|---|
| What is today’s delta? | What if the market gaps before hedging? |
| What is the rate duration? | What if the curve changes shape and liquidity falls? |
| What is factor beta? | What if correlations converge toward one? |
| What is daily volatility? | What if volatility jumps and the distribution changes? |
| What is current margin? | What if losses and margin requirements rise together? |

The global question is not a larger version of the local calculation. It often changes the relationships themselves.

## Factor exposure

A linear factor model writes portfolio return as:

$$
r_p=\beta^\top F+\varepsilon.
$$

Factors reveal common drivers hidden across many positions. A long technology stock, short put, convertible bond, and credit position may all lose when the same company or broad risk factor falls.

Factor neutrality constrains selected $\beta$. It does not remove:

- nonlinear exposure;
- changing factor loadings;
- basis and model risk;
- liquidity dependence;
- idiosyncratic jumps.

## Fat tails and jumps

A thin-tailed diffusion model assumes extreme moves are very rare and prices pass continuously through intermediate levels.

Real portfolios face:

- more frequent extremes than a normal model predicts;
- jumps caused by news or market closure;
- volatility clustering;
- dependence that strengthens during stress.

These are not merely “larger standard deviations.” A jump removes the opportunity to rebalance through the path. A correlation break changes diversification precisely when it is needed.

## Build a two-layer risk view

### Layer 1 · Continuous monitoring

- current positions and market values;
- first- and second-order sensitivities;
- factor, sector, currency, and issuer concentrations;
- leverage, margin, and liquidity;
- ordinary P&L explain.

### Layer 2 · Periodic and event-driven stress

- coherent large-market scenarios;
- full nonlinear revaluation;
- funding, margin, and cash needs;
- hedge and liquidity failure;
- operational and counterparty overlays;
- predefined action.

Run the second layer regularly and whenever the portfolio or market structure changes materially.

## The decision standard

A risk number is useful only when it connects to:

- a limit;
- an owner;
- an action;
- a review frequency.

“The portfolio has a delta of X” is description. “At X we reduce these positions because the global downside exceeds Y” is a control.

---

**Route:** [[05 Risk and Execution]] · **Next:** [[Stress Testing the Whole Portfolio]] · **Playbook:** [[Portfolio Stress Test]]
