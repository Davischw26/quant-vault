---
title: "Expected Log-Growth Criterion"
type: criterion
area: "Portfolio Theory"
status: evergreen
aliases:
  - "Kelly criterion"
  - "capital growth criterion"
  - "log utility criterion"
tags:
  - kelly
  - growth-optimal
  - area/portfolio-theory
source_files:
  - "The Kelly Criterion and the Stock Market"
  - "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"
---
# Expected Log-Growth Criterion

> [!summary]
> Maximize the expected logarithm of the wealth multiplier to optimize asymptotic compound growth.

## Purpose

The criterion balances favorable expectation against multiplicative loss: maximize $E[\log(X_{t+1}/X_t)]$. In fixed-fraction games this is equivalent to maximizing the expected exponential growth-rate coefficient. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

## Mathematical foundation

For an even-money bet with win probability $p$ and loss probability $q=1-p$, $G(f)=p\log(1+f)+q\log(1-f)$ and the unique optimum is $f^*=p-q$. For a general return $R$, solve $\max_f E[\log(1+fR)]$ subject to $1+fR>0$ almost surely. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]; [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Assumptions

Capital is treated as divisible; probabilities and payoff distributions are known; repeated opportunities permit compounding; and admissible stakes keep wealth positive. [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]; [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]

## Limitations

Full Kelly has low effective risk aversion and can produce severe short- and medium-horizon drawdowns. Parameter error, correlation, leverage, and nonstationarity require adaptation. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#1 Introduction|MacLean et al. (2010), Introduction]]; [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Practical use

Estimate the return distribution, solve for the log-optimal allocation, then reduce it with [[Fractional Kelly Strategy]] when estimation error or drawdown tolerance matters. [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]

## Relationships

- **Prerequisites:** [[Geometric Compounding]]; [[Concave Utility]]
- **Extensions:** [[Generalized Kelly Fraction]]; [[Fractional Kelly Strategy]]
- **Alternatives:** [[Expected Utility Maximization]]
- **Conflicts:** [[Expected Value Criterion]]
- **Applications:** [[Capital Allocation]]

> [!inference] Graph semantics
> Relationship labels are vault synthesis unless the source-grounded sections above explicitly state the dependency.

## Sources

- [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]
- [[The Kelly Criterion and the Stock Market#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies#4 Discussion|MacLean et al. (2010), Discussion]]
