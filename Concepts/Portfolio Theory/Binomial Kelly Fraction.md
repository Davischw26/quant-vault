---
title: "Binomial Kelly Fraction"
type: formula
area: "Portfolio Theory"
status: evergreen
tags:
  - kelly
  - binomial
  - area/portfolio-theory
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Binomial Kelly Fraction

> [!summary]
> The growth-optimal fraction for a binary wager with net odds $b:1$ is $f^*=(bp-q)/b$.

## Purpose

It converts a known binary edge and payoff into a proportional stake. For even money, it reduces to $f^*=p-q=2p-1$. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

Maximize $G(f)=p\log(1+bf)+q\log(1-f)$. Setting $G'(f)=0$ yields $f^*=(bp-q)/b$. A positive stake requires $bp-q>0$. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Assumptions

Outcomes are binary, probabilities and odds are known, trials are repeatable, and the bet fraction is admissible. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Limitations

The formula is highly sensitive to errors in $p$ when the edge is small and does not by itself account for correlated simultaneous wagers. This sensitivity warning is an inference from the formula; the article separately warns about real-world divisibility. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Practical use

For $p=0.53$ at even money, $f^*=0.06$; see [[Worked Example - Biased Coin Kelly Bet]]. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Relationships

- **Prerequisites:** [[Binomial Gambling Model]]; [[Expected Log-Growth Criterion]]
- **Extensions:** [[Generalized Kelly Fraction]]
- **Conflicts:** [[Overbetting]]
- **Applications:** [[Worked Example - Biased Coin Kelly Bet]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
