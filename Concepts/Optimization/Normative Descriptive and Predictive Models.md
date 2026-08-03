---
title: "Normative Descriptive and Predictive Models"
type: concept
area: "Optimization"
status: evergreen
tags:
  - modeling
  - epistemology
  - area/optimization
source_files:
  - "Common Stock Volatilities in Option Formulas"
---
# Normative Descriptive and Predictive Models

> [!summary]
> A model may prescribe a decision, fit observed data, or forecast future data; these roles are logically distinct.

## Purpose

Thorp classifies models as descriptive (fit), predictive (forecast), and prescriptive or normative (achieve an objective). A normative option model can expose profitable deviations even when it does not match observed prices. [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Mathematical foundation

There is no single formula; the distinction concerns the loss function. Descriptive fit minimizes in-sample error, prediction targets out-of-sample error, and a normative model optimizes a decision criterion. The loss-function phrasing is an inferred formalization of the source’s classification.

## Assumptions

A model’s evaluation metric must match its intended role. [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Limitations

Good fit does not establish tradability, and trading usefulness does not prove empirical truth. Taxes, costs, and alternative models can explain apparent mispricing. [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]

## Practical use

Label every research model with its role and validate it accordingly: fit test, forecast test, or executable decision test. This workflow is inferred from the classification.

## Relationships

- **Prerequisites:** [[Model Validation]]
- **Extensions:** [[Quantitative Model Lifecycle]]
- **Applications:** [[Strategy Research]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Common Stock Volatilities in Option Formulas#I. INTRODUCTION|Thorp (1976), Introduction]]
