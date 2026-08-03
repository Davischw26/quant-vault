---
title: "Worked Example - Biased Coin Kelly Bet"
type: worked-example
area: "Portfolio Theory"
status: evergreen
tags:
  - worked-example
  - kelly
  - area/portfolio-theory
source_files:
  - "The Kelly Criterion and the Stock Market"
---
# Worked Example - Biased Coin Kelly Bet

## Problem

An even-money wager wins with probability $p=0.53$ and loses with $q=0.47$. Find the full-Kelly fraction and compare it with a clearly excessive fraction. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Solution

For even money, [[Binomial Kelly Fraction]] gives

$$f^*=p-q=0.53-0.47=0.06.$$

The expected log growth is

$$G(f)=0.53\log(1+f)+0.47\log(1-f).$$

At $f=0.06$, the source reports $G(f^*)\approx0.0016566$ per play. The OCR prints one decimal place ambiguously in one sentence; the formula and original PDF should govern exact transcription. The positive root other than zero is about $f_0=0.11973$, so fractions above roughly 12% make modeled long-run log growth negative. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Interpretation

- Bet 6% of current wealth for maximum modeled compound growth. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- Betting less than 6% grows more slowly but with smaller swings. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- Betting between 6% and about 12% still has positive modeled log growth but is overbetting. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- Betting beyond about 12% drives wealth toward zero almost surely in the idealized repeated game. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Implementation sketch

At each trial set **stake = 0.06 × current wealth**; update wealth after the outcome. Run parallel paths at 0.03, 0.06, 0.10, and 0.13 to visualize [[Growth-Security Tradeoff]] and [[Ruin Boundary]]. The simulation comparison is an inferred teaching extension.

## Trace

[[Binomial Gambling Model]] → [[Expected Log-Growth Criterion]] → [[Binomial Kelly Fraction]] → [[Fixed-Fraction Betting]] → this example.
