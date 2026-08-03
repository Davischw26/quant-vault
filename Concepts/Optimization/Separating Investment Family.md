---
title: "Separating Investment Family"
type: method
area: "Optimization"
status: evergreen
tags:
  - utility
  - identification
  - area/optimization
source_files:
  - "Concave Utilities are Distinguished by their Optimal Strategies"
---
# Separating Investment Family

> [!summary]
> A collection of payoff environments rich enough to produce different optimizers for inequivalent utilities.

## Purpose

The source varies payoff values and probabilities separately to determine when a family of random investments identifies utility up to positive affine transformation. [[Concave Utilities are Distinguished by their Optimal Strategies#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]

## Mathematical foundation

Optimality is characterized by the derivative of $E[U(1+wR)]$ with respect to allocation $w$. By choosing payoff vectors or probability vectors that make this derivative zero for one utility, the proof compares derivative ratios across utilities. [[Concave Utilities are Distinguished by their Optimal Strategies#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]

## Assumptions

The strongest stated results use increasing strictly concave utilities and payoff supports spanning values below and above one. [[Concave Utilities are Distinguished by their Optimal Strategies#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]

## Limitations

A support range can only distinguish utilities over the wealth interval it reaches; too few non-unit outcomes may fail to identify them. [[Concave Utilities are Distinguished by their Optimal Strategies#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]

## Practical use

Design preference experiments with multiple upside and downside magnitudes, not only different probabilities on one binary payoff. This is an inferred experimental-design rule.

## Relationships

- **Prerequisites:** [[Utility Separation Theorem]]
- **Extensions:** [[Preference Identification]]
- **Applications:** [[Expected Utility Maximization]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Concave Utilities are Distinguished by their Optimal Strategies#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]
