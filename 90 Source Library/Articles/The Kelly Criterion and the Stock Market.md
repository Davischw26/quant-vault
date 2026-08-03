---
title: "The Kelly Criterion and the Stock Market"
archive: "Edward O. Thorp"
category: "Mathematical Finance"
source: "https://www.edwardothorp.com/wp-content/uploads/2016/11/TheKellyCriterionAndTheStockMarket.pdf"
source_archive: "https://www.edwardothorp.com/articles/"
source_format: "PDF converted to Markdown"
extraction_method: "OCR"
converted: "2026-08-03"
ocr_average_confidence: 87.7
pages: 11
tags:
  - edward-o-thorp
  - mathematical-finance
type: article
---

# The Kelly Criterion and the Stock Market

> [Original PDF](https://www.edwardothorp.com/wp-content/uploads/2016/11/TheKellyCriterionAndTheStockMarket.pdf)
>
> Converted from the source PDF using OCR. Page markers correspond to the original PDF.
>
> The source is an image scan. Equations, tables, and game-board diagrams should be checked against the linked PDF when exact notation matters.

<!-- Page 1 -->

The American Mathematical Monthly

Volume 99, Number 10 / DECEMBER 1992

## (ISSN 0002-9850)

Contents

## ARTICLES

A History of the Lords of Number-Crunching / PETER R. TURNER 907 The Length of the Day / RICHARD S. BASSEIN 917

The Kelly Criterion and the Stock Market / LOUIS M. ROTANDO and EDWARD O. THORP 922

A Simple Proof of Tychonoff’s Theorem via Nets /

## PAUL R. CHERNOFF 932

Optimal Strategies for a Generalized “Scissors, Paper, and Stone” Game / DAVID C. FISHER and JENNIFER RYAN 935

A Simple Example of Non-Unique Factorization in Integral Domains /

## SCOTT T. CHAPMAN 943

Bernoulli Numbers and Exact Covering Systems / JOHN BEEBEE 946

## FEATURES

## COMMENTS 906

## PICTURE PUZZLE 94%

## THE AUTHORS 950

## LETTERS 952

## UNSOLVED PROBLEMS

Hadwiger's Covering Conjecture and Its Relatives /

## KAROLY BEZDEK 954

## PROBLEMS AND SOLUTIONS 957

## REVIEWS

Numbers by Ebbinghaus, Hermes, Hirzebruch, Koecher, Mainzer, Neukirch, Prestel and Remmert / T. Y. LAM 970 Galois Theory by Joseph Rotman / JEAN-PIERRE TIGNOL 972

## TELEGRAPHIC REVIEWS 975

## INDEX TO VOLUME 99 OF THE AMERICAN MATHEMATICAL

## MONTHLY 979

<!-- Page 2 -->

The Kelly Criterion and the Stock Market

Louis M. Rotando and Edward O. Thorp

' . The purpose of this expository note is to describe the Kelly criterion, a theory of optimal resource apportionment during favorable gambling games, with special attention to an application in the U.S. stock market.

By a “favorable game” we mean one in which there exists a strategy such that Pr(lim, _. X, = +) > 0, where X,, is the player's capital after n trials. We shall

first discuss the case of discrete binomial gambling games and then extend the discussion to continuous gambling games.

## BINOMIAL GAMES

COIN TOSSING. Imagine that we are faced with an infinitely wealthy opponent who will wager even money bets made on repeatedly independent trials of a biased coin. Further, suppose that on each trial our win probability is p > 1/2 and the probability of losing is ¢ = 1 - p. At the outset our initial capital is X, and the primary problem is that of deciding what amount B, to bet on the ith trial.

A classical criterion is to choose B; for each i so that the expected value E(X,) is a maximum after n trials. Letting 7, = 1 if the kth trial is a win and 7, = -1 if itisaloss,then X, =X, _, + I, B, fork =1,2,3,..., and X, = X;, + I; _ | T; B,. Then

E(X,) =X, + ¥ E(B) =Xo+ ¥ (p-a)E(By). k=1 k=1

Since the game has a positive expectation, i.e., p -¢g > 0 in this even payoff situation, then in order to maximize E(X,) we would want to maximize E(B.) at each trial. Thus, to maximize expected gain we should bet all of our resources at cach trial. Thus B| = X, and if we win the first bet, B, = 2X, ctc. However, the probability of ruin is given by 1 - p" and with 1/2 <p < 1, lim, __[1 -=p"] =1 so ruin is almost sure. Thus the criterion of betting to maximize expected gain is a fundamentally undesirable strategy.

