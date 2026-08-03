const K = "[[The Kelly Criterion and the Stock Market";
const KS = "[[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies";
const U = "[[Concave Utilities are Distinguished by their Optimal Strategies";
const BS = "[[Extensions of the Black-Scholes Option Model";
const V = "[[Common Stock Volatilities in Option Formulas";
const OI = "[[A Public Index for Listed Options";
const L = "[[The Cost of Liquidity Services in Listed Options - A Note";
const G = "[[Can Joe Granville Time the Market";
const P = "[[A Perspective on Quantitative Finance Models for Beating the Market";

const refs = {
  kBin: `${K}#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]`,
  kCont: `${K}#CONTINUOUS GAMBLING GAMES|Rotando & Thorp (1992), “Continuous Gambling Games”]]`,
  kMarket: `${K}#AN APPLICATION TO THE U.S. STOCK MARKET|Rotando & Thorp (1992), U.S. stock-market application]]`,
  kSP: `${K}#INVESTMENT IN S &P 500 STOCKS|Rotando & Thorp (1992), S&P 500 allocation]]`,
  simIntro: `${KS}#1 Introduction|MacLean et al. (2010), Introduction]]`,
  simFrac: `${KS}#2 Fractional Kelly Strategies: The Ziemba and Hausch (1986)|MacLean et al. (2010), fractional-Kelly experiment]]`,
  simZH: `${KS}#3.1 The Ziemba and Hausch (1986) Model|MacLean et al. (2010), Ziemba–Hausch model]]`,
  simU: `${KS}#3.2 Bicksler - Thorp (1973) Case I - Uniform Returns|MacLean et al. (2010), uniform-return experiment]]`,
  simEq: `${KS}#3.3 Bicksler - Thorp (1973) Case II - Equity Market Returns|MacLean et al. (2010), equity-return experiment]]`,
  simDisc: `${KS}#4 Discussion|MacLean et al. (2010), Discussion]]`,
  utilMain: `${U}#2. THE MAIN THEOREM|Thorp & Whitley (1972), main theorem]]`,
  utilSep: `${U}#3. OTHER SEPARATING FAMILIES|Thorp & Whitley (1972), separating families]]`,
  utilOpen: `${U}#4. QUESTIONS FOR FURTHER INVESTIGATION|Thorp & Whitley (1972), open questions]]`,
  bsTheory: `${BS}#2. The Black-Scholes theory, These efforts have culminated|Thorp (1973), Black–Scholes theory]]`,
  bsWarrant: `${BS}#^warrant-hedging|Thorp (1973), warrant hedging]]`,
  bsDiv: `${BS}#5. Calls on stocks paying cash dividends, Let  ty  be the last|Thorp (1973), cash dividends]]`,
  volIntro: `${V}#I. INTRODUCTION|Thorp (1976), Introduction]]`,
  volEst: `${V}#^volatility-estimation|Thorp (1976), volatility estimation]]`,
  volBias: `${V}#^estimator-price-bias|Thorp (1976), estimator-induced pricing bias]]`,
  cev: `${V}#MODELS MAY BE CONSISTENT|Thorp (1976), Black–Scholes and CEV consistency]]`,
  cevTest: `${V}#VII. TESTING THE COX-ROSS VOLATILITY MODEL|Thorp (1976), CEV test]]`,
  volGaps: `${V}#VIII. CLOSING REMARKS|Thorp (1976), closing research agenda]]`,
  bsDeriv: `${V}#THE REVISED DERIVATION|Thorp (1976), revised Black–Scholes derivation]]`,
  hedgeRisk: `${V}#APPLICATION|Thorp (1976), discrete hedge risk]]`,
  indexIntro: `${OI}#1. INTRODUCTION|Thorp (1977), option-index design]]`,
  indexParams: `${OI}#2. THE r AND v PARAMETERS|Thorp (1977), model parameters]]`,
  indexVol: `${OI}#3. THE FIRST VOLATILITY INDEX|Thorp (1977), volatility index]]`,
  indexCompare: `${OI}#4. COMPARISON WITH GASTINEAU'S VOLATILITY INDEX|Thorp (1977), index comparison]]`,
  indexRate: `${OI}#5. AN INTEREST RATE INDEX|Thorp (1977), interest-rate index]]`,
  liqStruct: `${L}|Baesel, Shows & Thorp (1983)]], pp. 989–990`,
  liqModel: `${L}|Baesel, Shows & Thorp (1983)]], pp. 990–992`,
  liqExec: `${L}|Baesel, Shows & Thorp (1983)]], p. 992`,
  liqResults: `${L}|Baesel, Shows & Thorp (1983)]], pp. 992–994`,
  granMethod: `${G}#THE METHOD|Baesel, Shows & Thorp (1982), method]]`,
  granData: `${G}#THE DATA|Baesel, Shows & Thorp (1982), data]]`,
  granTest1: `${G}#PREDICTIVE ABILITY - THE FIRST TEST|Baesel, Shows & Thorp (1982), first test]]`,
  granTest2: `${G}#THE SECOND TEST|Baesel, Shows & Thorp (1982), second test]]`,
  granStrategy: `${G}#THE RESULTS OF AN INVESTMENT STRATEGY|Baesel, Shows & Thorp (1982), investment strategy]]`,
  granProblems: `${G}#POWER, PUNCH, AND PROBLEMS|Baesel, Shows & Thorp (1982), limitations]]`,
  granMining: `${G}#APPENDIX A|Baesel, Shows & Thorp (1982), data mining appendix]]`,
  perspective: `${P}|Thorp (2003), quantitative-finance perspective]]`,
};

const src = (...names) => names;
const rel = (prerequisites = [], extensions = [], alternatives = [], conflicts = [], applications = []) => ({
  Prerequisites: prerequisites,
  Extensions: extensions,
  Alternatives: alternatives,
  Conflicts: conflicts,
  Applications: applications,
});

