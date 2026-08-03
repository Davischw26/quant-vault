---
title: "Expected Utility Maximization"
type: method
area: "Optimization"
status: evergreen
tags:
  - optimization
  - utility
  - area/optimization
source_files:
  - "Concave Utilities are Distinguished by their Optimal Strategies"
---
# Expected Utility Maximization

> [!summary]
> Choose the feasible allocation whose terminal wealth distribution has the highest expected utility.

## Purpose

In a finite-stage investment process, each allocation strategy induces a terminal wealth distribution; the objective is $\max_A\int U(x)\,dF_A(x)$. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Mathematical foundation

For one risky two-point payoff and cash, $E[U(Z_1(w))]=pU(1+aw)+qU(1-bw)$. With concave $U$, the objective is concave in $w$; a strict version gives a unique optimizer. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Assumptions

The feasible strategy set, wealth domain, and expectation must be well-defined, and a maximizing strategy must exist. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Limitations

Results depend on the chosen utility. The separation theorem shows inequivalent utilities can imply different optimal allocations. [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]

## Practical use

Select or estimate a utility, generate the terminal-wealth distribution for each feasible allocation, then optimize and sensitivity-test the choice across nearby utility representatives. [[Concave Utilities are Distinguished by their Optimal Strategies#4. QUESTIONS FOR FURTHER INVESTIGATION|Thorp & Whitley (1972), open questions]]

## Relationships

- **Prerequisites:** [[Concave Utility]]; [[Return Distribution]]
- **Extensions:** [[Dynamic Portfolio Choice]]
- **Alternatives:** [[Expected Log-Growth Criterion]]
- **Conflicts:** [[Expected Value Criterion]]
- **Applications:** [[Capital Allocation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[Concave Utilities are Distinguished by their Optimal Strategies#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]
- [[Concave Utilities are Distinguished by their Optimal Strategies#4. QUESTIONS FOR FURTHER INVESTIGATION|Thorp & Whitley (1972), open questions]]