Likewise, if we play to minimize the probability of eventual ruin (i.e., “ruin” occurs if X; = 0 on the kth outcome) the well-known gambler’s ruin formula in [1] can be used to show that we minimize ruin by making a minimum bet on each trial; but this has the unfortunate concomitant that it also minimizes the expected average gain. Thus “timid betting” is also unattractive.

Some intermediate strategy is required which is somewhere between maximizing E(X,) (and assuring ruin) and minimizing the probability of ruin (and minimizing E(X,)). An asymptotically optimal strategy was first proposed by J. L. Kelly in [2]. Much credit for this note goes to L. Breiman who developed the theoretical underpinnings for the validity of the Kelly system. E. O. Thorp applied the Kelly

## 922                   THE KELLY CRITERION AND THE STOCK MARKET         [December

<!-- Page 3 -->

criterion to Casino Blackjack in [3], to other gambling games in [4], and to modern portfolio theory in [5].

In the coin-tossing game just described, since the gambling probability and the payoff at each bet are the same, it seems intuitively clear that an “optimal” strategy will involve always wagering the same fraction f of your bankroll. To make this possible we shall assume from here on that capital is infinitely divisible. “Ruin” shall henceforth be reinterpreted to mean that for arbitrarily small positive & lim, __[P(X, <¢)] = 1. Even in this sense, as we shall see, ruin can occur under certain circumstances.

If we bet according to B; = fX;_,, where 0 < f < 1, this is sometimes called “fixed fractional” betting in which we are always wagering the same percentage of our current resources. Where § and F are the number of successes and failures, respectively, in nn trials, then our capital after n trials is given by X, = X,(1 + f)5(1 = )F, where S+ F =n. With f in the interval 0 <f <1, Pr(X, = 0) = 0. Thus “ruin” in the technical sense of the gambler's ruin problem cannot ever occur.

We note that since

x. = xX e" os = ==, ° X, the quantity

XQ 8 F of | = -log(1 +f) + -log(1 = f)

measures the exponential rate of increase per trial. Kelly chose to maximize the expected value of the growth rate coefficient G(f), where

Xo Ss F G(f) = elo] | = £5 log(1 + f) + - log(1 -n}

=plog(1l +f) + qlog(1 =f). Note that G(f) = (1/n)E(log X,,) - (1/n)log X,, so for n fixed, maximizing G(f) is the same as maximizing E log X,. We usually will talk about maximizing G(f) in the discussion below. Note that £2 EET. If =F (@EHE=T)

Gi f)=

when f=f*=p-gq. Calculation shows that

=f*+2f(p=q)=1 7

so that G'(f) is monotone strictly decreasing on [0,1). Also, G'(0) =p -g > 0

and lim; ,- G'(f) = -. Therefore by the continuity of G'(f), G(f) has a

unique maximum at f = f*, where G(f*) =plog p + glog g + log2 > 0. More-

over, G(0) = 0 and lim, _.,- G(f) = -= so there is a unique number f, > 0,

where 0 < f* < f, <1, such that G(f.) = 0. The nature of the function G(f) is now apparent and a graph of G(f) versus f appears as shown in Figure 1.

Gif) = <0

## 1992]                THE KELLY CRITERION AND THE STOCK MARKET                   923

<!-- Page 4 -->

GN

The following theorem recounts the important advantages of maximizing G(f). The details are omitted here but proofs of (i); (ii), (iii), and (vi) for the simple binomial case can be found in [4]; more general proofs of these and of (iv) and (v) are in [6].

Theorem 1. (i) If G(f) > 0, then lim, _. X, = = almost surely, i.e., for each M, Prliminf, .. X, > M]=1;

Gi) If G(f) <0, then lim __X, =0 almost surely; i.e, for each €> 0, Prlimsup, ., X, <el=1;

(iii) If G(f) = 0, then limsup, _,, X, = = as. and liminf, __ X, = 0 as.

(iv) Given a strategy ®* which maximizes E log X,, and any other “essentially different” strategy ® (not necessarily a fixed fractional betting strategy), then lim, .. X(®*)/X(®) == as.