export const concepts = [
  {
    title: "Expected Value Criterion",
    type: "concept", area: "Probability", subfolder: "Probability", tags: ["probability", "decision-criterion"],
    summary: "Choose the action with the largest expected terminal wealth; in repeated favorable bets this can recommend ruinous all-in behavior.",
    purpose: `Expected value collapses a distribution to its probability-weighted mean. In the favorable even-money coin game, maximizing expected wealth at a fixed horizon pushes every stake to the full bankroll because every additional dollar bet has positive expected gain. ${refs.kBin}`,
    math: `For wealth recursion $X_k=X_{k-1}+I_kB_k$, with $I_k\\in\\{-1,1\\}$ and $P(I_k=1)=p$, the article writes $E[X_n]=X_0+\\sum_{k=1}^n(p-q)E[B_k]$. If $p>q$, this is maximized by maximizing each $B_k$. ${refs.kBin}`,
    assumptions: `The comparison uses a known, positive edge; an infinitely wealthy counterparty; repeated independent trials; and a fixed terminal-horizon objective. ${refs.kBin}`,
    limitations: `Betting the entire bankroll makes the probability of ruin $1-p^n$, which converges to one when $p<1$. Expected terminal wealth therefore ignores path survival and compounding. ${refs.kBin}`,
    practical: `Use it to calculate edge, not as a standalone sizing rule. Pair it with [[Expected Log-Growth Criterion]], [[Fractional Kelly Strategy]], and explicit drawdown constraints. This recommendation is an inferred workflow rather than a claim tested in the article.`,
    relationships: rel(["[[Probability-Weighted Outcome]]"], ["[[Expected Utility Maximization]]"], ["[[Expected Log-Growth Criterion]]"], ["[[Timid Betting]]"], ["[[Position Sizing]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market"), sources: [refs.kBin],
  },
  {
    title: "Expected Log-Growth Criterion",
    aliases: ["Kelly criterion", "capital growth criterion", "log utility criterion"],
    type: "criterion", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["kelly", "growth-optimal"],
    summary: "Maximize the expected logarithm of the wealth multiplier to optimize asymptotic compound growth.",
    purpose: `The criterion balances favorable expectation against multiplicative loss: maximize $E[\\log(X_{t+1}/X_t)]$. In fixed-fraction games this is equivalent to maximizing the expected exponential growth-rate coefficient. ${refs.kBin}`,
    math: `For an even-money bet with win probability $p$ and loss probability $q=1-p$, $G(f)=p\\log(1+f)+q\\log(1-f)$ and the unique optimum is $f^*=p-q$. For a general return $R$, solve $\\max_f E[\\log(1+fR)]$ subject to $1+fR>0$ almost surely. ${refs.kBin}; ${refs.kCont}`,
    assumptions: `Capital is treated as divisible; probabilities and payoff distributions are known; repeated opportunities permit compounding; and admissible stakes keep wealth positive. ${refs.kBin}; ${refs.kCont}`,
    limitations: `Full Kelly has low effective risk aversion and can produce severe short- and medium-horizon drawdowns. Parameter error, correlation, leverage, and nonstationarity require adaptation. ${refs.simIntro}; ${refs.simDisc}`,
    practical: `Estimate the return distribution, solve for the log-optimal allocation, then reduce it with [[Fractional Kelly Strategy]] when estimation error or drawdown tolerance matters. ${refs.simDisc}`,
    relationships: rel(["[[Geometric Compounding]]", "[[Concave Utility]]"], ["[[Generalized Kelly Fraction]]", "[[Fractional Kelly Strategy]]"], ["[[Expected Utility Maximization]]"], ["[[Expected Value Criterion]]"], ["[[Capital Allocation]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market", "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.kBin, refs.kCont, refs.simDisc],
  },
  {
    title: "Fixed-Fraction Betting",
    type: "method", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["kelly", "position-sizing"],
    summary: "Stake a constant fraction of current wealth, making exposure automatically scale with the bankroll.",
    purpose: `With $B_i=fX_{i-1}$, wins and losses multiply wealth rather than adding a fixed dollar amount. After $S$ wins and $F$ losses in an even-money game, $X_n=X_0(1+f)^S(1-f)^F$. ${refs.kBin}`,
    math: `The per-trial log-growth converges to $G(f)=p\\log(1+f)+q\\log(1-f)$ under repeated independent trials. The rule links position size directly to current equity. ${refs.kBin}`,
    assumptions: `The basic analysis assumes the same fractional exposure can be placed each period and that wealth is infinitely divisible. ${refs.kBin}`,
    limitations: `Discrete bet sizes can reintroduce ruin, and borrowed exposure can create negative wealth. Proportional sizing alone does not protect against model error or correlated losses. ${refs.kBin}; ${refs.simFrac}`,
    practical: `Translate a strategy signal into an equity fraction, update the dollar position after each wealth change, and impose minimum trade and leverage rules. The last implementation detail is inferred from the proportional rule.`,
    relationships: rel(["[[Geometric Compounding]]"], ["[[Expected Log-Growth Criterion]]", "[[Fractional Kelly Strategy]]"], ["[[Fixed-Dollar Betting]]"], [], ["[[Position Sizing]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market"), sources: [refs.kBin],
  },
  {
    title: "Binomial Kelly Fraction",
    type: "formula", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["kelly", "binomial"],
    summary: "The growth-optimal fraction for a binary wager with net odds $b:1$ is $f^*=(bp-q)/b$.",
    purpose: `It converts a known binary edge and payoff into a proportional stake. For even money, it reduces to $f^*=p-q=2p-1$. ${refs.kBin}`,
    math: `Maximize $G(f)=p\\log(1+bf)+q\\log(1-f)$. Setting $G'(f)=0$ yields $f^*=(bp-q)/b$. A positive stake requires $bp-q>0$. ${refs.kBin}`,
    assumptions: `Outcomes are binary, probabilities and odds are known, trials are repeatable, and the bet fraction is admissible. ${refs.kBin}`,
    limitations: `The formula is highly sensitive to errors in $p$ when the edge is small and does not by itself account for correlated simultaneous wagers. This sensitivity warning is an inference from the formula; the article separately warns about real-world divisibility. ${refs.kBin}`,
    practical: `For $p=0.53$ at even money, $f^*=0.06$; see [[Worked Example - Biased Coin Kelly Bet]]. ${refs.kBin}`,
    relationships: rel(["[[Binomial Gambling Model]]", "[[Expected Log-Growth Criterion]]"], ["[[Generalized Kelly Fraction]]"], [], ["[[Overbetting]]"], ["[[Worked Example - Biased Coin Kelly Bet]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market"), sources: [refs.kBin],
  },
  {
    title: "Generalized Kelly Fraction",
    type: "method", area: "Optimization", subfolder: "Optimization", tags: ["kelly", "continuous-distribution"],
    summary: "For a nonbinary return distribution, choose the exposure that maximizes expected log wealth.",
    purpose: `The continuous formulation permits stock returns or other many-outcome gambles to be analyzed with the same compound-growth objective as binary games. ${refs.kCont}`,
    math: `For return $R\\sim F$, define $G(f)=\\int \\log(1+fr)\\,dF(r)$. An interior optimum satisfies $G'(f)=\\int r/(1+fr)\\,dF(r)=0$, with feasibility $1+fr>0$ on the support. Under the article’s conditions, strict concavity gives a unique maximum. ${refs.kCont}`,
    assumptions: `The lower support bound must be finite for a nontrivial positive solution in the stated formulation; the mean return is positive; and the integral and derivative exist. ${refs.kCont}`,
    limitations: `A fitted continuous distribution may allow unrealistic tails or omit transaction costs, taxes, and extreme events. ${refs.kMarket}; ${refs.kSP}`,
    practical: `Estimate or simulate $F$, solve the first-order condition numerically, stress the lower tail, then consider a fraction of the answer. ${refs.kSP}; ${refs.simDisc}`,
    relationships: rel(["[[Expected Log-Growth Criterion]]", "[[Return Distribution]]"], ["[[Continuous-Time Kelly Allocation]]"], ["[[Mean-Variance Allocation]]"], [], ["[[Numerical Integration]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market"), sources: [refs.kCont, refs.kSP],
  },
  {
    title: "Fractional Kelly Strategy",
    type: "strategy", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["kelly", "risk-control"],
    summary: "Invest a fraction $c\\in(0,1)$ of the full-Kelly allocation to exchange some growth for substantially better downside protection.",
    purpose: `Fractional Kelly creates a tunable growth-versus-security tradeoff. Simulations compare full, three-quarter, half, quarter, and eighth Kelly across repeated betting and asset-return environments. ${refs.simFrac}`,
    math: `If $w_K$ is the growth-optimal risky allocation, use $w=cw_K$ with $0<c<1$. In the tested settings, mean log wealth peaks at $c=1$ while the standard deviation of log wealth rises with $c$. ${refs.simZH}`,
    assumptions: `The full-Kelly solution is meaningful and the fractional portfolio can be implemented proportionally through time. ${refs.simIntro}`,
    limitations: `No fraction eliminates finite-horizon bad sequences. Lower fractions sacrifice long-run growth and do not stochastically dominate full Kelly across all wealth levels. ${refs.simDisc}`,
    practical: `Use smaller $c$ when volatility, correlations, parameter estimates, risk preferences, or the planning horizon are uncertain. ${refs.simDisc}`,
    relationships: rel(["[[Expected Log-Growth Criterion]]"], ["[[Growth-Security Tradeoff]]"], ["[[Risk-Constrained Kelly]]"], ["[[Overbetting]]"], ["[[Position Sizing]]", "[[Drawdown Control]]"]),
    sourceFiles: src("Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.simFrac, refs.simZH, refs.simDisc],
  },
  {
    title: "Overbetting",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["kelly", "ruin", "leverage"],
    summary: "Allocate more than the growth-optimal exposure; expected log growth falls while risk rises.",
    purpose: `Overbetting identifies the dangerous side of the Kelly curve. In the even-money binary model, growth becomes negative beyond the positive root $f_0>f^*$ of $G(f)=0$, so wealth converges toward zero almost surely. ${refs.kBin}`,
    math: `The Kelly optimum satisfies $G'(f^*)=0$. Concavity implies $G$ decreases after $f^*$; the simulations define fractions above one as overbetting and show lower mean log wealth with higher log-wealth dispersion. ${refs.simZH}`,
    assumptions: `The long-run result uses repeated compounding under the modeled return process. ${refs.kBin}`,
    limitations: `A finite sample may reward overbetting, which can disguise the deterioration in long-run growth. Leveraged losses can also push wealth below zero, violating the classical positive-wealth setup. ${refs.simEq}`,
    practical: `Treat $f^*$ as a ceiling before additional constraints, not a target to exceed. Stress leverage and bankruptcy mechanics explicitly. ${refs.simDisc}`,
    relationships: rel(["[[Expected Log-Growth Criterion]]"], ["[[Ruin Boundary]]"], ["[[Fractional Kelly Strategy]]"], [], ["[[Leverage]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market", "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.kBin, refs.simZH, refs.simEq],
  },
  {
    title: "Ruin Boundary",
    type: "theorem", area: "Risk Management", subfolder: "Risk Management", tags: ["kelly", "ruin"],
    summary: "The nonzero fraction where expected log growth crosses zero separates positive asymptotic growth from almost-sure decay.",
    purpose: `It distinguishes merely suboptimal stakes from stakes that turn a favorable game into long-run loss through excessive exposure. ${refs.kBin}`,
    math: `For fixed fraction $f$, find $f_0>f^*$ such that $G(f_0)=0$. The cited theorem states: $G(f)>0$ implies wealth tends to infinity almost surely; $G(f)<0$ implies wealth tends to zero almost surely; $G(f)=0$ yields oscillation between arbitrarily small and large values. ${refs.kBin}`,
    assumptions: `The theorem is stated for the repeated favorable-game framework and the relevant admissible strategy conditions. ${refs.kBin}`,
    limitations: `“Ruin” means convergence toward arbitrarily small wealth under infinitely divisible capital; literal bankruptcy behaves differently with discrete money or borrowing. ${refs.kBin}`,
    practical: `Compute both $f^*$ and $f_0$ when a distribution permits it; the gap quantifies how far overbetting can proceed before modeled log growth turns negative. This use is an inference from the theorem.`,
    relationships: rel(["[[Expected Log-Growth Criterion]]"], ["[[Drawdown Control]]"], [], ["[[Expected Value Criterion]]"], ["[[Leverage]]"]),
    sourceFiles: src("The Kelly Criterion and the Stock Market"), sources: [refs.kBin, refs.kSP],
  },
  {
    title: "Growth-Security Tradeoff",
    type: "concept", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["kelly", "risk-return"],
    summary: "Higher Kelly fractions raise typical growth but also widen terminal-wealth dispersion and worsen adverse paths.",
    purpose: `It makes the cost of pursuing maximal asymptotic growth visible at a finite decision horizon. Across the simulations, mean and maximum terminal wealth rise with the Kelly fraction while minimum wealth falls and standard deviation rises. ${refs.simZH}; ${refs.simU}; ${refs.simEq}`,
    math: `A useful empirical frontier plots $E[\\log W_T]$ against $\\operatorname{sd}(\\log W_T)$ over fractions $c$. The full-Kelly point maximizes the first coordinate; fractions above one can be inefficient because they lower growth and raise dispersion. ${refs.simZH}`,
    assumptions: `Results depend on the specified return generator, horizon, rebalancing rule, and leverage mechanics. ${refs.simIntro}`,
    limitations: `Terminal mean and variance do not fully describe skewed or heavy-tailed wealth. The simulations report skewness, kurtosis, threshold probabilities, and path extremes for that reason. ${refs.simFrac}`,
    practical: `Choose a Kelly fraction using tolerable drawdown or terminal-loss probabilities rather than long-run growth alone. ${refs.simDisc}`,
    relationships: rel(["[[Fractional Kelly Strategy]]", "[[Terminal Wealth Distribution]]"], ["[[Risk-Constrained Kelly]]"], ["[[Mean-Variance Allocation]]"], [], ["[[Monte Carlo Simulation]]"]),
    sourceFiles: src("Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.simZH, refs.simU, refs.simEq, refs.simDisc],
  },
  {
    title: "Terminal Wealth Distribution",
    type: "concept", area: "Probability", subfolder: "Probability", tags: ["simulation", "wealth"],
    summary: "The full distribution of compounded terminal wealth, not just its mean, describes the finite-horizon consequences of a strategy.",
    purpose: `The simulation study compares maxima, means, minima, standard deviations, skewness, excess kurtosis, threshold counts, and extreme paths across Kelly fractions. ${refs.simFrac}`,
    math: `For proportional returns $R_t$ and allocation $f$, $W_T=W_0\\prod_{t=1}^T(1+fR_t)$, so $\\log W_T=\\log W_0+\\sum_t\\log(1+fR_t)$. This explains why log wealth can appear approximately normal while wealth is strongly right-skewed. ${refs.simZH}`,
    assumptions: `Approximate lognormality relies on the return process and breaks in levered cases with negative wealth. ${refs.simEq}`,
    limitations: `Sample maxima and minima are scenario-dependent, and 3,000 paths cannot establish tail probabilities at much smaller levels. The sample-size caution is inferred from simulation methodology.`,
    practical: `Report quantiles, loss probability, drawdown, bankruptcy frequency, and threshold attainment alongside mean wealth. The article explicitly uses threshold counts and path extremes. ${refs.simFrac}`,
    relationships: rel(["[[Geometric Compounding]]"], ["[[Lognormal Wealth Approximation]]"], ["[[Expected Terminal Wealth]]"], [], ["[[Monte Carlo Simulation]]"]),
    sourceFiles: src("Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.simFrac, refs.simZH, refs.simEq],
  },
  {
    title: "First-Order Stochastic Dominance",
    type: "concept", area: "Probability", subfolder: "Probability", tags: ["stochastic-dominance", "distribution"],
    summary: "Distribution A first-order dominates B when it offers at least as much wealth at every cumulative-probability level and more somewhere.",
    purpose: `The Kelly simulations use inverse cumulative distributions to check whether one terminal-wealth distribution dominates another. Intersecting plots show that dominance does not hold among the fractional strategies. ${refs.simZH}`,
    math: `For wealth distributions $F_A$ and $F_B$, A first-order dominates B when $F_A(w)\\le F_B(w)$ for all $w$, with strict inequality somewhere. Crossing CDFs prevent that ordering.`,
    assumptions: `Comparison is made on the same wealth scale and horizon. The definition here normalizes standard notation; the source applies the crossing-CDF criterion. ${refs.simZH}`,
    limitations: `Absence of first-order dominance does not mean the choices are equivalent; preferences or other risk criteria are then needed. This is an inferred decision-theory connection.`,
    practical: `Plot empirical CDFs or inverse CDFs before declaring a higher-growth strategy “better” at all wealth levels. ${refs.simZH}`,
    relationships: rel(["[[Terminal Wealth Distribution]]"], ["[[Expected Utility Maximization]]"], ["[[Mean-Variance Allocation]]"], [], ["[[Fractional Kelly Strategy]]"]),
    sourceFiles: src("Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"), sources: [refs.simZH],
  },
  {
    title: "Concave Utility",
    type: "concept", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["utility", "risk-aversion"],
    summary: "A utility function with diminishing marginal value of wealth; strict concavity makes many allocation optima unique.",
    purpose: `The source studies nondecreasing concave utilities on positive wealth, including nondifferentiable polygonal utilities, because they support broad expected-utility optimization without requiring smoothness. ${refs.utilMain}`,
    math: `Concavity means $U(\\lambda x+(1-\\lambda)y)\\ge\\lambda U(x)+(1-\\lambda)U(y)$ for $0\\le\\lambda\\le1$. Strict inequality for distinct points gives strict concavity. Left and right derivatives of a continuous concave function are nonincreasing. ${refs.utilMain}`,
    assumptions: `The central results require specified monotonicity, domain, and sometimes strict concavity or differentiability conditions. ${refs.utilMain}`,
    limitations: `Utilities that flatten too early can be inequivalent yet induce the same strategies, showing why the theorem needs a strict-increase condition. ${refs.utilMain}`,
    practical: `Use the curvature of utility to encode aversion to dispersion, then solve [[Expected Utility Maximization]].`,
    relationships: rel(["[[Expected Utility]]"], ["[[Utility Equivalence]]", "[[Utility Separation Theorem]]"], ["[[Expected Log-Growth Criterion]]"], [], ["[[Capital Allocation]]"]),
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"), sources: [refs.utilMain],
  },
  {
    title: "Utility Equivalence",
    type: "concept", area: "Optimization", subfolder: "Optimization", tags: ["utility", "equivalence"],
    summary: "Positive affine transformations of a utility function represent the same preferences and produce the same expected-utility optimizers.",
    purpose: `The source defines $U$ and $V$ as equivalent exactly when $V(x)=aU(x)+b$ with $a>0$. Its theorems ask whether identical optimal strategies imply this equivalence. ${refs.utilMain}`,
    math: `Because $E[aU(X)+b]=aE[U(X)]+b$, multiplying by a positive constant and adding a constant preserves the argmax.`,
    assumptions: `The positive multiplier is essential; a negative multiplier would reverse the ordering. The expectation and feasible set must be well-defined. ${refs.utilMain}`,
    limitations: `Equivalence is ordinal for choice but does not make raw utility levels comparable across representatives. This clarification is inferred from the affine invariance.`,
    practical: `Normalize utilities before measuring “distance” between them; the source proposes comparing normalized representatives for bounded utilities. ${refs.utilOpen}`,
    relationships: rel(["[[Concave Utility]]"], ["[[Utility Separation Theorem]]"], [], [], ["[[Expected Utility Maximization]]"]),
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"), sources: [refs.utilMain, refs.utilOpen],
  },
  {
    title: "Utility Separation Theorem",
    type: "theorem", area: "Optimization", subfolder: "Optimization", tags: ["utility", "theorem"],
    summary: "Under stated regularity conditions, inequivalent utilities can be distinguished by an investment setting that gives them different optimal strategies.",
    purpose: `The theorem establishes that materially distinct utility functions are not behaviorally interchangeable across all investment opportunities. ${refs.utilMain}`,
    math: `For differentiable utilities with positive strictly decreasing derivatives, a one-period choice between cash and a two-point risky payoff is enough. If two utilities share all optimal strategies for every such setting, the proof shows their derivatives are proportional and hence $V=aU+b$. ${refs.utilMain}`,
    assumptions: `The basic theorem assumes utilities on positive wealth with positive strictly decreasing derivatives; generalized versions use concavity, nondecrease, and a local strict-increase condition. ${refs.utilMain}`,
    limitations: `One arbitrary investment setting need not separate a pair, and some payoff families are too narrow. With only two non-unit outcome values, inequivalent utilities can share all optimizers over probability changes. ${refs.utilSep}`,
    practical: `Use varied payoff shapes when empirically inferring preferences; identical choices in one narrow experiment do not identify utility. This is an inferred application of the theorem.`,
    relationships: rel(["[[Concave Utility]]", "[[Utility Equivalence]]"], ["[[Separating Investment Family]]"], [], [], ["[[Preference Identification]]"]),
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"), sources: [refs.utilMain, refs.utilSep],
  },
  {
    title: "Separating Investment Family",
    type: "method", area: "Optimization", subfolder: "Optimization", tags: ["utility", "identification"],
    summary: "A collection of payoff environments rich enough to produce different optimizers for inequivalent utilities.",
    purpose: `The source varies payoff values and probabilities separately to determine when a family of random investments identifies utility up to positive affine transformation. ${refs.utilSep}`,
    math: `Optimality is characterized by the derivative of $E[U(1+wR)]$ with respect to allocation $w$. By choosing payoff vectors or probability vectors that make this derivative zero for one utility, the proof compares derivative ratios across utilities. ${refs.utilSep}`,
    assumptions: `The strongest stated results use increasing strictly concave utilities and payoff supports spanning values below and above one. ${refs.utilSep}`,
    limitations: `A support range can only distinguish utilities over the wealth interval it reaches; too few non-unit outcomes may fail to identify them. ${refs.utilSep}`,
    practical: `Design preference experiments with multiple upside and downside magnitudes, not only different probabilities on one binary payoff. This is an inferred experimental-design rule.`,
    relationships: rel(["[[Utility Separation Theorem]]"], ["[[Preference Identification]]"], [], [], ["[[Expected Utility Maximization]]"]),
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"), sources: [refs.utilSep],
  },
  {
    title: "Expected Utility Maximization",
    type: "method", area: "Optimization", subfolder: "Optimization", tags: ["optimization", "utility"],
    summary: "Choose the feasible allocation whose terminal wealth distribution has the highest expected utility.",
    purpose: `In a finite-stage investment process, each allocation strategy induces a terminal wealth distribution; the objective is $\\max_A\\int U(x)\\,dF_A(x)$. ${refs.utilMain}`,
    math: `For one risky two-point payoff and cash, $E[U(Z_1(w))]=pU(1+aw)+qU(1-bw)$. With concave $U$, the objective is concave in $w$; a strict version gives a unique optimizer. ${refs.utilMain}`,
    assumptions: `The feasible strategy set, wealth domain, and expectation must be well-defined, and a maximizing strategy must exist. ${refs.utilMain}`,
    limitations: `Results depend on the chosen utility. The separation theorem shows inequivalent utilities can imply different optimal allocations. ${refs.utilMain}`,
    practical: `Select or estimate a utility, generate the terminal-wealth distribution for each feasible allocation, then optimize and sensitivity-test the choice across nearby utility representatives. ${refs.utilOpen}`,
    relationships: rel(["[[Concave Utility]]", "[[Return Distribution]]"], ["[[Dynamic Portfolio Choice]]"], ["[[Expected Log-Growth Criterion]]"], ["[[Expected Value Criterion]]"], ["[[Capital Allocation]]"]),
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"), sources: [refs.utilMain, refs.utilOpen],
  },
  {
    title: "Geometric Brownian Motion",
    type: "model", area: "Stochastic Processes", subfolder: "Stochastic Processes", tags: ["stochastic-process", "black-scholes"],
    summary: "A positive price process whose log returns are normal with constant drift and variance rate.",
    purpose: `The simple Black–Scholes model assumes stock price follows stationary geometric Brownian motion, making log price changes normal and option values functions of price, time, rate, and volatility. ${refs.volEst}`,
    math: `In normalized notation, $dS_t=\\mu S_tdt+\\sigma S_tdW_t$, so $\\log(S_{t+\\Delta}/S_t)$ is normal with mean proportional to $\\Delta$ and variance $\\sigma^2\\Delta$. The source denotes drift by $m$ and volatility by $v$. ${refs.volEst}`,
    assumptions: `Continuous paths, constant drift and volatility, lognormal finite-horizon prices, and independent normal increments. ${refs.bsTheory}; ${refs.volEst}`,
    limitations: `The corpus explicitly warns that lognormal models understate extreme moves and raises jumps, time-varying volatility, and price-dependent volatility as alternatives. ${refs.volGaps}; ${refs.perspective}`,
    practical: `Use it as the baseline process for [[Black-Scholes Model]] and historical-volatility estimation, then stress violations through [[Jump Risk]] and [[Constant Elasticity of Variance Model]].`,
    relationships: rel(["[[Brownian Motion]]", "[[Normal Distribution]]"], ["[[Black-Scholes Model]]"], ["[[Constant Elasticity of Variance Model]]", "[[Jump-Diffusion Process]]"], ["[[Fat-Tail Risk]]"], ["[[Option Pricing]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model", "Common Stock Volatilities in Option Formulas"), sources: [refs.bsTheory, refs.volEst, refs.volGaps],
  },
  {
    title: "Drift and Volatility",
    type: "concept", area: "Stochastic Processes", subfolder: "Stochastic Processes", tags: ["volatility", "drift"],
    summary: "Drift controls the conditional mean trend of log price; volatility controls the scale of random fluctuations.",
    purpose: `The corpus separates $m$, the drift or trend of log price, from $v$, the volatility. A remarkable feature of the Black–Scholes call formula is that stock drift does not appear, while volatility does. ${refs.volEst}`,
    math: `Over a short interval, the source writes the price increment as a drift term of order $\\Delta t$ plus a random volatility term of order $\\sqrt{\\Delta t}$. It relates mean compound growth $R$ to log drift by $R=m+v^2/2$. ${refs.volEst}`,
    assumptions: `In the baseline model both parameters are constant. ${refs.volEst}`,
    limitations: `Observed volatility can vary through time and with price; neglecting these changes creates model error. ${refs.volGaps}`,
    practical: `Estimate volatility from returns, treat drift estimates cautiously, and distinguish historical, instantaneous, future, and implied volatility. ${refs.indexVol}`,
    relationships: rel(["[[Geometric Brownian Motion]]"], ["[[Historical Volatility Estimator]]", "[[Implied Volatility]]"], [], [], ["[[Black-Scholes Model]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas", "A Public Index for Listed Options"), sources: [refs.volEst, refs.volGaps, refs.indexVol],
  },
  {
    title: "Law of Large Numbers in Dynamic Hedging",
    type: "theorem", area: "Probability", subfolder: "Probability", tags: ["law-of-large-numbers", "hedging"],
    summary: "As hedge adjustments become more frequent, independent small hedging errors average out in the source’s revised derivation.",
    purpose: `Thorp’s corrected derivation keeps the random squared-normal term omitted in an earlier Taylor argument, then shows that cumulative risk tends to zero as a fixed interval is subdivided into increasingly many hedge adjustments. ${refs.bsDeriv}`,
    math: `Each subinterval error contains a term proportional to $(Z_i^2-1)\\Delta t/n$. With independent standard-normal $Z_i$, the sample average of $Z_i^2$ converges to one, leaving the deterministic Black–Scholes PDE term in the limit. ${refs.bsDeriv}`,
    assumptions: `Independent normal shocks, smooth option value, continuous rebalancing limit, and controlled Taylor remainders. ${refs.bsDeriv}`,
    limitations: `At finite adjustment frequency, hedged returns remain risky; transaction costs and discontinuous jumps obstruct the ideal limit. The finite-frequency risk is sourced, while the jump obstruction is connected from the corpus’s global-risk warning. ${refs.hedgeRisk}; ${refs.perspective}`,
    practical: `Model discrete hedge error instead of treating a delta hedge as literally riskless. ${refs.hedgeRisk}`,
    relationships: rel(["[[Independent Increments]]", "[[Delta Hedging]]"], ["[[Black-Scholes PDE]]"], [], ["[[Jump Risk]]"], ["[[Discrete Hedging Error]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.bsDeriv, refs.hedgeRisk],
  },
  {
    title: "Black-Scholes Model",
    type: "model", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["options", "black-scholes"],
    summary: "A no-arbitrage option-pricing model obtained by continuously hedging option exposure with stock and financing.",
    purpose: `The model supplies an observable-input valuation formula and a normative hedge relation. Thorp presents it as a breakthrough and distinguishes its no-arbitrage purpose from descriptive fit or predictive power. ${refs.bsTheory}; ${refs.volIntro}`,
    math: `For a non-dividend European call, normalized notation is $C=S N(d_1)-Ke^{-rT}N(d_2)$, with $d_1=[\\ln(S/K)+(r+\\sigma^2/2)T]/(\\sigma\\sqrt T)$ and $d_2=d_1-\\sigma\\sqrt T$. The PDE is $C_t+\\tfrac12\\sigma^2S^2C_{SS}+rSC_S-rC=0$. Formula notation is normalized from OCR. ${refs.bsTheory}`,
    assumptions: `Constant known short rate; lognormal stock price with constant variance rate; no distributions; European exercise; no transaction costs; fractional borrowing; and usable short-sale proceeds. ${refs.bsTheory}`,
    limitations: `Dividends, American exercise, unavailable short proceeds, transaction costs, uncertain rates, volatility estimation, jumps, and extreme tails require extensions or caution. ${refs.bsWarrant}; ${refs.bsDiv}; ${refs.volIntro}`,
    practical: `Use the formula for valuation, Greeks, implied parameters, hedging, and mispricing screens while keeping its normative and empirical roles distinct. ${refs.volIntro}; ${refs.indexIntro}`,
    relationships: rel(["[[Geometric Brownian Motion]]", "[[No-Arbitrage Principle]]"], ["[[Dividend-Adjusted Call Valuation]]", "[[Warrant Pricing with Restricted Short Proceeds]]"], ["[[Constant Elasticity of Variance Model]]"], [], ["[[Delta-Neutral Option Hedge]]", "[[Implied Volatility]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model", "Common Stock Volatilities in Option Formulas"), sources: [refs.bsTheory, refs.volIntro],
  },
  {
    title: "Normative Descriptive and Predictive Models",
    type: "concept", area: "Optimization", subfolder: "Optimization", tags: ["modeling", "epistemology"],
    summary: "A model may prescribe a decision, fit observed data, or forecast future data; these roles are logically distinct.",
    purpose: `Thorp classifies models as descriptive (fit), predictive (forecast), and prescriptive or normative (achieve an objective). A normative option model can expose profitable deviations even when it does not match observed prices. ${refs.volIntro}`,
    math: `There is no single formula; the distinction concerns the loss function. Descriptive fit minimizes in-sample error, prediction targets out-of-sample error, and a normative model optimizes a decision criterion. The loss-function phrasing is an inferred formalization of the source’s classification.`,
    assumptions: `A model’s evaluation metric must match its intended role. ${refs.volIntro}`,
    limitations: `Good fit does not establish tradability, and trading usefulness does not prove empirical truth. Taxes, costs, and alternative models can explain apparent mispricing. ${refs.volIntro}`,
    practical: `Label every research model with its role and validate it accordingly: fit test, forecast test, or executable decision test. This workflow is inferred from the classification.`,
    relationships: rel(["[[Model Validation]]"], ["[[Quantitative Model Lifecycle]]"], [], [], ["[[Strategy Research]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.volIntro],
  },
  {
    title: "No-Arbitrage Principle",
    type: "assumption", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["no-arbitrage", "pricing"],
    summary: "Two portfolios with the same future payoffs should not sustain different prices once trading and financing are feasible.",
    purpose: `Black–Scholes reasoning makes a continuously hedged option-stock portfolio locally riskless and equates its return to the market riskless rate. ${refs.bsTheory}`,
    math: `Delta hedging removes the first-order stock shock; imposing return $r$ on the hedged equity yields the pricing PDE. ${refs.bsDeriv}`,
    assumptions: `Trading, borrowing, shorting, and rebalancing must be sufficiently feasible for the replicating argument. ${refs.bsTheory}`,
    limitations: `Borrow/lend spreads, retained short proceeds, transaction costs, margin limits, and discrete hedging create bands rather than one frictionless price. ${refs.bsWarrant}; ${refs.volIntro}`,
    practical: `Construct payoff-equivalent packages and compare their all-in costs, not quoted prices alone. ${refs.volIntro}`,
    relationships: rel(["[[Payoff Replication]]"], ["[[Black-Scholes Model]]"], ["[[No-Arbitrage Price Band]]"], [], ["[[Deep-In-the-Money Call Financing Trade]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model", "Common Stock Volatilities in Option Formulas"), sources: [refs.bsTheory, refs.bsDeriv, refs.bsWarrant],
  },
  {
    title: "Delta Hedging",
    type: "method", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["hedging", "delta"],
    summary: "Offset an option’s first-order stock-price sensitivity with the underlying asset.",
    purpose: `The Black–Scholes construction combines a long stock position with a short option position and continuously adjusts the mix to target a locally riskless return. ${refs.bsTheory}`,
    math: `If option value is $C(S,t)$, the first-order change is $dC\\approx C_SdS$. A position long one option and short $\\Delta=C_S$ shares is locally insensitive to $dS$. Thorp’s reciprocal hedge writes one share against $1/C_S$ options. ${refs.bsDeriv}`,
    assumptions: `A smooth option-value function, tradable underlying, and sufficiently frequent adjustment. ${refs.bsDeriv}`,
    limitations: `Gamma creates discrete hedge error; costs, jumps, and model misspecification prevent exact risklessness. ${refs.hedgeRisk}; ${refs.perspective}`,
    practical: `Recompute delta after price and time changes; budget the residual error with [[Discrete Hedging Error]] and [[Transaction Costs]].`,
    relationships: rel(["[[Option Delta]]"], ["[[Delta-Neutral Option Hedge]]", "[[Dynamic Replication]]"], ["[[Static Hedge]]"], [], ["[[Convertible Bond Arbitrage]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model", "Common Stock Volatilities in Option Formulas"), sources: [refs.bsTheory, refs.bsDeriv, refs.hedgeRisk],
  },
  {
    title: "Option Greeks",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["options", "greeks"],
    summary: "Local derivatives of option value with respect to market inputs: delta, gamma, theta, vega, and rho.",
    purpose: `Thorp reports using the power-series sensitivities of the Black–Scholes formula to manage local portfolio risk: delta, gamma/curvature, theta, vega, and rho. ${refs.perspective}`,
    math: `$\\Delta=\\partial V/\\partial S$, $\\Gamma=\\partial^2V/\\partial S^2$, $\\Theta=\\partial V/\\partial t$, vega $=\\partial V/\\partial\\sigma$, and $\\rho=\\partial V/\\partial r$. The corpus derives rate and volatility sensitivities and relates vega to curvature. ${refs.volEst}; ${refs.indexVol}`,
    assumptions: `Local differentiability and small input changes; the computed sensitivities inherit the pricing model’s assumptions. ${refs.bsDeriv}`,
    limitations: `Greeks are local and can fail to represent large discontinuous moves or joint nonlinear shifts. ${refs.perspective}`,
    practical: `Aggregate Greeks across the portfolio for local control, then pair them with scenario shocks for global risk. ${refs.perspective}`,
    relationships: rel(["[[Black-Scholes Model]]"], ["[[Local Risk]]"], ["[[Scenario Stress Testing]]"], ["[[Global Risk]]"], ["[[Delta-Neutral Option Hedge]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market", "Common Stock Volatilities in Option Formulas"), sources: [refs.perspective, refs.volEst, refs.indexVol],
  },
  {
    title: "Discrete Hedging Error",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["hedging", "risk"],
    summary: "Residual return risk created when a dynamic hedge is rebalanced at finite intervals.",
    purpose: `The revised derivation shows that a hedge is risky between adjustments and derives a leading random term for its return around the riskless rate. ${refs.hedgeRisk}`,
    math: `The leading error is proportional to option curvature, variance, squared price, and $(Z^2-1)$. Its variance persists over one interval but diversifies as independent adjustment intervals become finer. ${refs.hedgeRisk}`,
    assumptions: `The derivation uses the geometric-Brownian price model, smooth option value, and independent normal shocks. ${refs.bsDeriv}`,
    limitations: `Actual errors also include costs, jumps, stale prices, and volatility error; these are outside the simple leading-term calculation but are raised elsewhere in the corpus. ${refs.perspective}; ${refs.volGaps}`,
    practical: `Backtest hedge P&L at the intended rebalance interval and treat gamma and volatility as primary drivers. ${refs.hedgeRisk}`,
    relationships: rel(["[[Delta Hedging]]", "[[Option Gamma]]"], ["[[Hedging Error Simulation]]"], [], ["[[Continuous Hedging Assumption]]"], ["[[Risk Budgeting]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.bsDeriv, refs.hedgeRisk],
  },
  {
    title: "Dividend-Adjusted Call Valuation",
    type: "model", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["options", "dividends"],
    summary: "Value an American call around known cash dividends by comparing continuation value with immediate exercise and bounding when early exercise matters.",
    purpose: `Thorp extends the no-dividend model to one known cash dividend, provides the condition under which the no-dividend solution is unchanged, and gives upper and lower bounds otherwise; the method recurses over a finite dividend series. ${refs.bsDiv}`,
    math: `Immediately before ex-dividend time, compare shifted continuation value with intrinsic value $S-K$. Their intersection defines an exercise threshold; no intersection means holding remains optimal. The OCR-corrupted threshold formula should be checked in the linked PDF before exact implementation. ${refs.bsDiv}`,
    assumptions: `Known dividend amount and timing, the otherwise Black–Scholes setting, and American exercise rights. ${refs.bsDiv}`,
    limitations: `The article provides bounds where the dividend changes the solution, not a universal closed form; uncertain dividends add another state variable. ${refs.bsDiv}`,
    practical: `Use backward induction over ex-dividend dates and verify exercise versus continuation at each date. This implementation restates the source’s recursive extension.`,
    relationships: rel(["[[Black-Scholes Model]]", "[[American Option]]"], ["[[Finite-Dividend Backward Induction]]"], ["[[European Call Valuation]]"], [], ["[[Early Exercise Decision]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model"), sources: [refs.bsDiv],
  },
  {
    title: "Warrant Pricing with Restricted Short Proceeds",
    type: "model", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["warrants", "short-selling"],
    summary: "Modify option value when a broker retains short-sale proceeds, changing the financing economics of the hedge.",
    purpose: `The standard short-sale assumption is inappropriate for warrant hedgers when proceeds remain with the broker. Thorp derives distinct prices for short-warrant/long-stock and long-warrant/short-stock hedges. ${refs.bsWarrant}`,
    math: `The solutions rescale the standard call value to reflect that the retained proceeds become available only later. Exact OCR notation is unreliable; consult the source PDF before implementing the exponential factors. ${refs.bsWarrant}`,
    assumptions: `Calls and warrants are treated alike except for the specified short-proceeds restriction; other Black–Scholes assumptions remain. ${refs.bsWarrant}`,
    limitations: `Corporate dilution and other warrant-specific terms can create additional differences, which the source acknowledges. ${refs.bsWarrant}`,
    practical: `Calculate a financing-adjusted no-arbitrage band; hedge only when the market price clears the relevant side after costs. ${refs.bsWarrant}`,
    relationships: rel(["[[Black-Scholes Model]]", "[[Short-Sale Financing]]"], ["[[No-Arbitrage Price Band]]"], ["[[Standard Call Valuation]]"], [], ["[[Warrant Hedge]]"]),
    sourceFiles: src("Extensions of the Black-Scholes Option Model"), sources: [refs.bsWarrant],
  },
  {
    title: "Historical Volatility Estimator",
    type: "method", area: "Probability", subfolder: "Probability", tags: ["volatility", "estimation"],
    summary: "Estimate variance rate from squared log-price increments, with weights and interval-length corrections.",
    purpose: `The source derives an unbiased estimator of constant variance rate under geometric Brownian motion and studies its measurement error. ${refs.volEst}`,
    math: `For log price $Y=\\log S$, normalized equal-spacing notation is $\\hat\\sigma^2=(1/n\\Delta t)\\sum_i(\\Delta Y_i-m\\Delta t)^2$. For unequal intervals, dividing each squared increment by its interval and then averaging gives equal statistical weights. ${refs.volEst}`,
    assumptions: `Independent normal log increments, constant volatility, and either known drift or a sample-mean adjustment. ${refs.volEst}`,
    limitations: `Volatility changes through time; near-term versus remote weighting, regression to the mean, Bayesian estimation, and option-implied information remain research choices. ${refs.volGaps}`,
    practical: `Use three months to one year of data with heavier recent weighting in the public-index procedure, and attach confidence intervals rather than treating the estimate as exact. ${refs.indexParams}`,
    relationships: rel(["[[Log Return]]", "[[Chi-Square Variance Inference]]"], ["[[Recency-Weighted Volatility]]"], ["[[Implied Volatility]]"], [], ["[[Black-Scholes Model]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas", "A Public Index for Listed Options"), sources: [refs.volEst, refs.volGaps, refs.indexParams],
  },
  {
    title: "Chi-Square Variance Inference",
    type: "method", area: "Probability", subfolder: "Probability", tags: ["chi-square", "confidence-interval"],
    summary: "Under normal independent increments, a scaled realized-variance estimator has a chi-square distribution.",
    purpose: `This sampling distribution quantifies measurement uncertainty in estimated stock variance and supports confidence intervals. ${refs.volEst}`,
    math: `With zero drift and $n$ equal independent increments, $n\\hat\\sigma^2/\\sigma^2\\sim\\chi_n^2$. With unknown mean, the centered sample variance uses $n-1$ degrees of freedom. ${refs.volEst}`,
    assumptions: `Normality, independence, constant variance, and the stated treatment of drift. ${refs.volEst}`,
    limitations: `Time-varying volatility, jumps, and serial dependence invalidate the exact chi-square calibration. These violations are connected from the source’s alternate-model research agenda. ${refs.volGaps}`,
    practical: `Report interval estimates for volatility inputs and propagate them into option-value sensitivity or scenario ranges. ${refs.volEst}`,
    relationships: rel(["[[Historical Volatility Estimator]]", "[[Normal Distribution]]"], ["[[Volatility Parameter Uncertainty]]"], [], [], ["[[Option Model Risk]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.volEst, refs.volGaps],
  },
  {
    title: "Estimator-Induced Option Price Bias",
    type: "concept", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["estimation", "option-pricing"],
    summary: "An unbiased variance estimate does not generally produce an unbiased option value after passing through a nonlinear pricing formula.",
    purpose: `Thorp emphasizes that for nonlinear $h$, $E[h(\\hat\\sigma^2)]$ generally differs from $h(\\sigma^2)$. He investigates whether ordinary plug-in Black–Scholes prices are biased, especially for out-of-the-money options. ${refs.volBias}`,
    math: `The issue is Jensen-type nonlinearity: plug-in value $C(\\hat\\sigma^2)$ is random, and its expectation need not equal $C(\\sigma^2)$. The paper proposes averaging model values over variance contributions and suggests numerical integration under the chi-square sampling density. ${refs.volBias}`,
    assumptions: `A specified sampling distribution for the volatility estimator and a fixed pricing model. ${refs.volBias}`,
    limitations: `The article presents the proposed estimator as unfinished work and calls for theoretical or numerical evaluation; it is not a validated correction. ${refs.volBias}`,
    practical: `Monte Carlo the estimator distribution, reprice each draw, and compare the average plug-in price with the price at true variance. This directly implements the proposed test.`,
    relationships: rel(["[[Historical Volatility Estimator]]", "[[Black-Scholes Model]]"], ["[[Parameter-Uncertainty Pricing]]"], ["[[Plug-In Estimation]]"], [], ["[[Worked Example - Volatility Estimation Bias Test]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.volBias],
  },
  {
    title: "Implied Volatility",
    type: "method", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["volatility", "options"],
    summary: "The volatility parameter that makes a chosen option-pricing model equal the observed market price.",
    purpose: `Given a rate and option price, solve the model backward for market volatility. In the public-index article this is interpreted, under strong efficiency and model assumptions, as the market’s estimate of future volatility. ${refs.indexVol}`,
    math: `Solve $C_{model}(S,K,T,r,\\sigma_{imp})=C_{mkt}$. Call value increases with volatility, so for a fixed feasible rate there is at most one implied volatility. ${refs.indexVol}`,
    assumptions: `Observed price is valid, the model is appropriate, the rate is fixed, and the option price lies in the model’s feasible range. ${refs.indexVol}`,
    limitations: `Deep in- or out-of-the-money prices can imply absurd values because of rate error, price discreteness, noise, or misspecification; the index procedure truncates extremes. ${refs.indexVol}`,
    practical: `Use robust root finding, filter stale or infeasible quotes, and compare with [[Historical Volatility Estimator]] only after aligning horizon and model inputs.`,
    relationships: rel(["[[Black-Scholes Model]]", "[[Market Price]]"], ["[[Option-Implied Volatility Index]]"], ["[[Historical Volatility Estimator]]"], [], ["[[Volatility Relative-Value Trade]]"]),
    sourceFiles: src("A Public Index for Listed Options"), sources: [refs.indexVol],
  },
  {
    title: "Option-Implied Volatility Index",
    type: "method", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["volatility-index", "options"],
    summary: "Aggregate option-implied volatility relative to contemporaneous historical-volatility estimates to indicate class-wide rich or cheap pricing.",
    purpose: `Thorp’s first index compares an average market-implied forecast with an average historical estimate, aiming to measure whether listed options as a class appear over- or underpriced. ${refs.indexIntro}; ${refs.indexVol}`,
    math: `For each option, solve for $\\sigma_{imp}$, truncate it to a band around historical $\\hat\\sigma$, weight options on one stock by approximate vega, average within stock and across stocks, then form an implied-to-historical ratio. ${refs.indexVol}`,
    assumptions: `The chosen model and rate are sufficiently valid; historical volatility is a useful comparator; quote errors are controlled; and aggregation is meaningful. ${refs.indexVol}`,
    limitations: `The weights, truncation, and arithmetic averaging are acknowledged as partly arbitrary. The original sample was short and rate adjustment could change conclusions. ${refs.indexVol}`,
    practical: `Rebuild with liquid quotes, transparent filters, vega weights, and forward-looking realized-volatility validation. The validation target extends the article’s lag analysis.`,
    relationships: rel(["[[Implied Volatility]]", "[[Historical Volatility Estimator]]"], ["[[Volatility Risk Premium]]"], ["[[Gastineau Volatility Index]]"], [], ["[[Volatility Relative-Value Trade]]"]),
    sourceFiles: src("A Public Index for Listed Options"), sources: [refs.indexIntro, refs.indexVol, refs.indexCompare],
  },
  {
    title: "Option-Implied Interest Rate Index",
    type: "method", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["interest-rate", "options-index"],
    summary: "Infer the financing rate embedded in deep-in-the-money option prices and aggregate it across contracts.",
    purpose: `Deep-in-the-money rational option prices depend mainly on the interest rate, so the option market can be inverted to estimate an effective rate. ${refs.indexRate}`,
    math: `For each option, solve $C_{model}(r_i)=C_{mkt}$, truncate infeasible or extreme values, and weight by rate sensitivity $\\partial C/\\partial r$. ${refs.indexRate}`,
    assumptions: `The option model is appropriate, prices exceed necessary lower bounds, and other inputs—especially volatility—matter little in the selected region. ${refs.indexRate}`,
    limitations: `Transaction costs, taxes, price dispersion, nonsynchronous stock/option quotes, and market noise complicate the inference. ${refs.indexRate}`,
    practical: `Compare the implied rate with actual funding and lending curves to identify financing-rich or financing-cheap structures. This trading comparison is inferred from the index’s purpose.`,
    relationships: rel(["[[Deep-In-the-Money Call Decomposition]]", "[[Rho]]"], ["[[Funding Basis Trade]]"], ["[[Treasury Bill Rate]]"], [], ["[[Deep-In-the-Money Call Financing Trade]]"]),
    sourceFiles: src("A Public Index for Listed Options"), sources: [refs.indexRate],
  },
  {
    title: "Moneyness-Dependent Model Sensitivity",
    type: "concept", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["moneyness", "model-risk"],
    summary: "Deep-in-the-money, near-strike, and far-out-of-the-money options are dominated by different inputs and error modes.",
    purpose: `The public-index design separates three regions: deep-in-the-money values mainly reflect rates, near-strike values mainly reflect volatility, and far-out-of-the-money values have large relative sensitivity to model specification. ${refs.indexIntro}`,
    math: `Vega is largest near the strike, while the source relates $\\partial C/\\partial\\sigma$ to curvature and remaining time. Deep-in-the-money call value approaches stock conversion value plus financing value. ${refs.indexVol}; ${refs.indexParams}`,
    assumptions: `The qualitative ranking is derived in the Black–Scholes framework and for the stated option classes. ${refs.indexIntro}`,
    limitations: `Dividends, exercise features, liquidity, and alternate stochastic processes can move the boundaries between regions. ${refs.indexIntro}`,
    practical: `Match the diagnostic to moneyness: rate index for deep ITM, volatility comparison near strike, and explicit model-risk label far OTM. ${refs.indexIntro}`,
    relationships: rel(["[[Black-Scholes Model]]"], ["[[Option-Implied Volatility Index]]", "[[Option-Implied Interest Rate Index]]"], [], [], ["[[Option Mispricing Screen]]"]),
    sourceFiles: src("A Public Index for Listed Options"), sources: [refs.indexIntro, refs.indexVol],
  },
];

concepts.push(
  {
    title: "Constant Elasticity of Variance Model",
    aliases: ["CEV model", "Cox-Ross volatility model"],
    type: "model", area: "Stochastic Processes", subfolder: "Stochastic Processes", tags: ["cev", "volatility"],
    summary: "A diffusion whose instantaneous price volatility scales as a power of price rather than proportionally to price.",
    purpose: `The source considers $dS$ volatility proportional to $S^\\alpha$ with $0<\\alpha<1$ as an alternative to Black–Scholes proportional volatility. This makes relative volatility rise when price falls. ${refs.cev}`,
    math: `In normalized notation, $dS_t=\\mu(S_t,t)dt+\\nu S_t^\\alpha dW_t$. Black–Scholes is the special case $\\alpha=1$. The proposed test searches for the exponent that removes a regression slope between normalized squared increments and price. ${refs.cev}; ${refs.cevTest}`,
    assumptions: `A power-law volatility relation with a stock-characteristic constant and, in the testing section, zero trend over small intervals. ${refs.cevTest}`,
    limitations: `The article calls for quantitative verification and treats the exponent as potentially stock- and range-dependent. ${refs.cev}`,
    practical: `Estimate $\\alpha$ cross-sectionally or through time, then compare option fit and tradable errors against the Black–Scholes baseline. ${refs.cevTest}`,
    relationships: rel(["[[Diffusion Process]]", "[[Drift and Volatility]]"], ["[[Leverage Effect]]"], ["[[Geometric Brownian Motion]]"], [], ["[[Option Pricing]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.cev, refs.cevTest],
  },
  {
    title: "Equity as a Call Option on Firm Assets",
    aliases: ["structural equity model", "superstock model"],
    type: "model", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["structural-model", "credit"],
    summary: "In a simplified capital structure, common equity is a European call on total firm assets with debt face value as strike.",
    purpose: `If asset value at debt maturity exceeds promised debt, shareholders redeem debt and keep the residual; otherwise they default and equity is zero. This produces payoff $E_T=\\max(A_T-D,0)$. ${refs.cev}`,
    math: `Under lognormal firm assets and zero-coupon debt, Black–Scholes maps asset value to equity value. The option delta amplifies equity’s relative volatility, offering a mechanism for price-dependent equity volatility. ${refs.cev}`,
    assumptions: `One zero-coupon debt issue, no other liabilities, no dividends, active trading, and lognormal total assets. The article states that this is deliberately oversimplified. ${refs.cev}`,
    limitations: `Real firms have multiple debts, coupons, taxes, covenants, changing leverage, and strategic default. These are natural missing extensions; the source explicitly notes that restrictions can be lifted and mentions multiple debt classes. ${refs.cev}`,
    practical: `Use debt-to-equity changes as a candidate volatility factor and test whether higher leverage predicts higher equity volatility. ${refs.cev}`,
    relationships: rel(["[[Black-Scholes Model]]", "[[Corporate Debt]]"], ["[[Structural Credit Model]]", "[[Leverage Effect]]"], [], [], ["[[Equity Volatility Forecasting]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.cev],
  },
  {
    title: "Leverage Effect on Equity Volatility",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["leverage", "volatility"],
    summary: "Equity’s percentage volatility tends to rise as debt becomes larger relative to equity or as equity price falls.",
    purpose: `The structural option example suggests that common-stock volatility increases with debt-to-equity and that percentage moves can be larger after price declines. ${refs.cev}`,
    math: `If equity is a call $E(A)$ on firm assets, relative sensitivity is $(A/E)(\\partial E/\\partial A)$; leverage makes this exceed one and vary with moneyness. ${refs.cev}`,
    assumptions: `The mechanism relies on the simplified equity-as-option representation and stable asset volatility. ${refs.cev}`,
    limitations: `The article presents empirical tests as desirable rather than completed and warns that long-horizon changes in leverage and prices can offset one another. ${refs.cev}`,
    practical: `Add debt-to-equity and price level to volatility regressions; check whether option “mispricing” is actually unmodeled state-dependent volatility. ${refs.cev}`,
    relationships: rel(["[[Equity as a Call Option on Firm Assets]]"], ["[[Constant Elasticity of Variance Model]]"], [], ["[[Constant Volatility Assumption]]"], ["[[Volatility Forecasting]]"]),
    sourceFiles: src("Common Stock Volatilities in Option Formulas"), sources: [refs.cev],
  },
  {
    title: "Jump Risk",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["jumps", "tail-risk"],
    summary: "Sudden discontinuous price changes that local diffusion hedges and lognormal tail estimates can miss.",
    purpose: `Thorp distinguishes local “normal” fluctuations from global catastrophic jumps and lists jump processes as an alternate option-model direction. ${refs.perspective}; ${refs.volGaps}`,
    math: `The corpus does not specify one jump equation. A generic extension adds a discontinuous term to a diffusion; this notation is an inferred bridge to the cited jump-process research agenda.`,
    assumptions: `Stress analysis assumes shocks can exceed historical experience; the corpus explicitly rejects historical maxima as hard future bounds. ${refs.perspective}`,
    limitations: `Jump sizes and probabilities are difficult to estimate from one market history. ${refs.perspective}`,
    practical: `Use scenario losses, reserves, and position limits because delta-gamma control alone does not cover discontinuities. ${refs.perspective}`,
    relationships: rel(["[[Global Risk]]"], ["[[Jump-Diffusion Process]]"], ["[[Diffusion Risk]]"], ["[[Continuous Hedging Assumption]]"], ["[[Scenario Stress Testing]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market", "Common Stock Volatilities in Option Formulas"), sources: [refs.perspective, refs.volGaps],
  },
  {
    title: "Local Risk",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["risk", "greeks"],
    summary: "Portfolio risk from ordinary small changes in prices, rates, volatility, time, and credit conditions.",
    purpose: `Princeton Newport’s framework separated local diffusion-like movements from global jumps. Local risk was managed using option sensitivities and yield-surface exposures. ${refs.perspective}`,
    math: `A local Taylor approximation is $dV\\approx\\Delta dS+\\tfrac12\\Gamma(dS)^2+\\Theta dt+\\text{vega}\\,d\\sigma+\\rho\\,dr$, augmented with yield and credit factors. The normalized formula synthesizes the source’s listed sensitivities.`,
    assumptions: `Changes are small enough that local derivatives describe P&L. ${refs.perspective}`,
    limitations: `Large or discontinuous shocks invalidate the approximation and require [[Global Risk]] analysis. ${refs.perspective}`,
    practical: `Aggregate factor sensitivities and hedge them near neutral while maintaining separate global scenarios. ${refs.perspective}`,
    relationships: rel(["[[Option Greeks]]"], ["[[Factor Exposure]]"], [], ["[[Global Risk]]"], ["[[Market-Neutral Portfolio]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Global Risk",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["stress-testing", "tail-risk"],
    summary: "Portfolio exposure to large systemic or discontinuous moves that cannot be summarized by local sensitivities.",
    purpose: `The source evaluates specified extreme changes in equity indexes, yield curves, and volatility, including shocks beyond prior historical records. ${refs.perspective}`,
    math: `Global analysis reprices the full portfolio under scenario vector $\\Delta x$ rather than truncating at local Greeks. No probability is required for a pure stress loss.`,
    assumptions: `Scenarios are decision-relevant even when their frequencies are unknown. The source’s examples explicitly include unprecedented events. ${refs.perspective}`,
    limitations: `A scenario set can omit the event that matters; one historical record cannot enumerate all future regimes. ${refs.perspective}`,
    practical: `Ask “what are the factor exposures?” and “what are the risks from extreme events?”, then limit the worst losses to acceptable levels. ${refs.perspective}`,
    relationships: rel(["[[Factor Exposure]]"], ["[[Scenario Stress Testing]]"], ["[[Value at Risk]]"], ["[[Local Risk]]"], ["[[Capital Reserves]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Scenario Stress Testing",
    type: "method", area: "Risk Management", subfolder: "Risk Management", tags: ["stress-testing", "scenario"],
    summary: "Reprice a portfolio under large specified changes in market factors, including combinations outside historical experience.",
    purpose: `Thorp’s portfolio process asked how value would change under index crashes, yield-surface shifts, volatility changes, earthquakes, and other catastrophic events. ${refs.perspective}`,
    math: `For scenario $s$, compute $L_s=V(x_0)-V(x_0+\\Delta x_s)$ using full revaluation when possible. This formal notation is an inferred implementation of the source’s described repricing questions.`,
    assumptions: `Positions and pricing relationships can be revalued under shocked inputs; operational and counterparty effects may need separate overlays. The first is inferred, while record-resilience concerns appear in the source. ${refs.perspective}`,
    limitations: `Results are only as complete as the chosen shocks and dependency assumptions. ${refs.perspective}`,
    practical: `Include equity, rate-curve, credit, volatility, liquidity, and operational scenarios; record the largest capital loss and hedge failure. The broader factor checklist is an inferred extension of the cited examples.`,
    relationships: rel(["[[Global Risk]]", "[[Factor Exposure]]"], ["[[Reverse Stress Test]]"], ["[[Historical Simulation]]"], [], ["[[Portfolio Risk Limit]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Fat-Tail Risk",
    type: "assumption", area: "Risk Management", subfolder: "Risk Management", tags: ["tail-risk", "model-risk"],
    summary: "Extreme market moves occur more often than a convenient lognormal model implies.",
    purpose: `The source explicitly identifies the lognormal model’s underestimation of extreme moves as a fallacy that can contribute to severe losses. ${refs.perspective}`,
    math: `A diagnostic compares empirical tail exceedances $P(|R|>x)$ with those implied by the fitted normal or lognormal baseline. This diagnostic is an inferred operationalization.`,
    assumptions: `Historical samples are informative but not hard bounds; future extremes may exceed observed limits. ${refs.perspective}`,
    limitations: `Tail estimation itself is data-poor and regime-dependent because markets provide only one realized history. ${refs.perspective}`,
    practical: `Use reserves, fractional sizing, and scenario shocks beyond history rather than multiplying Gaussian standard deviations alone. ${refs.perspective}`,
    relationships: rel(["[[Geometric Brownian Motion]]"], ["[[Extreme Event Risk]]"], [], ["[[Normal Tail Approximation]]"], ["[[Scenario Stress Testing]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Factor Exposure",
    type: "concept", area: "Risk Management", subfolder: "Risk Management", tags: ["factors", "portfolio-risk"],
    summary: "Sensitivity of portfolio value or returns to common market drivers.",
    purpose: `Thorp makes factor exposure one of two central investment-risk questions and describes factor-neutral statistical arbitrage plus yield-curve, duration, credit, volatility, and market exposures. ${refs.perspective}`,
    math: `A linear approximation is $r_p=\\alpha+\\beta^\\top f+\\varepsilon$; neutrality targets selected components of $\\beta$ near zero. The equation is an inferred formalization of the source’s factor-neutral description.`,
    assumptions: `The selected factors span material local co-movement and exposures are estimable. ${refs.perspective}`,
    limitations: `Factors and betas change; hidden nonlinear and jump exposures can remain even when estimated betas are zero. This warning is inferred from the local/global distinction.`,
    practical: `Estimate exposures before and after each trade, neutralize unintended components, and stress factor breaks. ${refs.perspective}`,
    relationships: rel(["[[Linear Factor Model]]"], ["[[Factor-Neutral Portfolio]]"], ["[[Principal Component Model]]"], [], ["[[Statistical Arbitrage]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Market-Neutral Portfolio",
    type: "strategy", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["market-neutral", "hedging"],
    summary: "A portfolio constructed to keep broad market sensitivity near zero while retaining security-specific expected returns.",
    purpose: `Princeton Newport managed local risk close to market neutral, and later statistical-arbitrage systems used industry or global factor neutrality. ${refs.perspective}`,
    math: `A basic constraint is $\\beta_{market}^\\top w\\approx0$; richer versions impose $B^\\top w=0$ for multiple factors. The constraint notation is inferred from the source’s descriptions.`,
    assumptions: `Betas or hedge ratios are stable enough to estimate and shorting/financing are feasible. ${refs.perspective}`,
    limitations: `Neutrality to measured local factors does not eliminate global jumps, basis changes, liquidity risk, or model error. ${refs.perspective}`,
    practical: `Separate expected alpha from factor exposures, rebalance neutrality, and maintain global stress limits. ${refs.perspective}`,
    relationships: rel(["[[Factor Exposure]]", "[[Short Selling]]"], ["[[Factor-Neutral Portfolio]]"], ["[[Long-Only Portfolio]]"], [], ["[[Statistical Arbitrage]]", "[[Convertible Bond Arbitrage]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Liquidity Service Cost",
    type: "concept", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["liquidity", "transaction-costs"],
    summary: "The expected price concession paid for immediate execution against a market maker.",
    purpose: `The empirical study distinguishes quoted spread from expected liquidity cost and estimates the latter using 1,894 option transactions. It reports an average cost of 0.54% of option value for the fund’s trades. ${refs.liqResults}`,
    math: `For a public buy, estimated percentage cost is $100(P_{trade}-P_{close})/P_{close}$; for a sale it is $100(P_{close}-P_{trade})/P_{close}$, using closing price as the equilibrium-price proxy. ${refs.liqModel}`,
    assumptions: `Observed random trades and the close are unbiased equilibrium-price proxies on average; average market-maker premiums and discounts balance; intraday drift is small. ${refs.liqModel}`,
    limitations: `The estimate mixes the cost conditional on meeting a dealer with the probability of doing so, applies to one fund and period, and has noisy close-to-trade measurement. ${refs.liqResults}`,
    practical: `Model expected execution cost as participation probability times conditional concession, and estimate it for the actual strategy rather than using the full quoted spread mechanically. ${refs.liqResults}`,
    relationships: rel(["[[Bid-Ask Spread]]", "[[Market Maker]]"], ["[[Expected Transaction Cost]]"], [], ["[[Frictionless Market Assumption]]"], ["[[Strategy Net Alpha]]"]),
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"), sources: [refs.liqModel, refs.liqResults],
  },
  {
    title: "Bid-Ask Spread",
    type: "concept", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["spread", "liquidity"],
    summary: "The difference between immediate dealer ask and bid quotes; it is not automatically the expected cost of every trade.",
    purpose: `Market makers supply always-present prices: the public can sell at the bid or buy at the ask. The equilibrium price represents a patient public-to-public clearing level. ${refs.liqStruct}`,
    math: `A quoted round-trip spread is $A-B$; a one-way concession is often compared with half the spread. Expected cost additionally multiplies by the chance the strategy actually trades with a market maker. ${refs.liqResults}`,
    assumptions: `The simple diagram separates public supply/demand from dealer quotes and treats equilibrium price as a useful latent benchmark. ${refs.liqStruct}`,
    limitations: `Inventory can tilt quotes around equilibrium, and actual executions may occur between public participants. ${refs.liqModel}`,
    practical: `Do not invalidate a strategy using the entire spread unless its execution actually crosses both sides at that frequency. ${refs.liqResults}`,
    relationships: rel(["[[Market Maker]]"], ["[[Liquidity Service Cost]]"], [], [], ["[[Transaction Cost Model]]"]),
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"), sources: [refs.liqStruct, refs.liqModel, refs.liqResults],
  },
  {
    title: "Market Maker",
    type: "concept", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["dealer", "liquidity"],
    summary: "An intermediary that maintains executable buy and sell prices and is compensated through favorable trade prices on average.",
    purpose: `The article models option-market participants as the public and market makers, contrasting AMEX’s specialist structure with CBOE’s competitive crowd. ${refs.liqStruct}`,
    math: `Public purchase price is modeled as equilibrium price plus random markup; public sale price as equilibrium price plus a random discount whose expectation is negative. ${refs.liqModel}`,
    assumptions: `A market maker must earn enough on average to supply immediacy and eventually balance purchases and sales. ${refs.liqModel}`,
    limitations: `Inventory and information alter optimal quotes; a specialist’s book can create informational asymmetry absent from the competitive CBOE design. ${refs.liqStruct}; ${refs.liqModel}`,
    practical: `Track whether executions are dealer-facing or public-to-public because expected cost depends on that mix. ${refs.liqResults}`,
    relationships: rel(["[[Order-Driven Market]]"], ["[[Inventory-Dependent Quote Tilt]]"], ["[[Public Limit Order]]"], [], ["[[Liquidity Service Cost]]"]),
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"), sources: [refs.liqStruct, refs.liqModel],
  },
  {
    title: "Inventory-Dependent Quote Tilt",
    type: "model", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["inventory", "market-making"],
    summary: "A dealer may shift both bid and ask around equilibrium in response to inventory, so markup and markdown need not be symmetric.",
    purpose: `The liquidity article cites optimal-quote work showing that the spread can tilt or shift as a function of dealer inventory, qualifying its own no-tilt assumption. ${refs.liqModel}`,
    math: `No explicit formula is developed in the article; the qualitative model makes quote center a function of inventory. ${refs.liqModel}`,
    assumptions: `Dealer inventory creates risk and therefore affects desired order flow. ${refs.liqModel}`,
    limitations: `The dataset lacks dealer inventory, so the paper cannot estimate tilt and adopts symmetry as a useful approximation. ${refs.liqModel}`,
    practical: `When possible, include dealer inventory proxies or order-flow imbalance in execution-cost models. This is an inferred implementation of the cited limitation.`,
    relationships: rel(["[[Market Maker]]"], ["[[Dealer Inventory Risk]]"], [], ["[[Symmetric Spread Assumption]]"], ["[[Execution Cost Model]]"]),
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"), sources: [refs.liqModel],
  },
  {
    title: "Contingent Limit Order",
    type: "method", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["execution", "options"],
    summary: "An option limit order whose acceptable price is conditional on the contemporaneous underlying-stock price.",
    purpose: `The studied fund screened options for model mispricing and typically entered day orders specifying an option limit conditional on the stock being at a stated price or better. ${refs.liqExec}`,
    math: `An execution rule can be written “buy option if $C\\le L(S)$,” where $L(S)$ is the model-derived limit as a function of stock price. This notation formalizes the described order.`,
    assumptions: `The option model and stock quote update quickly enough for the contingent relation to remain meaningful. ${refs.liqExec}`,
    limitations: `Partial fills, nonsynchronous prices, and market impact can make recorded daily aggregates differ from individual executions. ${refs.liqResults}`,
    practical: `Generate a live stock-contingent option limit from model value minus required edge and estimated costs. This follows the execution procedure described in the source.`,
    relationships: rel(["[[Option Mispricing Screen]]"], ["[[Algorithmic Execution]]"], ["[[Market Order]]"], [], ["[[Transaction Cost Control]]"]),
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"), sources: [refs.liqExec, refs.liqResults],
  },
  {
    title: "Data Mining Bias",
    aliases: ["multiple-testing bias", "lucky survivor problem"],
    type: "concept", area: "Probability", subfolder: "Probability", tags: ["backtesting", "bias"],
    summary: "Selecting a successful forecaster or rule after observing many candidates inflates apparent statistical significance.",
    purpose: `The Granville appendix imagines many random market callers; a few will look nearly perfect by chance, so investing after selecting the luckiest can fail even when the historical record is significant. ${refs.granMining}`,
    math: `The family-wise probability of at least one extreme result rises with the number of candidates. The article does not give a correction formula but solves part of the problem with a prospective subperiod. ${refs.granMining}`,
    assumptions: `Multiple analysts, rules, dates, or specifications were implicitly available for selection. ${refs.granMining}`,
    limitations: `A holdout beginning after monitoring starts reduces ex-post selection but does not remove all discretion in signals, endpoints, or statistics. The residual-discretion warning is inferred.`,
    practical: `Predeclare the rule and test window, preserve a true holdout, and count the research paths that led to the selected signal. ${refs.granData}; ${refs.granMining}`,
    relationships: rel(["[[Hypothesis Testing]]"], ["[[Prospective Validation]]"], ["[[Survivorship Bias]]"], [], ["[[Backtest Validation]]"]),
    sourceFiles: src("Can Joe Granville Time the Market"), sources: [refs.granData, refs.granMining],
  },
  {
    title: "Hypergeometric Market-Timing Test",
    type: "method", area: "Probability", subfolder: "Probability", tags: ["hypergeometric", "market-timing"],
    summary: "Test whether forecasted-up days contain more actual up days than random sampling without replacement would produce.",
    purpose: `The first Granville test conditions on the total counts of up and down DJIA days and treats the called-up subset as a sample from that finite population. ${refs.granTest1}`,
    math: `If the full period has $N$ days with $K$ up days and the forecaster selects $n$ “up” days, then $X\\sim\\operatorname{Hypergeometric}(N,K,n)$ under the null and the one-sided p-value is $P(X\\ge x_{obs})$. ${refs.granTest1}`,
    assumptions: `The selected days are no better than random under the null, zero-change days are excluded, and conditioning on aggregate counts is appropriate. ${refs.granTest1}`,
    limitations: `The test ignores return magnitudes and can overstate independent evidence when forecasts affect the market or selection was data-mined. ${refs.granTest2}; ${refs.granMining}`,
    practical: `Use it as a directional hit-rate test and pair it with a magnitude-sensitive return test. ${refs.granTest2}`,
    relationships: rel(["[[Sampling Without Replacement]]"], ["[[Prospective Validation]]"], ["[[Two-Sample Return Test]]"], [], ["[[Worked Example - Hypergeometric Timing Test]]"]),
    sourceFiles: src("Can Joe Granville Time the Market"), sources: [refs.granTest1, refs.granTest2, refs.granMining],
  },
  {
    title: "Two-Sample Return Test",
    type: "method", area: "Probability", subfolder: "Probability", tags: ["t-test", "market-timing"],
    summary: "Compare mean log returns during buy and sell regimes using a pooled-variance t statistic.",
    purpose: `The second Granville test asks whether the mean daily log return in buy periods exceeds that in sell periods. ${refs.granTest2}`,
    math: `The source assumes independent normal log returns with equal variances and uses the standard pooled two-sample t statistic for $H_0:\\mu_B-\\mu_S\\le0$. ${refs.granTest2}`,
    assumptions: `Normality, independence, equal variances, fixed regime labels, and no causal price impact from the recommendations. ${refs.granTest2}`,
    limitations: `Serial dependence, heteroskedasticity, data mining, and self-induced price moves can invalidate the nominal p-value. Data mining and causal impact are explicit source caveats; the first two are inferred modern diagnostics. ${refs.granTest2}; ${refs.granMining}`,
    practical: `Reproduce the original statistic, then add heteroskedasticity/autocorrelation-robust or permutation checks as inferred robustness extensions.`,
    relationships: rel(["[[Log Return]]", "[[Hypothesis Testing]]"], ["[[Robust Return Test]]"], ["[[Hypergeometric Market-Timing Test]]"], [], ["[[Market Timing Strategy]]"]),
    sourceFiles: src("Can Joe Granville Time the Market"), sources: [refs.granTest2, refs.granMining],
  },
  {
    title: "Prospective Validation",
    type: "method", area: "Optimization", subfolder: "Optimization", tags: ["validation", "backtesting"],
    summary: "Evaluate forecasts after the rule and intention to test are fixed, reducing ex-post selection bias.",
    purpose: `The Granville study separately analyzes the period beginning when the researchers started monitoring forecasts before the fact, specifically to reduce the data-mining problem. ${refs.granData}`,
    math: `Split observations at commitment time $t_0$: earlier data can motivate the hypothesis; only later data supplies the primary validation statistic. This notation formalizes the source’s design.`,
    assumptions: `The signal definition and evaluation protocol remain stable after $t_0$. ${refs.granData}`,
    limitations: `The underlying method was judgmental and difficult to mechanize, so exact procedural replication remained impossible. ${refs.granProblems}`,
    practical: `Timestamp signals, freeze code and thresholds, and record any discretionary override before the outcome is known. The audit-trail details are inferred extensions.`,
    relationships: rel(["[[Data Mining Bias]]"], ["[[Live Shadow Trading]]"], ["[[Backtest]]"], [], ["[[Quantitative Model Lifecycle]]"]),
    sourceFiles: src("Can Joe Granville Time the Market"), sources: [refs.granData, refs.granProblems],
  },
  {
    title: "Signal Aggregation",
    type: "method", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["signals", "ensemble"],
    summary: "Combine many weak or noisy indicators and act only when a large majority aligns.",
    purpose: `Granville described a tree of indicators and sought broad agreement before calling a market turn. The authors propose that uncorrelated noise may diversify while common signal remains. ${refs.granMethod}; ${refs.granProblems}`,
    math: `A simple formalization is a weighted vote $s_t=\\sum_jw_jz_{j,t}$ with a high action threshold. This equation is an inferred representation; the source says the actual process was judgmental, not mechanized. ${refs.granProblems}`,
    assumptions: `At least some indicators have weak predictive content and their errors are not perfectly aligned. ${refs.granProblems}`,
    limitations: `Indicator dependence, discretionary interpretation, and selection after observing performance can defeat noise diversification. The judgment and data-mining issues are explicit. ${refs.granProblems}; ${refs.granMining}`,
    practical: `Measure each signal’s incremental out-of-sample contribution and correlation before combining; treat the mechanical ensemble as a new testable strategy, not a reproduction of Granville. This is an inferred research design.`,
    relationships: rel(["[[Weak Predictive Signal]]"], ["[[Ensemble Strategy]]"], ["[[Single-Indicator Strategy]]"], [], ["[[Market Timing Strategy]]"]),
    sourceFiles: src("Can Joe Granville Time the Market"), sources: [refs.granMethod, refs.granProblems, refs.granMining],
  },
  {
    title: "Short-Term Reversal",
    type: "concept", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["mean-reversion", "equities"],
    summary: "An empirical tendency for recent relative losers to outperform recent relative winners over short horizons.",
    purpose: `Thorp reports discovering short-term price reversal by sorting stocks on recent returns and taking a long position in the most-down decile against a short position in the most-up decile. ${refs.perspective}`,
    math: `A cross-sectional signal is negative recent return rank. The reported early portfolio earned about 20% annualized before commissions and impact with roughly 20% annualized standard deviation. ${refs.perspective}`,
    assumptions: `The ranking contains repeatable information and long/short implementation is feasible. ${refs.perspective}`,
    limitations: `Turnover, commissions, impact, crowding, and regime dependence can consume the gross edge; later realized costs materially reduced gross expectation. ${refs.perspective}`,
    practical: `Neutralize industry and factor exposures, diversify across many names, and validate net of turnover-sensitive costs. ${refs.perspective}`,
    relationships: rel(["[[Cross-Sectional Ranking]]"], ["[[Statistical Arbitrage]]"], ["[[Momentum]]"], [], ["[[Long-Short Equity Strategy]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Pairs Trading",
    type: "strategy", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["pairs-trading", "mean-reversion"],
    summary: "Trade deviations between related securities on the expectation that their historical relationship will reassert itself.",
    purpose: `The source describes finding related stocks with strong statistical and possibly causal relationships, then betting on correction of deviations. ${refs.perspective}`,
    math: `A basic spread is $z_t=P_{1,t}-\\beta P_{2,t}$ or a normalized residual from a fitted relation. This equation is an inferred implementation; the source does not specify its algorithm.`,
    assumptions: `The relationship is economically or statistically persistent and the deviation is temporary. ${refs.perspective}`,
    limitations: `Correlation alone does not guarantee convergence, and structural breaks can make the deviation permanent. This warning is an inferred consequence of the source’s “one history” principle.`,
    practical: `Require a relationship rationale, estimate hedge ratio, set entry/exit rules, and stress a non-converging spread. These are inferred implementation steps.`,
    relationships: rel(["[[Relative-Value Relationship]]"], ["[[Statistical Arbitrage]]"], ["[[Short-Term Reversal]]"], [], ["[[Market-Neutral Portfolio]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Principal Component Model",
    type: "model", area: "Optimization", subfolder: "Optimization", tags: ["pca", "factors"],
    summary: "Represent correlated stock returns with orthogonal empirical components and trade residual behavior.",
    purpose: `Thorp reports launching a simpler principal-components version of statistical arbitrage in 1992, later expanded with additional predictors. ${refs.perspective}`,
    math: `Return matrix $R$ is decomposed into component loadings and scores; residuals after projecting onto retained components become candidate idiosyncratic signals. The linear-algebra description is an inferred standard implementation because the article gives no algorithm.`,
    assumptions: `The estimated covariance structure is stable enough for components to capture common movements. ${refs.perspective}`,
    limitations: `Components are statistical rather than causal and can rotate or break across regimes. This is an inferred model-risk warning.`,
    practical: `Fit components on a rolling window, neutralize component exposures, and test residual reversal net of costs. This is an inferred implementation path tied to the described system.`,
    relationships: rel(["[[Covariance Matrix]]"], ["[[Factor-Neutral Portfolio]]"], ["[[Industry-Neutral Model]]"], [], ["[[Statistical Arbitrage]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Statistical Arbitrage",
    type: "strategy", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["stat-arb", "market-neutral"],
    summary: "A diversified, repeatable long-short program that extracts small empirical return forecasts while controlling common-factor risk.",
    purpose: `The source traces a progression from short-term reversal to industry-neutral, global factor-neutral, principal-component, and multi-predictor versions. ${refs.perspective}`,
    math: `A generic portfolio maximizes predicted return $\\alpha^\\top w$ subject to factor-neutrality, leverage, and risk/cost constraints. This optimization is an inferred synthesis of the described systems.`,
    assumptions: `Small predictive effects persist across many bets and diversification makes aggregate outcomes more reliable. ${refs.perspective}`,
    limitations: `Gross edge is reduced by commissions and impact; competition erodes inefficiency; extreme favorable periods can distort backtests. ${refs.perspective}`,
    practical: `Use broad diversification, short holding periods, cost-aware sizing, factor neutrality, and continual research. ${refs.perspective}`,
    relationships: rel(["[[Short-Term Reversal]]", "[[Factor Exposure]]"], ["[[Multi-Predictor Alpha Model]]"], ["[[Pairs Trading]]"], [], ["[[Market-Neutral Portfolio]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Convertible Bond Decomposition",
    type: "model", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["convertible-bond", "decomposition"],
    summary: "View a convertible as an ordinary bond plus an embedded conversion option or latent warrant.",
    purpose: `Thorp and Kassouf separated the investment value of a comparable straight bond from the value of the conversion privilege, enabling cross-sectional and historical cheapness comparisons. ${refs.perspective}`,
    math: `$V_{convertible}\\approx V_{straight\\ bond}+V_{conversion\\ option}$. The latent warrant’s effective exercise economics depend on expected future investment value. ${refs.perspective}`,
    assumptions: `Straight-bond investment value and option inputs can be estimated; the simplified decomposition initially treats them as separable. ${refs.perspective}`,
    limitations: `Credit quality and investment value change with stock price, so ad hoc and later analytic corrections are needed. ${refs.perspective}`,
    practical: `Estimate the bond floor, value the conversion option, map equity delta, and attach error bounds before constructing a hedge. ${refs.perspective}`,
    relationships: rel(["[[Bond Valuation]]", "[[Embedded Option]]"], ["[[Convertible Bond Arbitrage]]"], ["[[Single-Factor Convertible Model]]"], [], ["[[Relative-Value Screening]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Convertible Bond Arbitrage",
    type: "strategy", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["convertible-arbitrage", "delta-neutral"],
    summary: "Trade an underpriced convertible against a stock hedge sized to offset local equity exposure.",
    purpose: `Convertible hedging was a core profit center at Princeton Newport; scatter diagrams and later analytic models supplied cheapness measures and delta-neutral hedge ratios. ${refs.perspective}`,
    math: `For long convertible value $V_c(S)$, short approximately $\\Delta_c=\\partial V_c/\\partial S$ shares per unit exposure, then rebalance as delta changes. The derivative notation formalizes the source’s hedge-ratio description.`,
    assumptions: `Model value, bond floor, credit relation, volatility, rates, borrow, and execution are sufficiently reliable. ${refs.perspective}`,
    limitations: `Local neutrality does not eliminate credit jumps, volatility shifts, liquidity risk, or model error. These follow from the source’s local/global risk discussion and convertible-model evolution. ${refs.perspective}`,
    practical: `Screen cheapness, estimate delta and error bounds, monitor yield/credit exposures, and stress stock-credit coupling. ${refs.perspective}`,
    relationships: rel(["[[Convertible Bond Decomposition]]", "[[Delta Hedging]]"], ["[[Capital-Structure Arbitrage]]"], ["[[Warrant Hedge]]"], [], ["[[Market-Neutral Portfolio]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  },
  {
    title: "Quantitative Model Lifecycle",
    type: "method", area: "Optimization", subfolder: "Optimization", tags: ["research-process", "modeling"],
    summary: "Move from an exploitable idea through quantitative development to successful real-world implementation.",
    purpose: `Thorp identifies three steps—idea, development, and real-world implementation—and associates them with visionary, quantitative, and entrepreneurial skills. ${refs.perspective}`,
    math: `No single formula governs the lifecycle. Each stage needs a distinct acceptance test: structural plausibility, quantitative evidence, and net live results. The acceptance-test framing is an inferred operationalization.`,
    assumptions: `A market inefficiency can survive long enough to develop and execute. The source observes that inefficiencies often diminished gradually rather than instantly. ${refs.perspective}`,
    limitations: `One market history yields estimates rather than precise conclusions, and competition reduces returns. ${refs.perspective}`,
    practical: `Maintain gates for hypothesis, model, prospective test, execution, scaling, and decay monitoring. This gate structure extends the source’s three stages.`,
    relationships: rel(["[[Normative Descriptive and Predictive Models]]", "[[Prospective Validation]]"], ["[[Strategy Decay Monitoring]]"], [], [], ["[[Strategy Research]]"]),
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"), sources: [refs.perspective],
  }
);

const areaMoc = {
  "Probability": "Probability and Statistics MOC",
  "Stochastic Processes": "Stochastic Processes MOC",
  "Derivatives Pricing": "Derivatives Pricing MOC",
  "Portfolio Theory": "Portfolio Theory MOC",
  "Risk Management": "Risk Management MOC",
  "Market Microstructure": "Market Microstructure MOC",
  "Optimization": "Optimization MOC",
  "Trading Strategies": "Trading Strategies MOC",
};

const boundary = (title, area, reference, summary, math = "", practical = "") => ({
  title,
  type: "boundary-concept",
  area,
  subfolder: area,
  status: "seed",
  tags: ["boundary-concept"],
  summary,
  purpose: `${summary} ${reference}`,
  math: math || `The corpus uses this idea qualitatively or inside another derivation rather than presenting a standalone formula. ${reference}`,
  assumptions: `Its use inherits the assumptions of the linked parent model or empirical procedure. ${reference}`,
  limitations: `The source corpus does not develop this topic fully. This is an explicitly inferred boundary note and should be expanded from a dedicated primary source before independent use.`,
  practical: practical || `Use this note as a traversal point to the source-developed concepts in **Relationships**.`,
  relationships: rel([], [], [], [], areaMoc[area] ? [`[[${areaMoc[area]}]]`] : []),
  inference: `This boundary node was added to make a prerequisite, alternative, implementation dependency, or research frontier explicit; it is not represented as a complete treatment by the source articles.`,
  sourceFiles: [],
  sources: [reference],
});

concepts.push(
  boundary("Probability-Weighted Outcome", "Probability", refs.kBin, "An outcome average formed by multiplying each payoff by its probability and summing."),
  boundary("Timid Betting", "Portfolio Theory", refs.kBin, "A minimum-stake policy that reduces ruin probability but also suppresses expected gain."),
  boundary("Binomial Gambling Model", "Probability", refs.kBin, "A repeated two-outcome wealth process with specified win probability and payoff odds.", "$X_n=X_0\\prod_{t=1}^n(1+fR_t)$ with binary $R_t$."),
  boundary("Geometric Compounding", "Probability", refs.kBin, "Multiplicative accumulation of returns through time.", "$W_T=W_0\\prod_t(1+R_t)$ and $\\log W_T=\\log W_0+\\sum_t\\log(1+R_t)$."),
  boundary("Expected Terminal Wealth", "Probability", refs.simFrac, "The arithmetic mean of wealth at a chosen horizon across possible paths.", "$E[W_T]$ averages terminal levels and can be dominated by a small number of large right-tail outcomes."),
  boundary("Return Distribution", "Probability", refs.kCont, "The probability law assigned to investment returns and used to evaluate allocation choices."),
  boundary("Normal Distribution", "Probability", refs.volEst, "A symmetric continuous distribution used for log increments and sampling calculations in the baseline models."),
  boundary("Log Return", "Probability", refs.kMarket, "The continuously compounded return $\\log(P_t/P_{t-1})$.", "$r_t=\\log(P_t/P_{t-1})$; log returns add across time."),
  boundary("Lognormal Wealth Approximation", "Probability", refs.simZH, "An approximation in which log wealth is normal and wealth is therefore right-skewed and positive."),
  boundary("Sampling Without Replacement", "Probability", refs.granTest1, "Sampling from a finite set without returning observations, producing hypergeometric rather than binomial counts."),
  boundary("Hypothesis Testing", "Probability", refs.granTest1, "Compare a statistic with its null distribution to quantify how surprising the observed result is."),
  boundary("Survivorship Bias", "Probability", refs.granMining, "Bias from observing selected survivors while ignoring failed candidates."),
  boundary("Backtest Validation", "Optimization", refs.granMining, "Procedures that test whether historical strategy evidence survives selection, robustness, and holdout checks."),
  boundary("Independent Increments", "Stochastic Processes", refs.bsDeriv, "Non-overlapping process changes are modeled as statistically independent."),
  boundary("Brownian Motion", "Stochastic Processes", refs.bsTheory, "A continuous process with independent normal increments that underlies the geometric-Brownian stock model."),
  boundary("Diffusion Process", "Stochastic Processes", refs.cev, "A continuous stochastic process driven locally by drift and Brownian shocks."),
  boundary("Diffusion Risk", "Risk Management", refs.perspective, "Risk from ordinary continuous price fluctuations, contrasted with discontinuous jumps."),
  boundary("Jump-Diffusion Process", "Stochastic Processes", refs.volGaps, "A stochastic process combining continuous diffusion with discontinuous jumps."),
  boundary("Constant Volatility Assumption", "Stochastic Processes", refs.volEst, "The baseline claim that variance rate does not change with time or price."),
  boundary("Volatility Forecasting", "Stochastic Processes", refs.volGaps, "Forecasting future variance from prices, option quotes, shrinkage, or time-varying models."),
  boundary("Recency-Weighted Volatility", "Probability", refs.indexParams, "A historical volatility estimate that assigns more weight to recent observations."),
  boundary("Volatility Parameter Uncertainty", "Risk Management", refs.volEst, "Uncertainty in option values and decisions caused by sampling error in estimated volatility."),
  boundary("Option Model Risk", "Risk Management", refs.volIntro, "Risk that an option-pricing model, its process assumptions, or its inputs are wrong enough to distort value or hedge decisions."),
  boundary("Volatility Risk Premium", "Derivatives Pricing", refs.indexVol, "A possible gap between option-implied volatility and expected realized volatility; the source index measures a related ratio but does not establish a modern risk-premium interpretation."),
  boundary("Equity Volatility Forecasting", "Stochastic Processes", refs.cev, "Forecasting equity volatility with price level, leverage, history, and option information."),
  boundary("Leverage Effect", "Stochastic Processes", refs.cev, "The inverse association between equity price and its relative volatility suggested by structural leverage."),
  boundary("Corporate Debt", "Derivatives Pricing", refs.cev, "Contractual claims whose face value becomes the strike in the simplified equity-as-call model."),
  boundary("Structural Credit Model", "Derivatives Pricing", refs.cev, "A model that derives equity and debt values from the stochastic value of firm assets."),
  boundary("Black-Scholes PDE", "Derivatives Pricing", refs.bsTheory, "The partial differential equation satisfied by the frictionless Black–Scholes option value.", "$C_t+\\tfrac12\\sigma^2S^2C_{SS}+rSC_S-rC=0$."),
  boundary("Option Pricing", "Derivatives Pricing", refs.bsTheory, "Valuation of contingent claims from payoff, underlying process, financing, and exercise rules."),
  boundary("Market Price", "Market Microstructure", refs.indexVol, "The observed transaction or quote value used to invert a pricing model or compare with theoretical value."),
  boundary("Payoff Replication", "Derivatives Pricing", refs.bsTheory, "Constructing a traded portfolio whose future payoff matches a derivative payoff."),
  boundary("Dynamic Replication", "Derivatives Pricing", refs.bsTheory, "Replication that continuously or repeatedly changes hedge positions as state variables move."),
  boundary("Static Hedge", "Derivatives Pricing", refs.bsTheory, "A hedge whose positions are not continually rebalanced; included as an alternative boundary to dynamic hedging."),
  boundary("Continuous Hedging Assumption", "Derivatives Pricing", refs.bsDeriv, "The idealization that hedge ratios can be adjusted without delay or discreteness."),
  boundary("Option Delta", "Derivatives Pricing", refs.bsDeriv, "First derivative of option value with respect to underlying price.", "$\\Delta=\\partial V/\\partial S$."),
  boundary("Option Gamma", "Derivatives Pricing", refs.hedgeRisk, "Second derivative of option value with respect to underlying price.", "$\\Gamma=\\partial^2V/\\partial S^2$."),
  boundary("Rho", "Derivatives Pricing", refs.indexRate, "Sensitivity of option value to the interest-rate input.", "$\\rho=\\partial V/\\partial r$."),
  boundary("Delta-Neutral Option Hedge", "Derivatives Pricing", refs.bsTheory, "An option-underlying position whose first-order stock-price exposure is approximately zero."),
  boundary("Hedging Error Simulation", "Risk Management", refs.hedgeRisk, "Scenario or Monte Carlo analysis of P&L left by finite hedge intervals and model error."),
  boundary("No-Arbitrage Price Band", "Derivatives Pricing", refs.bsWarrant, "A range of defensible prices created by asymmetric financing, shorting, and transaction constraints."),
  boundary("Standard Call Valuation", "Derivatives Pricing", refs.bsTheory, "The frictionless non-dividend European call value used as the baseline for extensions."),
  boundary("European Call Valuation", "Derivatives Pricing", refs.bsTheory, "Valuation of a call exercisable only at expiration."),
  boundary("American Option", "Derivatives Pricing", refs.bsDiv, "An option exercisable at any time up to expiration."),
  boundary("Early Exercise Decision", "Derivatives Pricing", refs.bsDiv, "Comparison of immediate exercise value with continuation value."),
  boundary("Finite-Dividend Backward Induction", "Derivatives Pricing", refs.bsDiv, "Recursive valuation backward across a finite series of known dividend dates."),
  boundary("Short-Sale Financing", "Derivatives Pricing", refs.bsWarrant, "Financing consequences of whether short-sale proceeds are usable or retained by a broker."),
  boundary("Warrant Hedge", "Derivatives Pricing", refs.bsWarrant, "A warrant-stock position designed to offset local underlying exposure."),
  boundary("Embedded Option", "Derivatives Pricing", refs.perspective, "An option-like right contained inside another security, such as a convertible bond."),
  boundary("Bond Valuation", "Derivatives Pricing", refs.perspective, "Discounted valuation of promised bond cash flows adjusted for rates and credit."),
  boundary("Single-Factor Convertible Model", "Derivatives Pricing", refs.perspective, "A simplified convertible model whose limitations include stock-dependent credit and bond value."),
  boundary("Deep-In-the-Money Call Decomposition", "Derivatives Pricing", refs.indexParams, "Decomposition of a call into conversion value, deferred-purchase financing value, and put-like insurance value."),
  boundary("Treasury Bill Rate", "Derivatives Pricing", refs.indexParams, "A short-term government yield used as a riskless-rate proxy and converted to the model’s compounding convention."),
  boundary("Plug-In Estimation", "Probability", refs.volBias, "Substitution of an estimated parameter into a nonlinear model as though it were the true value."),
  boundary("Parameter-Uncertainty Pricing", "Derivatives Pricing", refs.volBias, "Valuation that averages or bounds model prices over uncertainty in estimated parameters."),
  boundary("Gastineau Volatility Index", "Derivatives Pricing", refs.indexCompare, "An earlier option-volatility index using selected near-strike contracts and a historical base-period denominator."),
  boundary("Volatility Relative-Value Trade", "Trading Strategies", refs.indexVol, "A trade based on the difference between option-implied and expected future realized volatility, after model and cost checks."),
  boundary("Deep-In-the-Money Call Financing Trade", "Trading Strategies", refs.volIntro, "A stock-call package that exploits financing value when a deep-in-the-money call deviates sufficiently from its normative price."),
  boundary("Funding Basis Trade", "Trading Strategies", refs.indexRate, "A relative-value trade between option-implied financing and the trader’s actual borrowing or lending curve."),
  boundary("Relative-Value Screening", "Trading Strategies", refs.perspective, "Ranking securities by modeled cheapness relative to comparable issues or their own history."),
  boundary("Capital-Structure Arbitrage", "Trading Strategies", refs.perspective, "Relative-value trading across claims on the same issuer, extending the convertible-equity hedge idea."),
  boundary("Frictionless Market Assumption", "Market Microstructure", refs.bsTheory, "The idealization of zero costs and unconstrained trading used in the baseline option derivation."),
  boundary("Transaction Costs", "Market Microstructure", refs.liqResults, "Explicit and implicit costs incurred when implementing a trade."),
  boundary("Expected Transaction Cost", "Market Microstructure", refs.liqResults, "Probability-weighted execution cost across the trades a strategy is likely to complete."),
  boundary("Execution Cost Model", "Market Microstructure", refs.liqResults, "A model of commissions, spread concessions, impact, and fill probabilities."),
  boundary("Transaction Cost Model", "Market Microstructure", refs.liqResults, "A strategy-level forecast of explicit and implicit costs as a function of order and market conditions."),
  boundary("Transaction Cost Control", "Market Microstructure", refs.liqExec, "Order selection and limits designed to keep implementation cost below available edge."),
  boundary("Option Mispricing Screen", "Trading Strategies", refs.liqExec, "A ranking of option market prices against model values after a minimum-edge cutoff."),
  boundary("Algorithmic Execution", "Market Microstructure", refs.liqExec, "Rule-based submission and adjustment of orders using contemporaneous market variables."),
  boundary("Market Order", "Market Microstructure", refs.liqStruct, "An order prioritizing immediate execution and therefore likely to consume displayed liquidity."),
  boundary("Public Limit Order", "Market Microstructure", refs.liqStruct, "A public order that can supply liquidity and trade without a market maker."),
  boundary("Order-Driven Market", "Market Microstructure", refs.liqStruct, "A market where public orders interact directly, contrasted with mandatory dealer intermediation."),
  boundary("Dealer Inventory Risk", "Market Microstructure", refs.liqModel, "Risk that accumulated dealer positions move adversely before being offset."),
  boundary("Symmetric Spread Assumption", "Market Microstructure", refs.liqModel, "The simplifying assumption that average dealer markup and markdown are equal around equilibrium."),
  boundary("Strategy Net Alpha", "Trading Strategies", refs.liqResults, "Expected excess return remaining after financing, execution, and other implementation costs."),
  boundary("Expected Utility", "Optimization", refs.utilMain, "The probability-weighted average utility of terminal wealth."),
  boundary("Capital Allocation", "Portfolio Theory", refs.utilMain, "Assignment of fractions of current wealth across available investments."),
  boundary("Position Sizing", "Portfolio Theory", refs.simDisc, "Mapping a forecast and risk model into a fraction or dollar exposure."),
  boundary("Fixed-Dollar Betting", "Portfolio Theory", refs.kBin, "Staking a constant currency amount rather than a constant fraction of current wealth."),
  boundary("Risk-Constrained Kelly", "Portfolio Theory", refs.simDisc, "A growth-oriented allocation modified by drawdown, leverage, horizon, or estimation constraints."),
  boundary("Drawdown Control", "Risk Management", refs.simDisc, "Rules that limit peak-to-trough wealth loss or the probability of breaching a drawdown threshold."),
  boundary("Leverage", "Risk Management", refs.simEq, "Exposure exceeding current equity through borrowing or short financing."),
  boundary("Capital Reserves", "Risk Management", refs.perspective, "Uncommitted capital held to survive extreme moves and funding demands."),
  boundary("Mean-Variance Allocation", "Portfolio Theory", refs.simZH, "Portfolio choice summarized by expected return or wealth and variance; the source contrasts this view with log-growth behavior."),
  boundary("Dynamic Portfolio Choice", "Optimization", refs.utilMain, "Allocation decisions repeated across multiple stages as wealth and opportunities evolve."),
  boundary("Continuous-Time Kelly Allocation", "Optimization", refs.simEq, "A continuous-time growth-optimal allocation; the source cites the Merton solution for normal returns."),
  boundary("Numerical Integration", "Optimization", refs.kSP, "Approximation of integrals when the expected-log objective has no elementary solution."),
  boundary("Monte Carlo Simulation", "Probability", refs.simIntro, "Repeated random path generation used to approximate terminal-wealth distributions."),
  boundary("Preference Identification", "Optimization", refs.utilSep, "Inference of utility preferences from observed optimal choices across payoff environments."),
  boundary("Model Validation", "Optimization", refs.volIntro, "Evaluation of a model against the role it claims: fit, forecast, or decision performance."),
  boundary("Strategy Research", "Optimization", refs.perspective, "The process of generating, testing, implementing, and updating market-beating models."),
  boundary("Live Shadow Trading", "Optimization", refs.granData, "Prospective recording of signals and hypothetical executions before committing capital."),
  boundary("Backtest", "Optimization", refs.granMining, "Historical simulation of a fully specified strategy on past data."),
  boundary("Covariance Matrix", "Optimization", refs.perspective, "The matrix of pairwise return covariances used by factor and principal-component models."),
  boundary("Linear Factor Model", "Risk Management", refs.perspective, "A representation of returns as common-factor exposures plus residual return."),
  boundary("Factor-Neutral Portfolio", "Portfolio Theory", refs.perspective, "A portfolio constrained to have near-zero exposure to selected common factors."),
  boundary("Industry-Neutral Model", "Optimization", refs.perspective, "A model that balances long and short exposures within industry groups."),
  boundary("Short Selling", "Market Microstructure", refs.perspective, "Selling borrowed securities and later repurchasing them, subject to financing and borrow constraints."),
  boundary("Long-Only Portfolio", "Portfolio Theory", refs.perspective, "A portfolio constrained to nonnegative security holdings."),
  boundary("Risk Budgeting", "Risk Management", refs.perspective, "Allocation of acceptable risk across positions, factors, and scenarios."),
  boundary("Extreme Event Risk", "Risk Management", refs.perspective, "Exposure to rare, severe market or operational events."),
  boundary("Normal Tail Approximation", "Probability", refs.perspective, "Use of normal or lognormal tails to estimate extremes, which the corpus warns can understate large moves."),
  boundary("Value at Risk", "Risk Management", refs.perspective, "A quantile loss measure included as an alternative boundary; the corpus’s preferred global approach emphasizes explicit extreme scenarios."),
  boundary("Reverse Stress Test", "Risk Management", refs.perspective, "Search backward for scenarios that cause a specified unacceptable loss."),
  boundary("Historical Simulation", "Risk Management", refs.perspective, "Risk simulation using past market changes, limited by the source’s warning that future extremes can exceed history."),
  boundary("Portfolio Risk Limit", "Risk Management", refs.perspective, "A maximum acceptable exposure or scenario loss used to constrain positions."),
  boundary("Relative-Value Relationship", "Trading Strategies", refs.perspective, "A statistical or causal linkage between securities that supports a convergence trade."),
  boundary("Cross-Sectional Ranking", "Trading Strategies", refs.perspective, "Ordering securities by a signal such as recent return and forming portfolios from the extremes."),
  boundary("Momentum", "Trading Strategies", refs.perspective, "Continuation of recent relative performance, included as a conceptual alternative to short-term reversal."),
  boundary("Long-Short Equity Strategy", "Trading Strategies", refs.perspective, "A portfolio holding long and short stocks to isolate relative-return forecasts."),
  boundary("Weak Predictive Signal", "Trading Strategies", refs.granProblems, "An indicator with small forecast content that may become useful when combined with partially independent signals."),
  boundary("Ensemble Strategy", "Trading Strategies", refs.granProblems, "A rule combining multiple predictors into one decision."),
  boundary("Single-Indicator Strategy", "Trading Strategies", refs.granMethod, "A strategy driven by one predictor, contrasted with Granville’s multi-indicator judgment."),
  boundary("Market Timing Strategy", "Trading Strategies", refs.granStrategy, "A regime strategy that changes long, short, or cash exposure based on market-direction forecasts."),
  boundary("Robust Return Test", "Probability", refs.granTest2, "A return-difference test designed to remain valid under nonnormality, unequal variance, or serial dependence; an inferred extension to the article’s pooled t test."),
  boundary("Multi-Predictor Alpha Model", "Trading Strategies", refs.perspective, "A return-forecast model that adds multiple predictors as they demonstrate incremental value."),
  boundary("Strategy Decay Monitoring", "Trading Strategies", refs.perspective, "Ongoing measurement of whether competition, costs, or regime change are reducing live edge.")
);

export const examples = [
  {
    title: "Worked Example - Biased Coin Kelly Bet",
    type: "worked-example", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["worked-example", "kelly"],
    sourceFiles: src("The Kelly Criterion and the Stock Market"),
    body: `
## Problem

An even-money wager wins with probability $p=0.53$ and loses with $q=0.47$. Find the full-Kelly fraction and compare it with a clearly excessive fraction. ${refs.kBin}

## Solution

For even money, [[Binomial Kelly Fraction]] gives

$$f^*=p-q=0.53-0.47=0.06.$$

The expected log growth is

$$G(f)=0.53\\log(1+f)+0.47\\log(1-f).$$

At $f=0.06$, the source reports $G(f^*)\\approx0.0016566$ per play. The OCR prints one decimal place ambiguously in one sentence; the formula and original PDF should govern exact transcription. The positive root other than zero is about $f_0=0.11973$, so fractions above roughly 12% make modeled long-run log growth negative. ${refs.kBin}

## Interpretation

- Bet 6% of current wealth for maximum modeled compound growth. ${refs.kBin}
- Betting less than 6% grows more slowly but with smaller swings. ${refs.kBin}
- Betting between 6% and about 12% still has positive modeled log growth but is overbetting. ${refs.kBin}
- Betting beyond about 12% drives wealth toward zero almost surely in the idealized repeated game. ${refs.kBin}

## Implementation sketch

At each trial set **stake = 0.06 × current wealth**; update wealth after the outcome. Run parallel paths at 0.03, 0.06, 0.10, and 0.13 to visualize [[Growth-Security Tradeoff]] and [[Ruin Boundary]]. The simulation comparison is an inferred teaching extension.

## Trace

[[Binomial Gambling Model]] → [[Expected Log-Growth Criterion]] → [[Binomial Kelly Fraction]] → [[Fixed-Fraction Betting]] → this example.
`,
  },
  {
    title: "Worked Example - Fractional Kelly Monte Carlo",
    type: "worked-example", area: "Portfolio Theory", subfolder: "Portfolio Theory", tags: ["worked-example", "simulation"],
    sourceFiles: src("Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"),
    body: `
## Problem

Reproduce the structure of the Ziemba–Hausch experiment: five independent binary wagers, each with expected payoff multiple 1.14, selected with stated probabilities, and compare $1$, $3/4$, $1/2$, $1/4$, and $1/8$ Kelly over 700 decisions and 2,000 paths. ${refs.simFrac}

## Algorithm

1. Encode odds $b\\in\\{1,2,3,4,5\\}$, win probabilities $(0.570,0.380,0.285,0.228,0.190)$, and opportunity-selection weights $(0.1,0.3,0.3,0.2,0.1)$. ${refs.simFrac}
2. Compute full-Kelly fractions $(0.140,0.070,0.047,0.035,0.028)$. ${refs.simFrac}
3. For every path and decision, sample an opportunity, stake $c f^*$ of current wealth, sample win/loss, and update wealth multiplicatively.
4. Report mean, median, minimum, maximum, standard deviation, skewness, excess kurtosis, wealth-threshold counts, and extreme paths. These are the diagnostics used by the source. ${refs.simFrac}

## Expected qualitative result

Higher fractions create far larger right tails and higher average final wealth, but full Kelly still finished below starting wealth in 12.4% of the article’s 700-decision paths; smaller fractions materially improved downside outcomes. ${refs.simFrac}

## Validation

Use a fixed random seed for reproducibility, then repeat across seeds. Compare log-wealth CDFs and do not claim [[First-Order Stochastic Dominance]] when they cross. ${refs.simZH}

## Trace

[[Return Distribution]] → [[Monte Carlo Simulation]] → [[Terminal Wealth Distribution]] → [[Fractional Kelly Strategy]].
`,
  },
  {
    title: "Worked Example - Volatility Confidence Interval",
    type: "worked-example", area: "Probability", subfolder: "Probability", tags: ["worked-example", "volatility"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas"),
    body: `
## Problem

Attach sampling uncertainty to a constant-volatility estimate built from $n$ equally spaced normal log-return increments. ${refs.volEst}

## Method

Under the zero-drift model,

$$\\frac{n\\hat\\sigma^2}{\\sigma^2}\\sim\\chi_n^2.$$

A two-sided $(1-\\alpha)$ interval for variance is therefore

$$
\\left[
\\frac{n\\hat\\sigma^2}{\\chi^2_{1-\\alpha/2,n}},
\\frac{n\\hat\\sigma^2}{\\chi^2_{\\alpha/2,n}}
\\right],
$$

and the volatility interval is obtained by taking square roots. This formula normalizes the article’s chi-square inequalities. ${refs.volEst}

## Interpretation

Daily data provide more degrees of freedom and therefore a tighter interval than weekly data under the model. The source uses this to argue that measured volatility is uncertain even before time variation or model misspecification is considered. ${refs.volEst}

## Implementation idea

Return the point estimate and interval together; reprice options at the lower and upper endpoints to expose [[Volatility Parameter Uncertainty]]. If returns show jumps or volatility clustering, label the chi-square interval “model-conditional.” That label is an inferred safeguard based on ${refs.volGaps}.
`,
  },
  {
    title: "Worked Example - Volatility Estimation Bias Test",
    type: "worked-example", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["worked-example", "option-pricing"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas"),
    body: `
## Question

Does plugging an unbiased variance estimator into Black–Scholes produce an unbiased option value? The source says not in general and proposes evaluating the expectation under the estimator’s chi-square distribution. ${refs.volBias}

## Monte Carlo experiment

1. Fix true $(S,K,T,r,\\sigma)$.
2. Draw $Q_j\\sim\\chi_n^2$ and set $\\hat\\sigma_j^2=\\sigma^2Q_j/n$.
3. Compute $C_j=C_{BS}(S,K,T,r,\\hat\\sigma_j)$.
4. Compare $\\bar C$ with $C_{BS}(S,K,T,r,\\sigma)$.
5. Repeat over moneyness and maturity.

The simulation is a direct numerical version of the source’s suggested theoretical or numerical integration. ${refs.volBias}

## What to inspect

Bias can vary with moneyness; the article expected the most meaningful upward correction in out-of-the-money regions but explicitly treated the proposed estimator as unfinished. ${refs.volBias}

## Research status

Do not encode the article’s tentative direction as a fact. Store the result as a reproducible experiment and link it to [[Research Gap - Estimator-Induced Option Bias]].
`,
  },
  {
    title: "Worked Example - Hypergeometric Timing Test",
    type: "worked-example", area: "Probability", subfolder: "Probability", tags: ["worked-example", "market-timing"],
    sourceFiles: src("Can Joe Granville Time the Market"),
    body: `
## Problem

In the full Granville sample, the source reports $N=719$ non-flat market days, $K=372$ up days, $n=446$ days labeled “up,” and $x=254$ actual up days inside that set. ${refs.granTest1}

## Test

Under no timing ability,

$$X\\sim\\operatorname{Hypergeometric}(N=719,K=372,n=446).$$

Compute the one-sided tail

$$p=P(X\\ge254)=\\sum_{j=254}^{\\min(372,446)}
\\frac{\\binom{372}{j}\\binom{347}{446-j}}{\\binom{719}{446}}.$$

The article reports approximately $0.000231$. ${refs.granTest1}

## Interpretation

Conditioned on the period’s total up/down counts, the called-up set contains unusually many up days. This supports directional association in the sample; it does not by itself prove stable skill, economic profitability, or absence of selection bias. ${refs.granMining}; ${refs.granProblems}

## Next checks

Run the prospective subperiod, pair with [[Two-Sample Return Test]], model costs, and freeze any future signal definition before observing outcomes. ${refs.granData}; ${refs.granTest2}
`,
  },
  {
    title: "Worked Example - Expected Liquidity Cost",
    type: "worked-example", area: "Market Microstructure", subfolder: "Market Microstructure", tags: ["worked-example", "liquidity"],
    sourceFiles: src("The Cost of Liquidity Services in Listed Options - A Note"),
    body: `
## Problem

Reconcile a roughly 2.5% one-way dealer concession with the study’s roughly 0.5% average expected cost. ${refs.liqResults}

## Calculation

Phillips and Smith estimated dealer participation near 20% and a one-way concession near 2.5% of option value. The expected cost across all trades is therefore

$$0.20\\times2.5\\%=0.50\\%,$$

close to the fund’s observed 0.54%. ${refs.liqResults}

## Lesson

[[Bid-Ask Spread]] measures the price of immediate dealer liquidity when used; [[Liquidity Service Cost]] averages that concession over the probability the strategy actually meets a dealer. Applying the full spread to every trade can overstate cost. ${refs.liqResults}

## Strategy use

Estimate **expected cost = dealer-participation probability × conditional concession** separately for buys, sells, puts, calls, venues, and order types. The segmentation is an inferred implementation that respects the article’s strategy-specific warning.
`,
  },
  {
    title: "Worked Example - Global Portfolio Stress Grid",
    type: "worked-example", area: "Risk Management", subfolder: "Risk Management", tags: ["worked-example", "stress-testing"],
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"),
    body: `
## Objective

Translate the source’s global-risk questions into a reproducible portfolio revaluation grid. ${refs.perspective}

## Scenario axes

- Equity index: $-10\\%$, $-25\\%$, $-40\\%$.
- Parallel rate shift: $+200$, $+500$, $+800$ basis points.
- Volatility level: $+25\\%$, $+100\\%$.
- Credit spread: moderate and severe widening.
- Liquidity: double or quadruple expected execution costs.

The first three axes reflect shocks explicitly discussed by Thorp; credit and liquidity overlays are inferred from the convertible and execution material. ${refs.perspective}; ${refs.liqResults}

## Procedure

For every joint scenario, fully revalue positions, recompute hedge ratios, record P&L, funding demand, and inability to trade, and compare the loss with reserves. Do not clip shocks at historical maxima because the source identifies that practice as a fallacy. ${refs.perspective}

## Output

Store the worst scenario, largest factor contributor, failed hedge, and remediation. Link each position back to its pricing model and model-assumption notes.
`,
  },
];

export const strategies = [
  {
    title: "Strategy Blueprint - Kelly-Sized Equity Allocation",
    type: "strategy-blueprint", area: "Trading Strategies", subfolder: "Allocation", tags: ["strategy", "kelly"],
    sourceFiles: src("The Kelly Criterion and the Stock Market", "Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies"),
    body: `
> [!summary]
> Estimate the long-run excess-return distribution, solve the log-growth allocation, then apply a fractional and leverage-constrained implementation.

## Dependency chain

[[Log Return]] → [[Return Distribution]] → [[Generalized Kelly Fraction]] → [[Expected Log-Growth Criterion]] → [[Fractional Kelly Strategy]] → [[Position Sizing]] → [[Drawdown Control]].

## Sourced design

The S&P application fits a bounded quasi-normal approximation to historical annual excess log returns and numerically maximizes expected log growth. It estimated a 117% stock allocation under borrowing at the T-bill rate, while warning that real funding costs, taxes, short-term losses, volatility change, and disasters reduce or qualify that result. ${refs.kSP}

The later simulations show why full Kelly should not be automatic: rates, volatility, correlation, estimation error, risk preferences, and horizon all affect an appropriate fraction. ${refs.simDisc}

## Testable implementation

1. Estimate forward excess returns with explicit uncertainty.
2. Solve $\\max_f E\\log(1+fR)$ under a hard wealth-positivity constraint.
3. Apply $c<1$ and a leverage cap.
4. Simulate pathwise wealth, drawdown, and bankruptcy under parameter and tail stress.
5. Trade only if net expected benefit survives financing and transaction costs.

Steps 1–5 are inferred engineering requirements built from the cited caveats.

## Failure tests

Reject or reduce the strategy when the lower-tail model is unstable, estimated $f^*$ changes sign across plausible inputs, leverage creates negative-wealth paths, or the planning horizon makes the simulated loss probability unacceptable.
`,
  },
  {
    title: "Strategy Blueprint - Liquidity-Aware Option Mispricing",
    type: "strategy-blueprint", area: "Trading Strategies", subfolder: "Options", tags: ["strategy", "options"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas", "The Cost of Liquidity Services in Listed Options - A Note", "A Public Index for Listed Options"),
    body: `
> [!summary]
> Trade option-model deviations only after assigning the contract to the correct sensitivity region and subtracting strategy-specific expected execution cost.

## Dependency chain

[[Black-Scholes Model]] → [[Moneyness-Dependent Model Sensitivity]] → [[Implied Volatility]] / [[Option-Implied Interest Rate Index]] → [[Option Mispricing Screen]] → [[Contingent Limit Order]] → [[Liquidity Service Cost]].

## Sourced design

Near-strike contracts mainly diagnose volatility, deep-in-the-money calls mainly diagnose financing rates, and far-out-of-the-money contracts carry high relative model risk. ${refs.indexIntro}

The studied fund selected options using a Black–Scholes variant, required mispricing beyond a cutoff, and placed stock-contingent day limits. ${refs.liqExec}

Expected liquidity cost can be far below the quoted spread because not every trade uses a market maker, but it varies by strategy and side. ${refs.liqResults}

## Testable implementation

Compute model value and uncertainty band, require **edge > model uncertainty + expected cost + capital charge**, use a contingent limit, and attribute realized P&L among convergence, hedge P&L, volatility, rates, and execution. This rule is an inferred synthesis.

## Conflict checks

- A far-OTM “cheap” price may be model misspecification, not edge.
- An apparent rate mispricing may reflect actual funding, tax, or short-sale constraints.
- A gross edge that does not survive realized execution cost is not a viable strategy.
`,
  },
  {
    title: "Strategy Blueprint - Factor-Neutral Short-Term Reversal",
    type: "strategy-blueprint", area: "Trading Strategies", subfolder: "Statistical Arbitrage", tags: ["strategy", "stat-arb"],
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"),
    body: `
> [!summary]
> Rank recent stock returns, buy relative losers, short relative winners, and neutralize common factors before costs.

## Dependency chain

[[Short-Term Reversal]] → [[Cross-Sectional Ranking]] → [[Factor Exposure]] → [[Principal Component Model]] → [[Market-Neutral Portfolio]] → [[Statistical Arbitrage]] → [[Transaction Cost Model]].

## Sourced design

The first version sorted stocks into recent-return deciles and formed a long-most-down/short-most-up portfolio. Later systems added industry neutrality, global factor neutrality, principal components, and more predictors. ${refs.perspective}

The mature program diversified across roughly 200 longs and 200 shorts, turned over in about ten days, and found that commissions plus impact reduced a large gross expectation materially. ${refs.perspective}

## Testable implementation

Use a lagged return rank, optimize weights under dollar, beta, industry, and principal-component neutrality, forecast turnover cost, and hold out crisis periods as named regime tests rather than deleting them silently. The precise optimizer is inferred; the article notes that the 1987 period was so favorable it was removed from later simulations as an outlier.

## Failure tests

Stop or shrink when net alpha decays, neutralization becomes unstable, borrow or impact costs rise, factor residuals cease reverting, or live results diverge from prospective estimates.
`,
  },
  {
    title: "Strategy Blueprint - Delta-Neutral Convertible Relative Value",
    type: "strategy-blueprint", area: "Trading Strategies", subfolder: "Convertibles", tags: ["strategy", "convertibles"],
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"),
    body: `
> [!summary]
> Decompose a convertible into bond and option value, buy cheap issues, and hedge local equity risk while separately controlling credit and jump exposures.

## Dependency chain

[[Bond Valuation]] + [[Embedded Option]] → [[Convertible Bond Decomposition]] → [[Option Greeks]] → [[Delta Hedging]] → [[Convertible Bond Arbitrage]] → [[Local Risk]] + [[Global Risk]].

## Sourced design

Thorp’s process progressed from standardized price-stock diagrams to analytic valuation using volatility, stock price, rates, stock-dependent investment value, real-time alpha, hedge ratios, and error bounds. ${refs.perspective}

## Testable implementation

Estimate the bond floor under a yield/credit surface; value the conversion option; model credit deterioration as equity falls; require value spread beyond error, borrow, and liquidity cost; short delta shares; and stress joint equity-credit jumps. The pipeline is inferred from the source’s model evolution and risk framework.

## Failure tests

A trade fails the blueprint if cheapness disappears under plausible credit/volatility inputs, stock borrow is unreliable, downside stock-credit dependence produces unacceptable global loss, or model error exceeds the quoted edge.
`,
  },
  {
    title: "Strategy Blueprint - Prospective Market Timing",
    type: "strategy-blueprint", area: "Trading Strategies", subfolder: "Market Timing", tags: ["strategy", "market-timing"],
    sourceFiles: src("Can Joe Granville Time the Market"),
    body: `
> [!summary]
> Convert a directional indicator ensemble into an auditable, prospectively tested regime strategy before applying leverage or options.

## Dependency chain

[[Signal Aggregation]] → [[Data Mining Bias]] → [[Prospective Validation]] → [[Hypergeometric Market-Timing Test]] + [[Two-Sample Return Test]] → [[Market Timing Strategy]] → [[Liquidity Service Cost]].

## Sourced design

Granville used many technical and volume indicators, waited for broad agreement, and issued unambiguous long or short calls during the study period. ${refs.granMethod}; ${refs.granData}

Both original directional and return-magnitude tests were significant in the full and prospectively monitored subperiod, but the authors would not claim that an ex-post test proved persistent ability. The method was highly judgmental and could not be mechanically reproduced. ${refs.granTest1}; ${refs.granTest2}; ${refs.granProblems}

## Testable implementation

Define every indicator and vote rule in code, timestamp signals, use an untouched forward period, compare direction and return magnitude, account for causal market impact and costs, and size without assuming the historical 1978–1981 return repeats. These are inferred safeguards built from the study’s caveats.
`,
  },
];

export const researchGaps = [
  {
    title: "Research Gap - Estimator-Induced Option Bias",
    type: "research-gap", area: "Derivatives Pricing", subfolder: "Derivatives Pricing", tags: ["research-gap", "estimation"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas"),
    body: `
## Open question

Is the proposed averaging estimator unbiased for Black–Scholes option value, and how large is ordinary plug-in bias across volatility, maturity, moneyness, and sample size? The article explicitly says the author had not finished the problem. ${refs.volBias}

## Minimal research program

- Derive $E[C(\\hat\\sigma^2)]$ under the chi-square law where possible.
- Validate by [[Worked Example - Volatility Estimation Bias Test]].
- Compare correction size with bid-ask and [[Liquidity Service Cost]].
- Repeat under time-varying volatility and jumps as out-of-model robustness tests.

The final two extensions are inferred from the corpus’s transaction-cost and alternate-process cautions.
`,
  },
  {
    title: "Research Gap - Time-Varying Volatility",
    type: "research-gap", area: "Stochastic Processes", subfolder: "Stochastic Processes", tags: ["research-gap", "volatility"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas", "A Public Index for Listed Options"),
    body: `
## Open questions

The volatility paper lists optimal recency weighting, regression toward the mean, Bayesian estimates, option-implied forecasts, random-walk volatility, and volume time as unfinished directions. ${refs.volGaps}

The public-index sample suggested implied volatility may have lagged historical volatility by roughly 12–20 weeks, but the series was too short and rate adjustment could change the result. ${refs.indexVol}

## Research design

Compare rolling, exponentially weighted, mean-reverting, Bayesian, implied, and volume-time forecasts on a fixed forward realized-volatility target. Evaluate forecast error and net option-strategy value separately, preserving the distinction in [[Normative Descriptive and Predictive Models]].
`,
  },
  {
    title: "Research Gap - CEV Exponent and Leverage",
    type: "research-gap", area: "Stochastic Processes", subfolder: "Stochastic Processes", tags: ["research-gap", "cev"],
    sourceFiles: src("Common Stock Volatilities in Option Formulas"),
    body: `
## Open questions

Does equity volatility scale as $S^\\alpha$ with $0<\\alpha<1$, how stable is $\\alpha$, and does debt-to-equity explain cross-sectional or time-series variation? The article proposes tests and calls quantitative verification desirable. ${refs.cev}; ${refs.cevTest}

## Research design

Estimate $\\alpha$ by the paper’s normalized-increment regression and by likelihood methods; stratify by leverage; compare option pricing and hedge errors with the geometric-Brownian baseline; and use forward periods to avoid selecting the best exponent in sample.
`,
  },
  {
    title: "Research Gap - Utility Robustness",
    type: "research-gap", area: "Optimization", subfolder: "Optimization", tags: ["research-gap", "utility"],
    sourceFiles: src("Concave Utilities are Distinguished by their Optimal Strategies"),
    body: `
## Open questions

The article asks whether wider classes of continuous strictly increasing utilities are distinguished by their optimal strategies and how “closeness” of utility classes should translate into closeness of choices and consequences. ${refs.utilOpen}

It shows that nearby utilities can produce very different optimal allocations while still producing nearly optimal consequences for one another. ${refs.utilOpen}

## Research design

Define a normalized utility neighborhood, optimize every member over the same opportunity set, compare allocation dispersion and utility regret, and distinguish unstable actions from stable consequences.
`,
  },
  {
    title: "Research Gap - Market-Timing Replication",
    type: "research-gap", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["research-gap", "market-timing"],
    sourceFiles: src("Can Joe Granville Time the Market"),
    body: `
## Open questions

The historical study found significant results but did not establish persistent predictive ability. Granville’s judgmental interpretation made the technique nonmechanical, and the record was short. ${refs.granProblems}

## Research design

Digitize the stated indicators, predefine aggregation, use rolling prospective evaluation, correct for all attempted variants, measure self-impact, and compare unlevered, short-enabled, high-beta, and option implementations net of costs. Strategy variants are motivated by the source’s economic-results section. ${refs.granStrategy}
`,
  },
  {
    title: "Research Gap - Strategy Decay and Capacity",
    type: "research-gap", area: "Trading Strategies", subfolder: "Trading Strategies", tags: ["research-gap", "capacity"],
    sourceFiles: src("A Perspective on Quantitative Finance Models for Beating the Market"),
    body: `
## Open questions

How quickly do discovered inefficiencies decay, how much capital can they absorb, and when do commissions and market impact eliminate the net edge? Thorp observes gradual decay, strong competition, and a large reduction from gross to net statistical-arbitrage returns. ${refs.perspective}

## Research design

Track live alpha by signal vintage, estimate impact as a function of participation and turnover, run capacity curves, and define retirement thresholds before deterioration becomes economically material.
`,
  },
  {
    title: "Research Gap - OCR Formula Verification",
    type: "research-gap", area: "Sources", subfolder: "Source Quality", tags: ["research-gap", "source-quality"],
    sourceFiles: src("Extensions of the Black-Scholes Option Model", "Common Stock Volatilities in Option Formulas", "A Public Index for Listed Options"),
    body: `
## Problem

Several source Markdown files come from scans or embedded PDF text with corrupted equations, symbols, headings, and page furniture. Exact warrant, dividend-threshold, volatility-estimator, and index formulas are therefore unsafe to transcribe solely from OCR.

## Policy

This vault normalizes only formulas whose mathematical identity is clear and labels uncertain formulas. Before code or publication, compare the note with the linked original PDF and record the verified notation.

## Priority queue

1. Warrant price rescaling in ${refs.bsWarrant}.
2. Dividend early-exercise threshold in ${refs.bsDiv}.
3. Proposed unbiased option-value estimator in ${refs.volBias}.
4. Public volatility and interest-rate index formulas in ${refs.indexVol}; ${refs.indexRate}.
`,
  },
];

export const mocs = [
  {
    title: "Probability and Statistics MOC",
    type: "moc", area: "Probability", tags: ["moc", "probability"],
    body: `
## Start here

This map connects distributional foundations to estimation, hypothesis tests, simulation, and validation.

### Compounding and distributions

- [[Expected Value Criterion]] contrasts with [[Expected Log-Growth Criterion]].
- [[Geometric Compounding]] creates [[Terminal Wealth Distribution]].
- [[First-Order Stochastic Dominance]] compares entire terminal distributions.
- [[Log Return]], [[Normal Distribution]], and [[Lognormal Wealth Approximation]] support the baseline models.

### Sampling and estimation

- [[Historical Volatility Estimator]] → [[Chi-Square Variance Inference]] → [[Volatility Parameter Uncertainty]].
- [[Estimator-Induced Option Price Bias]] shows why a nonlinear transform of an unbiased estimate need not remain unbiased.
- [[Monte Carlo Simulation]] supports finite-horizon strategy comparison.

### Hypothesis testing

- [[Sampling Without Replacement]] → [[Hypergeometric Market-Timing Test]].
- [[Two-Sample Return Test]] tests regime return differences.
- [[Data Mining Bias]] → [[Prospective Validation]] prevents a lucky survivor from becoming a false discovery.

### Worked examples

- [[Worked Example - Biased Coin Kelly Bet]]
- [[Worked Example - Fractional Kelly Monte Carlo]]
- [[Worked Example - Volatility Confidence Interval]]
- [[Worked Example - Hypergeometric Timing Test]]

> [!inference] Traversal
> For any claimed signal, follow: distribution → estimator → sampling uncertainty → null test → prospective validation → costs.
`,
  },
  {
    title: "Stochastic Processes MOC",
    type: "moc", area: "Stochastic Processes", tags: ["moc", "stochastic-processes"],
    body: `
## Baseline process

[[Brownian Motion]] → [[Geometric Brownian Motion]] → [[Drift and Volatility]] → [[Black-Scholes Model]].

## Departures from the baseline

- [[Constant Elasticity of Variance Model]] makes absolute volatility scale as $S^\\alpha$.
- [[Equity as a Call Option on Firm Assets]] provides a structural route to the [[Leverage Effect on Equity Volatility]].
- [[Jump Risk]] separates discontinuities from diffusion.
- [[Fat-Tail Risk]] conflicts with thin lognormal tails.
- [[Research Gap - Time-Varying Volatility]] collects random-walk volatility, recency weighting, and volume-time questions.

## Estimation and testing

[[Historical Volatility Estimator]] → [[Chi-Square Variance Inference]]; compare with [[Implied Volatility]]. Test price dependence through [[Research Gap - CEV Exponent and Leverage]].

> [!inference] Model ladder
> Begin with GBM as a falsifiable baseline, then add only the state dependence, jumps, or time variation that produces measurable forward improvement.
`,
  },
  {
    title: "Derivatives Pricing MOC",
    type: "moc", area: "Derivatives Pricing", tags: ["moc", "derivatives"],
    body: `
## Core valuation spine

[[No-Arbitrage Principle]] → [[Delta Hedging]] → [[Law of Large Numbers in Dynamic Hedging]] → [[Black-Scholes Model]].

## Inputs and sensitivities

- [[Historical Volatility Estimator]] versus [[Implied Volatility]].
- [[Option Greeks]] and [[Discrete Hedging Error]].
- [[Moneyness-Dependent Model Sensitivity]] identifies whether rate, volatility, or model risk dominates.
- [[Estimator-Induced Option Price Bias]] captures parameter-transformation bias.

## Extensions

- [[Dividend-Adjusted Call Valuation]]
- [[Warrant Pricing with Restricted Short Proceeds]]
- [[Constant Elasticity of Variance Model]]
- [[Equity as a Call Option on Firm Assets]]
- [[Convertible Bond Decomposition]]

## Market-level diagnostics

- [[Option-Implied Volatility Index]]
- [[Option-Implied Interest Rate Index]]

## Strategy paths

- [[Strategy Blueprint - Liquidity-Aware Option Mispricing]]
- [[Strategy Blueprint - Delta-Neutral Convertible Relative Value]]
- [[Deep-In-the-Money Call Financing Trade]]

## Verification queue

[[Research Gap - Estimator-Induced Option Bias]] and [[Research Gap - OCR Formula Verification]].
`,
  },
  {
    title: "Portfolio Theory MOC",
    type: "moc", area: "Portfolio Theory", tags: ["moc", "portfolio-theory"],
    body: `
## Capital-growth branch

[[Expected Value Criterion]] conflicts with [[Expected Log-Growth Criterion]] in repeated favorable games.

[[Fixed-Fraction Betting]] → [[Binomial Kelly Fraction]] / [[Generalized Kelly Fraction]] → [[Fractional Kelly Strategy]] → [[Growth-Security Tradeoff]] → [[Ruin Boundary]].

## Preference branch

[[Concave Utility]] → [[Expected Utility Maximization]] → [[Utility Equivalence]] → [[Utility Separation Theorem]] → [[Separating Investment Family]].

[[Expected Log-Growth Criterion]] is the log-utility member of this branch; it is not a preference-free command.

## Distribution branch

[[Geometric Compounding]] → [[Terminal Wealth Distribution]] → [[First-Order Stochastic Dominance]].

## Portfolio construction

- [[Market-Neutral Portfolio]]
- [[Factor Exposure]]
- [[Leverage]]
- [[Capital Reserves]]

## Strategy application

[[Strategy Blueprint - Kelly-Sized Equity Allocation]] and [[Worked Example - Fractional Kelly Monte Carlo]].
`,
  },
  {
    title: "Risk Management MOC",
    type: "moc", area: "Risk Management", tags: ["moc", "risk-management"],
    body: `
## Two-layer architecture

[[Local Risk]] uses [[Option Greeks]], factor exposures, and yield/credit sensitivities.

[[Global Risk]] uses [[Scenario Stress Testing]], [[Jump Risk]], [[Fat-Tail Risk]], and capital limits.

## Sizing and survival

- [[Fractional Kelly Strategy]]
- [[Overbetting]]
- [[Ruin Boundary]]
- [[Growth-Security Tradeoff]]
- [[Leverage]]
- [[Capital Reserves]]

## Model and parameter risk

- [[Moneyness-Dependent Model Sensitivity]]
- [[Volatility Parameter Uncertainty]]
- [[Estimator-Induced Option Price Bias]]
- [[Research Gap - OCR Formula Verification]]

## Frictions

[[Bid-Ask Spread]] → [[Liquidity Service Cost]] → net [[Strategy Net Alpha]].

## Worked example

[[Worked Example - Global Portfolio Stress Grid]].

> [!inference] Control loop
> Measure local exposures continuously, run global shocks periodically and after structural change, then feed both into position sizing and reserves.
`,
  },
  {
    title: "Market Microstructure MOC",
    type: "moc", area: "Market Microstructure", tags: ["moc", "market-microstructure"],
    body: `
## Liquidity provision

[[Market Maker]] supplies immediate bid and ask quotes. [[Inventory-Dependent Quote Tilt]] explains why quotes need not be symmetric around equilibrium.

## Cost measurement

[[Bid-Ask Spread]] is a quoted conditional concession; [[Liquidity Service Cost]] is the strategy’s average expected concession after dealer-participation probability.

## Execution

[[Option Mispricing Screen]] → [[Contingent Limit Order]] → [[Transaction Cost Model]].

## Strategy implications

- [[Strategy Blueprint - Liquidity-Aware Option Mispricing]]
- [[Worked Example - Expected Liquidity Cost]]
- [[Statistical Arbitrage]] must model turnover and impact.

## Unresolved

Dealer inventory was unobserved in the source study; current-market replication should estimate side-, venue-, order-, and regime-specific costs rather than transport the 1978–1979 average.
`,
  },
  {
    title: "Optimization MOC",
    type: "moc", area: "Optimization", tags: ["moc", "optimization"],
    body: `
## Objectives

- [[Expected Value Criterion]]
- [[Expected Log-Growth Criterion]]
- [[Expected Utility Maximization]]

Different objectives can choose different strategies; [[Utility Separation Theorem]] makes that dependence explicit.

## Solution methods

- Analytic first-order conditions: [[Binomial Kelly Fraction]].
- Numerical integration/root finding: [[Generalized Kelly Fraction]].
- Scenario optimization: [[Monte Carlo Simulation]].
- Constrained portfolio optimization: [[Market-Neutral Portfolio]] and [[Factor Exposure]].
- Dimensional reduction: [[Principal Component Model]].

## Model governance

[[Normative Descriptive and Predictive Models]] → [[Quantitative Model Lifecycle]] → [[Prospective Validation]].

## Robustness

[[Fractional Kelly Strategy]], [[Research Gap - Utility Robustness]], and parameter stress prevent a precise optimizer from masquerading as a robust decision.
`,
  },
  {
    title: "Trading Strategies MOC",
    type: "moc", area: "Trading Strategies", tags: ["moc", "trading-strategies"],
    body: `
## Strategy families

### Capital allocation

- [[Strategy Blueprint - Kelly-Sized Equity Allocation]]
- [[Fractional Kelly Strategy]]

### Relative value and hedging

- [[Strategy Blueprint - Liquidity-Aware Option Mispricing]]
- [[Strategy Blueprint - Delta-Neutral Convertible Relative Value]]
- [[Convertible Bond Arbitrage]]
- [[Deep-In-the-Money Call Financing Trade]]

### Statistical prediction

- [[Short-Term Reversal]]
- [[Pairs Trading]]
- [[Statistical Arbitrage]]
- [[Strategy Blueprint - Factor-Neutral Short-Term Reversal]]

### Directional timing

- [[Signal Aggregation]]
- [[Strategy Blueprint - Prospective Market Timing]]

## Common validation path

[[Quantitative Model Lifecycle]] → [[Data Mining Bias]] → [[Prospective Validation]] → [[Liquidity Service Cost]] → [[Global Risk]] → [[Strategy Decay Monitoring]].

> [!inference] Composition rule
> Combine signals only after checking that their assumptions, factor exposures, holding periods, liquidity demands, and tail losses are compatible. A shared expected return is not enough.
`,
  },
  {
    title: "Sources and Provenance MOC",
    type: "moc", area: "Sources", tags: ["moc", "sources"],
    body: `
## Primary corpus

- [[The Kelly Criterion and the Stock Market]]
- [[Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies]]
- [[Concave Utilities are Distinguished by their Optimal Strategies]]
- [[Extensions of the Black-Scholes Option Model]]
- [[Common Stock Volatilities in Option Formulas]]
- [[A Public Index for Listed Options]]
- [[The Cost of Liquidity Services in Listed Options - A Note]]
- [[Can Joe Granville Time the Market]]
- [[A Perspective on Quantitative Finance Models for Beating the Market]]

## Provenance rules

Read [[Claim Provenance Standard]] before extending the vault. Every source-grounded paragraph ends with a source link; synthesized relationships are placed in an **inference** callout or explicitly labeled inferred. OCR-uncertain formulas link to [[Research Gap - OCR Formula Verification]].

## Coverage

[[Source Coverage Matrix]] maps every article to extracted concepts, methods, models, strategies, examples, and gaps.
`,
  },
  {
    title: "Research Gaps MOC",
    type: "moc", area: "Sources", tags: ["moc", "research-gaps"],
    body: `
- [[Research Gap - Estimator-Induced Option Bias]]
- [[Research Gap - Time-Varying Volatility]]
- [[Research Gap - CEV Exponent and Leverage]]
- [[Research Gap - Utility Robustness]]
- [[Research Gap - Market-Timing Replication]]
- [[Research Gap - Strategy Decay and Capacity]]
- [[Research Gap - OCR Formula Verification]]

## Expansion protocol

When adding research:

1. Link the unresolved claim to its source section.
2. State the falsifiable question.
3. Define data, estimator, validation window, costs, and rejection rule.
4. Put results in a new atomic note and link them back here.

This protocol is an inferred governance layer based on the corpus’s recurring concerns about estimation error, data mining, execution, and one-history uncertainty.
`,
  },
];

export const metaNotes = [
  {
    title: "Mathematical Finance Knowledge Graph",
    type: "home", area: "Sources", tags: ["home", "mathematical-finance"],
    body: `
> [!summary]
> A source-grounded Obsidian graph for tracing trading ideas back through models, assumptions, mathematics, empirical tests, execution frictions, and failure modes.

## Navigate by domain

- [[Probability and Statistics MOC]]
- [[Stochastic Processes MOC]]
- [[Derivatives Pricing MOC]]
- [[Portfolio Theory MOC]]
- [[Risk Management MOC]]
- [[Market Microstructure MOC]]
- [[Optimization MOC]]
- [[Trading Strategies MOC]]

## Navigate by evidence

- [[Sources and Provenance MOC]]
- [[Source Coverage Matrix]]
- [[Claim Provenance Standard]]
- [[Research Gaps MOC]]

## Core traversals

### Trading idea to mathematical foundation

[[Strategy Blueprint - Factor-Neutral Short-Term Reversal]]  
→ [[Statistical Arbitrage]]  
→ [[Short-Term Reversal]] + [[Factor Exposure]]  
→ [[Principal Component Model]] + [[Market-Neutral Portfolio]]  
→ [[Transaction Cost Model]] + [[Global Risk]].

### Position sizing to survival

[[Expected Log-Growth Criterion]]  
→ [[Generalized Kelly Fraction]]  
→ [[Fractional Kelly Strategy]]  
→ [[Growth-Security Tradeoff]]  
→ [[Ruin Boundary]].

### Option trade to assumptions

[[Strategy Blueprint - Liquidity-Aware Option Mispricing]]  
→ [[Black-Scholes Model]]  
→ [[Geometric Brownian Motion]] + [[No-Arbitrage Principle]]  
→ [[Historical Volatility Estimator]] / [[Implied Volatility]]  
→ [[Liquidity Service Cost]] + [[Jump Risk]].

## Graph semantics

- **Prerequisite** links point toward foundations.
- **Extension** links point toward richer models or methods.
- **Alternative** links offer a different objective or model.
- **Conflict** links identify incompatible assumptions or conclusions.
- **Application** links point toward strategies, examples, or implementation.
- **inference** callouts are vault synthesis, not claims made by the source articles.

## Source corpus

The original nine articles remain available in [[Articles by Edward O. Thorp/Index|Mathematical Finance]]. Start with [[Sources and Provenance MOC]] for provenance and OCR cautions.
`,
  },
  {
    title: "Claim Provenance Standard",
    type: "meta", area: "Sources", tags: ["provenance", "citations"],
    body: `
## Claim classes

### Source-grounded

A factual, mathematical, historical, or empirical statement directly supported by the corpus. End the paragraph or bullet with a descriptive link to the article section, for example:

**Example:** [[The Kelly Criterion and the Stock Market#BINOMIAL GAMES|Rotando & Thorp (1992), “Binomial Games”]]

### Normalized notation

A formula whose symbols were repaired from clear context or translated to conventional notation. Say that notation was normalized and cite the source. If exact reconstruction is uncertain, link [[Research Gap - OCR Formula Verification]].

### Inferred connection

A relationship, workflow, extension, or implementation proposal built by the vault. Put it in an **inference** callout or label it “inferred.” It may combine several cited source claims but must not be presented as the article’s own statement.

### Open question

A question the article explicitly leaves unresolved or that follows from a documented limitation. Put it under [[Research Gaps MOC]] and distinguish explicit from inferred follow-up.

## Granularity rule

One citation may support a tightly related paragraph. A new empirical number, theorem condition, formula, historical assertion, or limitation gets its own adjacent citation.

## Source integrity

Do not silently edit the source articles. Create clarification notes around them. Consult the linked original PDF before using OCR-derived equations in code, publication, or capital allocation.

Use [[Atomic Note Template]] when adding a new concept.
`,
  },
  {
    title: "Source Coverage Matrix",
    type: "meta", area: "Sources", tags: ["coverage", "sources"],
    body: `
## The Kelly Criterion and the Stock Market

- Core: [[Expected Value Criterion]], [[Expected Log-Growth Criterion]], [[Fixed-Fraction Betting]], [[Binomial Kelly Fraction]], [[Generalized Kelly Fraction]], [[Ruin Boundary]].
- Examples: [[Worked Example - Biased Coin Kelly Bet]], [[Strategy Blueprint - Kelly-Sized Equity Allocation]].

## Medium Term Simulations of the Full Kelly and Fractional Kelly Investment Strategies

- Core: [[Fractional Kelly Strategy]], [[Overbetting]], [[Growth-Security Tradeoff]], [[Terminal Wealth Distribution]], [[First-Order Stochastic Dominance]].
- Examples: [[Worked Example - Fractional Kelly Monte Carlo]], [[Strategy Blueprint - Kelly-Sized Equity Allocation]].

## Concave Utilities are Distinguished by their Optimal Strategies

- Core: [[Concave Utility]], [[Utility Equivalence]], [[Utility Separation Theorem]], [[Separating Investment Family]], [[Expected Utility Maximization]].
- Open: [[Research Gap - Utility Robustness]].

## Extensions of the Black-Scholes Option Model

- Core: [[Black-Scholes Model]], [[No-Arbitrage Principle]], [[Delta Hedging]], [[Dividend-Adjusted Call Valuation]], [[Warrant Pricing with Restricted Short Proceeds]].
- Open: [[Research Gap - OCR Formula Verification]].

## Common Stock Volatilities in Option Formulas

- Core: [[Normative Descriptive and Predictive Models]], [[Geometric Brownian Motion]], [[Drift and Volatility]], [[Historical Volatility Estimator]], [[Chi-Square Variance Inference]], [[Estimator-Induced Option Price Bias]], [[Constant Elasticity of Variance Model]], [[Equity as a Call Option on Firm Assets]], [[Leverage Effect on Equity Volatility]], [[Law of Large Numbers in Dynamic Hedging]], [[Discrete Hedging Error]].
- Open: [[Research Gap - Estimator-Induced Option Bias]], [[Research Gap - Time-Varying Volatility]], [[Research Gap - CEV Exponent and Leverage]], [[Research Gap - OCR Formula Verification]].

## A Public Index for Listed Options

- Core: [[Implied Volatility]], [[Option-Implied Volatility Index]], [[Option-Implied Interest Rate Index]], [[Moneyness-Dependent Model Sensitivity]].
- Strategy: [[Strategy Blueprint - Liquidity-Aware Option Mispricing]].

## The Cost of Liquidity Services in Listed Options - A Note

- Core: [[Liquidity Service Cost]], [[Bid-Ask Spread]], [[Market Maker]], [[Inventory-Dependent Quote Tilt]], [[Contingent Limit Order]].
- Example: [[Worked Example - Expected Liquidity Cost]].

## Can Joe Granville Time the Market

- Core: [[Data Mining Bias]], [[Hypergeometric Market-Timing Test]], [[Two-Sample Return Test]], [[Prospective Validation]], [[Signal Aggregation]].
- Strategy: [[Strategy Blueprint - Prospective Market Timing]].
- Open: [[Research Gap - Market-Timing Replication]].

## A Perspective on Quantitative Finance Models for Beating the Market

- Core: [[Quantitative Model Lifecycle]], [[Local Risk]], [[Global Risk]], [[Scenario Stress Testing]], [[Fat-Tail Risk]], [[Factor Exposure]], [[Market-Neutral Portfolio]], [[Short-Term Reversal]], [[Pairs Trading]], [[Principal Component Model]], [[Statistical Arbitrage]], [[Convertible Bond Decomposition]], [[Convertible Bond Arbitrage]].
- Strategies: [[Strategy Blueprint - Factor-Neutral Short-Term Reversal]], [[Strategy Blueprint - Delta-Neutral Convertible Relative Value]].
- Open: [[Research Gap - Strategy Decay and Capacity]].
`,
  },
  {
    title: "Atomic Note Template",
    type: "template", area: "Sources", tags: ["template", "atomic-note"],
    body: `
> [!summary]
> One-sentence definition.

## Purpose

What problem does the concept solve? End every source-grounded paragraph with a citation.

## Mathematical foundation

State the formula, variables, and derivation role. Mark repaired OCR as normalized notation.

## Assumptions

List the conditions required for the claim or model.

## Limitations

State where it fails, what is omitted, and what evidence is incomplete.

## Practical use

Give a supported application or label implementation advice as inferred.

## Relationships

- **Prerequisites:** foundations
- **Extensions:** richer descendants
- **Alternatives:** substitute objectives or models
- **Conflicts:** incompatible assumptions
- **Applications:** strategies and examples

> [!inference] Inferred connection
> Explain any synthesis that is not stated by the source.

## Sources

- Descriptive link to source section.
`,
  },
];
