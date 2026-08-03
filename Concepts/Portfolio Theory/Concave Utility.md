---
title: "Concave Utility"
type: concept
area: "Portfolio Theory"
status: evergreen
tags:
  - utility
  - risk-aversion
  - area/portfolio-theory
source_files:
  - "Concave Utilities are Distinguished by their Optimal Strategies"
---
# Concave Utility

> [!summary]
> A utility function with diminishing marginal value of wealth; strict concavity makes many allocation optima unique.

## Purpose

The source studies nondecreasing concave utilities on positive wealth, including nondifferentiable polygonal utilities, because they support broad expected-utility optimization without requiring smoothness. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Mathematical foundation

Concavity means $U(\lambda x+(1-\lambda)y)\ge\lambda U(x)+(1-\lambda)U(y)$ for $0\le\lambda\le1$. Strict inequality for distinct points gives strict concavity. Left and right derivatives of a continuous concave function are nonincreasing. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Assumptions

The central results require specified monotonicity, domain, and sometimes strict concavity or differentiability conditions. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Limitations

Utilities that flatten too early can be inequivalent yet induce the same strategies, showing why the theorem needs a strict-increase condition. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Practical use

Use the curvature of utility to encode aversion to dispersion, then solve [[Expected Utility Maximization]].

## Relationships

- **Prerequisites:** [[Expected Utility]]
- **Extensions:** [[Utility Equivalence]]; [[Utility Separation Theorem]]
- **Alternatives:** [[Expected Log-Growth Criterion]]
- **Applications:** [[Capital Allocation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]