(v) The expected time for the “running capital” X,, to reach any fixed preassigned goal X is, asymptotically, least with a strategy which maximizes E log X,.

(vi) Suppose the return on one unit bet on the ith trial is the binomial random variable Uj; further, suppose that the probability of success is p;, where (1/2) <p, <

## 1. Then E log X, is maximized by choosing on each trial the fraction f* =p, - q,

which maximizes E log(1 + £,U).

Part (i) shows that, except for a finite number of terms, the player's fortune X,, will exceed any fixed bound M when f is chosen in the interval (0, f.). But, if f > f., part (ii) shows that ruin is almost sure. Part (iii) demonstrates that if f = f_, X, will (almost surely) oscillate randomly between 0 and +=. Parts (iv) and (v) show that the Kelly strategy of maximizing E log X,, is asymptotically optimal by two important criteria. Part (vi) establishes the validity of utilizing the Kelly method of choosing f;* on each trial (even if the probabilities change from one trial to the next) in order to maximize E log X,.

## 924           THE KELLY CRITERION AND THE STOCK MARKET      [December

<!-- Page 5 -->

Example 1. Player A plays against an infinitely wealthy adversary. Player A wins even money on successive independent flips of a biased coin with a win probability of p =.53 (no ties). Player A has an initial capital of X, and capital is infinitely divisible. Applying Theorem 1(vi), f* =p -q = 53 - 47 = .06. Thus 6% of current capital should be wagered on each play in order to cause X,, to grow at the fastest rate possible consistent with exactly zero probability of ever going broke. If Player A continually bets a fraction smaller than 6%, X, will also grow to infinity but the rate will be slower.

If Player A repeatedly bets a fraction larger than 6%, up to the value f_, the same thing applies. Solving the equation G(f) = .53log(1 + f) + 47 log(l = f) = 0 numerically on a computer yields f_ = .11973". So, if the fraction wagered is above approximately 12% (up to 1), then even though Player A may temporarily experience the pleasure of a faster win rate, eventual downward fluctuations will occur that will inexorably drive the values of X, toward zero. Calculation yields a growth coefficient of G(f*) = G(.06) = 0.016566 so that after n successive bets the log of Player A’s average bankroll will tend to .016566n times as much money as he started with.

The Kelly criterion can easily be extended to uneven payoff games. Suppose player 4 wins b units for every unit wager. Further, suppose that on each trial the win probability is p > 0 and pb - ¢ > 0 so the game is advantageous to player A. Methods similar to those already described can be used to maximize

G(f) =Elog(X,/X,) =plog(1 + bf) + qlog(1 -f).

Arguments using calculus yield f* = (bp - g)/b, the optimal fraction of current capital which should be wagered on each play in order to maximize the growth coefficient G(f).

A criticism sometimes applied to the Kelly strategy is that capital is not, in fact, infinitely divisible. For any gambling game in the real world, no one ever uses fractional amounts of money (for example) smaller than $0.01. Since bets are always necessarily quantized, “ruin” in the sense we defined it, is possible. It is not difficult to show, however, (see [7]) that if the minimum bet is small relative to the gamblers initial capital, then the probability of ruin is “negligible” and the theory herein described is a useful approximation.

## CONTINUOUS GAMBLING GAMES

Each investment in a succession of stock market “gambles” only has a finite number of outcomes. But it is mathematically convenient to approximate a finite distribution using a continuous distribution model. The added refinements and hypotheses required are in one sense artificial generalizations of the discrete case described thus far; the continuous model results-must preserve the conclusions of the discrete case. We, therefore, work to maximize E log(X,, /X,) as before.

Example 2. An investor purchases a stock for $100 per share now, while the anticipated price of the stock in one year is uniformly distributed on the interval [30,200]. Inflation, broker's fees, and tax considerations are omitted from this discussion. The outcome per unit bet is described by dF(s) = U,(s) ds, where A =1-7/10,1] and F is the associated probability distribution. We observe that Us) = 10/17 for s € A and U,(s) = 0 for s € A as shown in Figure 2.

## 1992)                 THE KELLY CRITERION AND THE STOCK MARKET                   925

<!-- Page 6 -->

Us)

10/17

Figure 2

