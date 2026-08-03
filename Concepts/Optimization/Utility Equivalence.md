---
title: "Utility Equivalence"
type: concept
area: "Optimization"
status: evergreen
tags:
  - utility
  - equivalence
  - area/optimization
source_files:
  - "Concave Utilities are Distinguished by their Optimal Strategies"
---
# Utility Equivalence

> [!summary]
> Positive affine transformations of a utility function represent the same preferences and produce the same expected-utility optimizers.

## Purpose

The source defines $U$ and $V$ as equivalent exactly when $V(x)=aU(x)+b$ with $a>0$. Its theorems ask whether identical optimal strategies imply this equivalence. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Mathematical foundation

Because $E[aU(X)+b]=aE[U(X)]+b$, multiplying by a positive constant and adding a constant preserves the argmax.

## Assumptions

The positive multiplier is essential; a negative multiplier would reverse the ordering. The expectation and feasible set must be well-defined. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Limitations

Equivalence is ordinal for choice but does not make raw utility levels comparable across representatives. This clarification is inferred from the affine invariance.

## Practical use

Normalize utilities before measuring “distance” between them; the source proposes comparing normalized representatives for bounded utilities. [[Concave Utilities are Distinguished by their Optimal Strategies#4. QUESTIONS FOR FURTHER INVESTIGATION|Thorp & Whitley (1972), open questions]]

## Relationships

- **Prerequisites:** [[Concave Utility]]
- **Extensions:** [[Utility Separation Theorem]]
- **Applications:** [[Expected Utility Maximization]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]
- [[Concave Utilities are Distinguished by their Optimal Strategies#4. QUESTIONS FOR FURTHER INVESTIGATION|Thorp & Whitley (1972), open questions]]
