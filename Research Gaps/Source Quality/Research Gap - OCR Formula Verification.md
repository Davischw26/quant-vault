---
title: "Research Gap - OCR Formula Verification"
type: research-gap
area: "Sources"
status: evergreen
tags:
  - research-gap
  - source-quality
  - area/sources
source_files:
  - "Extensions of the Black-Scholes Option Model"
  - "Common Stock Volatilities in Option Formulas"
  - "A Public Index for Listed Options"
---
# Research Gap - OCR Formula Verification

## Problem

Several source Markdown files come from scans or embedded PDF text with corrupted equations, symbols, headings, and page furniture. Exact warrant, dividend-threshold, volatility-estimator, and index formulas are therefore unsafe to transcribe solely from OCR.

## Policy

This vault normalizes only formulas whose mathematical identity is clear and labels uncertain formulas. Before code or publication, compare the note with the linked original PDF and record the verified notation.

## Priority queue

1. Warrant price rescaling in [[Extensions of the Black-Scholes Option Model#^warrant-hedging|Thorp (1973), warrant hedging]].
2. Dividend early-exercise threshold in [[Extensions of the Black-Scholes Option Model#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]].
3. Proposed unbiased option-value estimator in [[Common Stock Volatilities in Option Formulas#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]].
4. Public volatility and interest-rate index formulas in [[A Public Index for Listed Options#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]; [[A Public Index for Listed Options#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]].