Observe that the mean p = [1 ,,(10/17)sds = +0.15. We now compute f* and G(f*) assuming the stock is sold in one year. Note that we want to maximize the integral

1 10 6() =f", liogt1 +m] as. Mm This can be accomplished explicitly by solving G'(f) = 0, where

; _1o 1 sds 10) fsds St hy 17/3/01 + fs = (ZH) .3 + fe

10 1 1 ds

- (FIL, - {a =|

Setting G'(s) = 0 reduces to solving

17 L 1+f 0 a 10

Calculation yields f* = 0.63”. Thus, consistent with our ability to continue to make similarly advantageous bets in the future, we should wager 63% of current capital. Integration of (1) yields G(f*) = 0.0472. Ruin is inevitable for f > 1.17.

Under certain conditions it is possible that the maximum value of G(f) will occur when f= f* > 1. For the same present stock price of $100 and without further calculation, we sec at once that if [30,200] - [65,150], a scale change from the interval -7/10 <5 <1 to the interval -7/20 <5 < 1/2, then f* = 2(.637) > 1 and the value of G(f*) remains 0.0472 as before.

But suppose, instead, that the stock price in one year was uniformly distributed on the interval [70,150], with the current price $100 as before, then dF(s) = Us) ds, where U,(s) = 10/8 for s €4 = [-3/10,5/10] and 0 for s € A. Then the maximum value of the integral G(f) = (10/8)/4",; log(1 + fs) ds occurs when f* = 1.957; calculation yields a growth coefficient of G(f*) = 0.0956. Note that the mean p = +0.10. Therefore, in this case we should be willing to buy on

## 926                    THE KELLY CRITERION AND THE STOCK MARKET          [December

<!-- Page 7 -->

margin and wager up to 1.95 times current capital, consistent with our ability to endure risk and our financial ability to cover later. Thus we have the interesting finding that under certain conditions the mean of investment 4 may be higher than the mean of investment B, but if the variability of investment B is sufficiently small, then it may turn out that G(fF) > G(f3). The Kelly criterion would then choose investment B as the superior gamble.

In the previous example, we need the following theorem in order to guarantee that the integral G(f) = [7 log(Y + fs) dF(s) has a unique maximum at f= f*. With -= < a < (, we define a = sup{s: F(-<=,s) = 0}.

Theorem 2. If the mean pu = [7sdF(s) > 0, then the function G(f) = [Toe (1 + fs) dF(s)

attains a unique maximum value G(f*) where f* (0,- 1/a) iff lim; _ (1/0 G'(f) <0.

Proof: First note that if 1 + fa > 0, the integral G(f) = [Flog(1 + fs) dF(s) is defined. Also,

i G(H=/[ FTE aad so that o &

## ORY] 5 FF)

is monotone strictly decreasing on [0,- 1/a). Observe that G(0) = 0. Also G0) = [7sdF(s) =n > 0 and lim,_ _, .,- G'(f) < 0 by hypothesis. From the monotonicity and continuity of G'(f) on [0,- 1/4) it follows that G'(f) takes on all values on the interval [G'(0), lim; _, , ,.,- G'(f)) exactly once and thus G(f) has a unique maximum at f = f* where 0 < f* < -1/a.

Comment. Observe that if a = -=, then f* - 0 so that the Kelly criterion applied to continuous distribution models will yield non-trivial results only if the lower limit of the integral [Jlog(1 + fs) dF(s) is finite.

## AN APPLICATION TO THE U.S. STOCK MARKET

Investing in the stock market may be viewed as a continuous gambling game with a positive, one-year expected return equal to the average of the historical annual returns over a sufficiently long time span. Admittedly it is argumentative to suggest that only stationary processes are involved. To a reasonable first approximation, however, there is evidence to suggest that price changes in speculative markets behave like independent, identically distributed random variables with finite variances (see [8]). From the Central Limit Theorem, it would then follow that price changes in U.S. stocks are approximately normal (actually the lognormal distribution would provide a superior fit, but the computations are much more cumbersome to discuss here).

To an investor (i.e, “gamblerTM), what constitutes a profit over an extended period of time is complicated by the time-varying purchasing power of money and other factors such as brokerage commissions and taxes, as well as the perceived risk that may be involved. Since time is very important, an actual annual percent-

## 1992]               THE KELLY CRITERION AND THE STOCK MARKET                 927

<!-- Page 8 -->

age return in the stock market has little meaning unless compared with the inflation rate or some proxy such as 7-bill rates or money-market rates.

Historical annual excess returns (annual total returns on common stock in excess of Treasury bill returns) have been found to be relatively stable and thus the normal distribution is a reasonable approximation.

For the 59 year period from 1926 to 1984, the distribution of annual excess total returns on S&P 500 “blue chip” stocks had a calculated mean uw = 0.058 and standard deviation o = 0.2160. (See [9].) Each “return” in the calculation was expressed as the natural logarithm of one plus the annual excess return ER; in formulas (2) and (3) below.

' 1 5 59 1/5 p= Y log(1 + ER) = og T10 + ER)| (2) i=1

i=]

50 be [log(1 + ER;) - ©] pe es BA (3)

(Note that expressing returns in this fashion has the advantage that the mean of the natural logs is the continuously compounded geometric mean return.)

Various interesting probability calculations are possible if we assume that annual excess returns are independently distributed. It would then follow, for example, that the mean and standard deviation of an n-year forecast of annual excess returns would be ¥ = 0.058 and s, = 0.2160/vn. With 2 fixed amount invested in stocks over an n-year period, the probability of a negative excess return would be

-       0 - .058

fs < 2160/vn J

Some illustrations using various values of n are shown in Table 1 below. While these illustrations do not relate directly to our eventual application of the Kelly criterion, they do inform us of the relative risk characteristics of stocks vs. T-bills over various periods of time.

Taste 1 Probability of Number of years n negative excess return 2 38 3 35 5 29 10 21 15 16 20 13 25 -10 30 08 35 06 40 05

ESTIMATING THE KELLY CRITERION VALUE OF f* FOR LONG-TERM

## INVESTMENT IN S &P 500 STOCKS

Suppose we have an initial amount of investment capital X; and we now want to determine the optimal “wager-fractionTM f* to invest cach year in S&P 500

## 928                   THE KELLY CRITERION AND THE STOCK MARKET          [December

<!-- Page 9 -->

is inade-

irve for our probability distribution quate for two reasons: first, the n al distribution allows for unboundedly large annual excess percentage declines /advances in stocks (unrealistic on both counts): secondly, as inferred by the comment following the proof of Theorem 2, the Kelly criterion will not yield a meaningful f* > 0 if the probability distribution F(s) suggests a negatively infinite lower limit of the integral

stocks. Using an unaltered norm

| log(1 + fs) dF (5s).

quasi-normal probabili ibution SUS VALLOD ILLUL YALIAUIS 3 WU UC Alungiul on ne merval A = 5B, where

A=p~30=-059 and B =p + 30 = 0.706, the maximum permissible annual excess percentage changes that are assumed may occur. There are two special constants to be determined, « a /

For the above reasons we estimate t

n+ ~Gs-n?’ A<s<B (4)

0.               s<A

0, 5s > B.

1 N(S) ut

= 5 4 u = 058 B

Figure 3

Calculations were accomplished on an Apple Ile microcomputer, All integrations were approximated with Simpson’s Rule using n = 1000 and = =

## 3.1415926535. The value of 4 had to be chosen so that [5N(s)ds = 1 and we

found that A = (1 - .997006378)/(B - A) is the necessary correction term for “chopping off the tails” from tt dard normal curve. Simultaneously we also wanted the probability distribution model in (4) to have a standard deviation of

## 1992]             THE KELLY CRITERION AND THE STOCK MARKET               929

<!-- Page 10 -->

o = 2160 (to agree with the historical variance rate of excess return on stocks) where a” = [25°N(s) ds - p*. To achieve this the value of the constant a was numerically calculated to be « = 2183. With these adjustments, the distribution N(s) has a mean of .058 and a standard deviation of .2160 as required.

We now want to find the value of f, where 0 <f < -1/A4, such that the following integral is a maximum:

G(f) = [ross + £5) dN(s)

h+

1 = RCS +5) - e-G-wi/2at| go (5) A Ta

This time the integration that would be involved in setting G'(f) = 0 is non-elementary and cannot be done explicitly. Numerical work on a microcomputer was performed and we found that the maximum value of G(f) occurs when f° = 1.17 and the growth coefficient G(f*) = 0350444711. The mean of the distribution is positive. Also, differentiating G(f) with respect to f and examining the terms in the integrand, we find that

im G(f)=--=: F=(-1748) $0 the uniqueness of f* is guaranteed by Theorem 2.

Thus, taking into account the time value of money (but neglecting transaction fees and taxes), each year the Kelly-optimal investor should be willing to invest up to 100% of his/her resources in a diversified portfolio of S&P 500 stocks if no margin is permitted. But maximal average real growth will occur (should margin at the T-bill rate be available) if one invests 117% times current resources. Thus the long-term investor, each year, should be fully invested plus borrow to invest an additional 17% above available resources so that continued investments will achieve (asymptotically) maximal average growth relative to T-bills. (In the real world where margin costs exceed T-bill rates, if the extra costs are included in the computations, this percentage would be somewhat less.)

It would be interesting to know if G(f) = 0 on the interval (0,- 1/4) because -if so-then we would have some idea of the “chaotic ruin point” f_, or the point beyond which margin becomes excessive and thus leads to inevitable ruin (ic. loss relative to T-bills with a probability of 1). Direct examination of the limit

L= tim [log(1 + f)N(s) ds [=(-1/4)" “A is difficult, but we can obtain an upper bound. With

M = Max(N(s)) =h + = on[4,B], then

Ls lim [%(log(1 + fs) Mads

[=(=1/A)" “Aa

f= (=174)

=M lim [=]

- [a - B+ (8 - Apis - 2 = -051<0.

## 930         THE KELLY CRITERION AND THE STOCK MARKET     [December

<!-- Page 11 -->

Thus G(f) = 0 has a unique solution f, € (0,-1/4). Because the slope of the curve G(f) versus f is very steep near -1/A, it becomes numerically difficult to locate f. with great accuracy. Computer runs show this value to be very close to -1/A; in fact, f. = 1.69. Thus for a hypothetically immortal investor continually wagering an amount greater than 1.7 times current resources, ruin is certain. Thus excessive use of margin is undesirable.

Before dashing out to become fully invested in stocks for a year, for a lifetime, or for all eternity, there are a few caveats that should be emphasized. Losses (relative to T-bills) are possible over the short-term. The mathematically inclined

investor would do well to consider the tenable risks implied by Table 1 so that one NOL 2aaress (Is ISsue.

Finally, it can be argued that the somewhat artificially constructed probability distribution N(s) may not be fully taking into account: (i) recent expanded stock market volatility caused by program trading and the internationalization of financial markets, and /or (ii) some of the particularly disastrous exogenous events that might occur (such as a cataclysmic earthquake or a massive global recession). The numerical results we have obtained must be interpreted in light of the limitations inherent in any applied probabilistic model.

## REFERENCES

1. W. Feller, An Introduction to Probability Theory and Its Applications, Vol. 1, Revised (1966). New

York, John Wiley.

J. L. Kelly, A new interpretation of information rate. Bell System Technical Journal, 35 (1956),

917-926.

E. O. Thorp, Beat The Dealer, 2nd Ed., Vintage, New York 1966.

E. O. Thorp, Optimal gambling systems for favorable games. Review of the International Statistical

Institute, Vol. 37:3, 1969.

E. O. Thom, Portfolio choice and the Kelly criterion. Proceedings of the 1971 Business and

Economics Section of the American Statistical Association (1972), 215-224.

6. L. Breiman, Optimal gambling systems for favorable games. Fourth Berkeley Symposium on

Probability and Statistics, (1961), I, 65-78.

7. E. Thorp; W. Walden, A winning bet in Nevada baccarat. J. Amer, Statist. Assoc. (1966), 61 Part I,

313-328.

8. A. Moore, A statistical analysis of common stock prices. Doctoral Dissertation, University of

Chicago, 1962.

9. W. Reichenstein, When stock is less risky than Treasury bills. Financial Analysts Journal,

Nov/Dec 1986, 71-75.

10. M. P. Kritzman, What practitioners need to know about uncertainty. Financial Analysts Journal,

Mar/Apr 1991, 17-21.

[¥)

w

~

wn

Department of Mathematics Oakley Sutton Management Corp. Westchester Community College Suite 100, 3 Civic Plaza

Valhalla, NY 10595 Newport Beach, CA 92660

## 1992]                THE KELLY CRITERION AND THE STOCK MARKET                   931
