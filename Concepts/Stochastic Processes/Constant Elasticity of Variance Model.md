---
title: "Constant Elasticity of Variance Model"
type: model
area: "Stochastic Processes"
status: evergreen
aliases:
  - "CEV model"
  - "Cox-Ross volatility model"
tags:
  - cev
  - volatility
  - area/stochastic-processes
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Constant Elasticity of Variance Model

> [!summary]
> A diffusion whose instantaneous price volatility scales as a power of price rather than proportionally to price.

## Purpose

The source considers $dS$ volatility proportional to $S^\alpha$ with $0<\alpha<1$ as an alternative to Black–Scholes proportional volatility. This makes relative volatility rise when price falls. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Mathematical foundation

In normalized notation, $dS_t=\mu(S_t,t)dt+\nu S_t^\alpha dW_t$. Black–Scholes is the special case $\alpha=1$. The proposed test searches for the exponent that removes a regression slope between normalized squared increments and price. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]; [[Common Stock Volatilities in Option Formulas#VII. TESTING THE COX-ROSS VOLATILITY MODEL|Thorp (1976), CEV test]]

## Assumptions

A power-law volatility relation with a stock-characteristic constant and, in the testing section, zero trend over small intervals. [[Common Stock Volatilities in Option Formulas#VII. TESTING THE COX-ROSS VOLATILITY MODEL|Thorp (1976), CEV test]]

## Limitations

The article calls for quantitative verification and treats the exponent as potentially stock- and range-dependent. [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]

## Practical use

Estimate $\alpha$ cross-sectionally or through time, then compare option fit and tradable errors against the Black–Scholes baseline. [[Common Stock Volatilities in Option Formulas#VII. TESTING THE COX-ROSS VOLATILITY MODEL|Thorp (1976), CEV test]]

## Relationships

- **Prerequisites:** [[Diffusion Process]]; [[Drift and Volatility]]
- **Extensions:** [[Leverage Effect]]
- **Alternatives:** [[Geometric Brownian Motion]]
- **Applications:** [[Option Pricing]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]
- [[Common Stock Volatilities in Option Formulas#VII. TESTING THE COX-ROSS VOLATILITY MODEL|Thorp (1976), CEV test]]
