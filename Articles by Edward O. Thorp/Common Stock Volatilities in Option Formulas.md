---
title: "Common Stock Volatilities in Option Formulas"
archive: "Edward O. Thorp"
category: "Mathematical Finance"
source: "https://www.edwardothorp.com/wp-content/uploads/2016/11/CommonStockVolatilitiesInOptionFormulas.pdf"
source_archive: "https://www.edwardothorp.com/articles/"
source_format: "PDF converted to Markdown"
extraction_method: "OCR"
converted: "2026-08-03"
ocr_average_confidence: 81.1
pages: 46
tags:
  - edward-o-thorp
  - mathematical-finance
type: article
---

# Common Stock Volatilities in Option Formulas

> [Original PDF](https://www.edwardothorp.com/wp-content/uploads/2016/11/CommonStockVolatilitiesInOptionFormulas.pdf)
>
> Converted from the source PDF using OCR. Page markers correspond to the original PDF.
>
> The source is an image scan. Equations, tables, and game-board diagrams should be checked against the linked PDF when exact notation matters.

<!-- Page 1 -->

## COMMON STOCK VOLATILITIES

## IN OPTION FORMULAS

by

Edward O. Thorp

Universicy of California, Irvine

## DEPARTMENT OF

## MATHEMATICS

## UNIVERSITY OF CALIFORNIA

## IRVINE

<!-- Page 2 -->

## PROCEEDINGS

## L-        SEMINAR ON THE ANALYSIS OF

## B                 SECURITY PRICES

MAY 1976

## CENTER FOR RESEARCH IN SECURITY PRICES

(Sponsored by MERRILL LYNCH, PIERCE, FENNER & SMITH INC.)

## GRADUATE SCHOOL OF BUSINESS

## THE UNIVERSITY OF CHICACO

<!-- Page 3 -->

The Proceedings of the Seminar on the Analysis of Security Prices are circulated privately by the Center for Research in Security Prices of the University of Chicago. The Proceedings appear after the semiannual meetings in May and November and are made availsble only to subscribing members of the Seminar and to academic libraries. Participation in the Seminar is by a yearly subscription of $3000. Academic libraries may obtain the Proceedings for an annual fee of $60, or $30 per issue. Many of the papers presented.to the Seminar are reports of tentative findings which many authors do not wisk to make generally available until further research has been done. Therefore, the Proceedings are circulated privately with the express understanding that no paper will be further reproduced or quoted without the written permission of the author(s).

James H. Lorie, Director, Seminar on the Analysis of Security Prices Myron Scholes, Director, Center for Research in Security Prices Lawrence Fisher, Associate Director

William Spangler, Senior Programmer

Marvin Lipson, Programmer Analyst

Karen Ellsworth, Data Analyst

Babu Jones, Editor Cheriesetta Nowels, Typist

The Center for Research in Security Prices (sponsored by Merrill Lynch, Pierce, Fenner & Smith, Inc.) is located at the Graduate School of Business of the University of Chicago (5836 Greenwood Avenue, Chicago, Illinois 60637, 312-753-k262).

ii

<!-- Page 4 -->

## PROCEEDINGS

## THE SEMINAR ON THE ANALYSIS OF SECURITY PRICES

VOLUME 21, Fo. 1 May 13-1k, 1976

, THE METAL, AND GOLD MINING EQUITIES . «. « « + + «BFR Sen mh a Sa1

John G. McDonald

RISK AND COMPOUND RETURN . « + « « « o o « oPRVSRARER YA Eh: BRE Richard 0. Michaud

## COMMON FACTORS IN STOCK RETURNS: MACROECONOMIC CORRELATES AND

MICROECONOMIC DETERMINANTS « « ¢ o « « « oo oo « osna EA ea LE Barr Rosenberg and Vinay Marathe

Artin B. Laffer

TRANSACTION COSTS AND INTEREST ARBITRAGE: Sa VERSUS TURBULENT PERIODS «sc - o.»mae a a Tae ee em RAE Tr ER rie a uy ta Jacob A. Frenkel and Richard M. Levick

## QUARTERLY ACCOUNTING DATA: TIME-SERIES PROPERTIES AND PREDICTIVE

George Foster

PREDICTING BETAS AND VARIANCES USING DATIY DATA . . . « + « =» « = « »« =» = 205 Myron Scholes

COMMON STOCK VOLATILITIES IN OPTION FORMULAS . . . . « ¢ « « = + « « o «235 Edward 0. Thorp

## USING THE BLACK-SCHOLES OPTION MODEL IN INVESTMENT DECISION MAKING:

DESIGNING A CONVERTIBLE PREFERRED ISSUE : « « « = « ¢ ¢ 0 + os os oo s os = 277 Jonathan Ingersoll

I he Ie

<!-- Page 5 -->

## COMMON STOCK VOLATILITIES IN OPTION FORMULAS

Edward 0. Thorp University of California, Irvine

## I. INTRODUCTION

The Black-Scholes formula value for a call option on a stock which pays no dividends during the life of the call, depends on just two parameters. They are "the" riskless rate of interest r and the volatility v of the underlying common stock. Uncertainties in either r or v lead to uncertainties in the calculated call option price.

We wish to determine r and v for the option formula in such a way as to either (a) improve the fit of the model prices to observed past and future option prices, or (b) to meske the formula prices a more effective tool for capturing excess returns in the market place. This corresponds to the classification of models as (1) descriptive (i.e. fits data), (2) predictive (i.e. models based on deduction from principles, guided by the data and designed not only to fit the past but to forecast (fit) the future), and (3) prescriptive or normative (models which achieve certain criteria or objectives). See Thorp [27] and Morgenstern [24].

The Black-Scholes model is normative: the call option price wi(x,%t)

is a C2 (continuous second partial derivatives) function such that (under their assumptions) a hedge, continously adjusted so as to be riskless, will yield the riskless rate of return. Black and Scholes [5] then test the formula to see if it is also (1) (from which we expect it has a good chance to be (2) ).

Note that the model could be (3), but mot (2) or (1), and yet be (b),

no

35

<!-- Page 6 -->

236

providing a tool for excess returns. Hence (a) or (b) can each be independently true or false. These observations are critical for the use of the theory to gain excess returns in the market. Yet they are usually ignored in the literature. For example, the (normative) theory says a very deep in the money option should have a premium just slightly greater than

e(l - explr(t-t*)]) = er(t*-t),

the interest on c¢, where ¢ is the option strike price, t is the time now and t* > t is the expiration time. An investor who buys 100 common and writes ome such option (adjusting the hedge as necessary) gains the riskless rate on his net investment of

¢ explr(t-t*)]. The market often "misprices" such options. If the premium is too large (as it occasionally is), the investor uses the preceding hedge to lock in a riskless rate in excess of that

generally available.

More frequently, the premium is too small. Then firms who are able to use the common stock short sale proceeds can in effect borrow at below the riskless rate by selling 100 common and buying one call. Or, any investor who wants to purchase the stock can substitute the option. Then he has in effect purchased the stock plus the riskless excess return hedge. If the optior premium is below the formula price by more than the excess transactions costs (if any),

then he has added a net excess riskless return tc his portfolio.

Note: This example is meant to illustrate how the option model can be normative and be a tool for providing excess returns, even though actual market prices differ substantially and systematic-, ally from model prices. However, there are other considerations (e.g. income taxes; see Thorp [28], Scholes [25]) as well as

other option models, which singiy or jointly could eliminate much

<!-- Page 7 -->

fe

237

or even most of this "mispricing”.

We will be concerned below mainly with the use of stock volatility in options models. However we first discuss uncertainties in r,

before putting them aside. II. UNCERTAINTY OF THE RISKLESS RATE r

The appropriate "riskless" rate is that on debt which matures on the option expiration date [Merton, 21]. Uncertainty in this rate

arises first from the fact that there is a rate r, at which money

1 can be lent by the investor, and a generally different (greater)

rate r at which the investor can borrow. Which of these rates,

if Be) is appropriate? The call writer can get the riskless return r by buying stock long and continuously and appropriately adjusting the ratio of calls to stock. It can be shown that he has 2 net investment so he is in effect a lender of money, hence for him r = r, seems appropriate.

Similarly the buyer of calls can hedge with short stock. If the buyer can also use the short sale proceeds from the stock (e.g. a member firm with lendable stock), the buyer is a net borrower and

should borrow at option model rate r =r Now the formulas price

2" for the call option incresses as r increases. Therefore if r, > Ty, then in the absence of transactions costs, the model price at which call options should be bought is greater than the

price at which they should be written.

If such circumstances prevailed, the options markets would exhibit extraordinary volume. In the real world, these circumstances do not prevail. Most investors have significant transactions costs. The call option market price required to provide a given borrow-

ing rate r, for the (hedged) buyer decreases as transactions

<!-- Page 8 -->

238

costs increase. Similarly to provide a given lending rate r, to the (hedged) call option writer, the market price of the call option must increase as transactions costs increase. Thus, even though

pe if transactions costs are sufficiently high the formula's market price for the buyer will be less than that for the seller

and no transactions should occur.

Even with sufficiently low transactions costs (negotiated commissions, or better yet, member firms and floor traders for their own accounts) volume will be limited by margin regulations for customers and net capital requirements and "haircuts" for members, applied to their finite available capital. Also, the options trading of many insti-

tutional investors is limited by a variety of regulations.

To find the appropriate r for calculating the call price, we are restricting consideration to "riskless" loans which mature when the

option expires. Even so, there is not a single r, or a single

1

T,- The lender can, for instance, generally choose, among others,

from T-bills, commercial paper, short term government agency paper, CDs and repo agreements. These rates generally differ.

=r for all loans znd for all investors, before

2 tax, it is the after tax return on investment that counts. (See

Scholes [25] for a discussion of how taxes affect the option formulas.) Denote the after tax rates by r} and rj. Then r¥ £71), r3 £71, and the values of rh and r¥ tax situation. These values will vary widely from investor to

will depend on the investor's

investor and will very for the same investor from one tax year to

another.

There is reason to believe that the usual (before tax, nominel) indicators of r are too low. Black points out that the CAPM applied to observed risky rates implies a substantially larger r.

He suggests that a larger r may be correct and that lenders may

Bo,

<!-- Page 9 -->

239

accept less than r in return for desired liquidity when they buy near money instruments like T-bills and commercial paper.

Lastly, it would seem that it is the real (rather than the nominal) after-tax rate © that counts. In real terms, the usual indicators of nominal r are risky. Should the distinction between r and

r be taken into account by an options model?

Surprisingly, the variety of uncertainties in the value of r do not seem to cause serious difficulties in the use of the options formula as a tool for gaining excess returns. The explanation seems to be that uncertainties in the value of r affect the formula price very little for out of the money options, "moderately” for options around the strike price, and most for deep in the money options. But in the deep in the money case an investor can compute his own r, or r, Then he can virtually "lock it in" with the simple hedge previously described.

from the market prices and transactions costs.

From the point of view of the profit seeker (nominal, pre-tax), deviations between market price and model price are simply welcome cpportunities, in the deep in the money case. Thus when the model price is most affected by r uncertainties, the investor's practical use of the model is least affected. (The theoretician will, nonetheless, wonder about differences between model and market in the deep in the money region. Are they due to inefficiencies in the market-place? If so, how does one explain the existence/persistence of these inefficiencies? Or, is the model misspecified, and is there a (rational) model which significantly reduces the merketmodel price differences in this region?)

The investor is more concerned with uncertainties in calculated option model prices in the region arcund strike and below. As the

<!-- Page 10 -->

2ko

stock price decreases, relative to the strike price, uncertainties in the volatility have an increasingly dominant effect on the calculated call prices. Thus, for the practical profit seeker,

  it appears that uncertainties in v are of greater concern than

  those in r. We next consider uncertainties in the volatility. ITI. DETERMINING THE VOLATILITY FOR THE SIMPLE BLACK-SCHOLES MODEL ee

^volatility-estimation

The simple Black-Scholes model means here the formula for call options

w(x,t) = aN (d;) - ¢ exp[r(t-t¥*)] N(d,) (1)

where x is stock price, c is the call exercise price, w is

the call price, r is "the" riskless rate, and dy , = [4nlx/e) + (r = v2/2) (t*-t)] v JEF-¢ . Hl

In deriving the formula, the stock price is assumed to be a stationary : i geometric Brownian motion (i.e. the lognormal model), i.e. for any t, 2» witht <t,, log(x(s;)/x(t;)) 1s H(u,0%) (normally)

distributed where u = m(t,~t,) and a2 = v2(t,-t,). "Stationarity”

and ©

refers to the assumption that m and Vv are constants, called the drift (or trend) and the volatility. Since m does not appear in the option formula (one of its remarkable features) we are only

concerned with the effect of uncertainties in v.

Remark. The effect on Ww of the previously discussed uncertainty > in r is Aw = (3w/dr) Ar and, in terms of the relative change in

w, it is Aw/w = (3w/dr) Ar/w, where w and 3w/3r come from

<!-- Page 11 -->

fos formula (1). A calculation shows

r= aw/ar = (£*-t) c exp(z(t-t*)) N(d,) (2)

3 hence 3w/3r and hence Aw (to good approximation, for smell Ar) { is an increasing function of x, consistent with our earlier quali- 0 tative discussion.

Rk On the other hand, Aw = {3w/3v) Av for smell changes in v, with ! the other variables held fixed. Using (1) again gives

i \

} - -

{55 3w/3v = JgF-g © exp(r(t-t*) N’ (dy) (3) r 2 ¥ = TFT co exp(x(e-t%))exp( 43/2) (2m) 7H J This is greatest when d, = 0, which is equivalent to

po x = ¢ expl(v?/2-r)(t¥-t)] or x = c. Thus volatility changes

| cause the greatest changes in the formula option price for options

around the strike price. It further turns out that the greatest relative change, given approximately by

£4 Aw/w = (3w/av) Av/w , (4)

-             tends to occur around the strike price or somewhat below it (out of

{58 the money).

To estimete v in the model, we first assume for simplicity that the drift parameter m = 0. ter we will remove this assumption. { Then if Y(t) = %n X(t),

& 8,¥(E) = Y(t) - Y(t) = 2a(R(e,,,)/X(t,)) = vz; JAE

<!-- Page 12 -->

2k2

where A4.t = ty and the Zz, are normally (0,1) distributed

; - i+l end independent, i = 0,1,-+,n-1. We wish to estimate v2 from

the observations rls, ): i =0,*-=,nk t and z((a 13 = +522) At =v2 At so i i > 1

br 2 Now (2,7) v2 ZZ A;

n for the statistic I, (4,Y)? we have E 2] = : t= v2(s = = v2 20,0 v2 Eat = vE(t ~t ) = v2 at

=x 1 3 where At = Bit te: Thus At 15

of v2. The error is given by

(A,Y)2 =€_ is an unbiased estimator : £

AE ~ Nias 2 2 2 2 2: =f +r RAC -Levizal ae - v2 =vi(@2 5p - 1) as E n 2 : TRE) 2: = (zg - 1) at z (zf 1) Py

where p, > 0, Ip; =1 is a set of weights.

We would like to "minimize" the error (in some sense) and the question

arises as to whether these weights are optimal. If the p; ere very a unequal the distribution of iE & - y Dp; will not be very "tight"

and the estimete will be poor. Intuition suggests that equal weights, ie. p; = 1/n, would be "best."

Let "best" mean the set of p, which minimizes the variance of the error, i.e. which give the most efficient estimator. Then we seek {p;} which minimize

n : n eo) £(py,*"sPy) = ={( 3, 2i-0p, )} - {e (2, @i-Ley)} :

Noting the last term is zero, and using the facts (22-1) =0 and

<!-- Page 13 -->

2k3 f 3 that the Z,, hence the (z2-1)p,, are independent, yields

-                               n

## 73              Stole         2 (  2_142

i Epp, rtp) = Deg (E(25-1) )- Now po E((23-12) =e) - 226@2) +1=3-2+1=2 - LE so 2(3y,%++»2,) =2 5,92 and the problem is to minimize 5,02 Fe subject to the constraints p. 20, I 2; = 1. The solution (unique) l is p, = 1l/un. fol : g Thus the variance of g is minimized for n + 1 observations if and only if the ac are all equal. However the available "daily” ] data generally does not give equal 4,t. This suggests that we can : improve the estimate of 2 by revising the estimator so that the = A,Y are equally weighted. Consider > L | ra 2 2 nd (5) (a;Y) /8;c rE » r=

## 5            Then for the estimator

B pa? oom, : | 85 E,-zz "v5 2% » (6) i TM i=1 L E(E,) = +? so €, is unbiased. The error is g, - v2 = Lo v2 : z 22 -v2= v2.3 (22-1)/n and since the weights By = 1/n, this has minimum variance in the class of estimators qf type £€;- EF Bow does @, compere to £,? The ratio

var(€))/vaz(§) = 2Z p22E (Um)? = = T pf.

<!-- Page 14 -->

25s

But z (py - §)2 = 9} - 1/n whence nZpl-

1+a%(p - 2)%=1 +a vex(®) where P

is a random variable uniformly distributed over aad LC In the calculation of stock volatility, using one year's "daily" data, the effect is negligible: take 52 weeks with at = 1 day for Lk x 52 times and at = 3 days for 1 x 52 times. Then n=260 and At = 36k days, from which

n var (P) = 260((1/36k-1/260)2 + (3/365-1/260)2] = .005330

so o2€,)/0%(&,) = 1.005330 whence o(€,)/o(€,) = 1.00266, a difference less than 0.3%.

IV. SAMPLING (MEASUREMENT) ERRORS FOR v2

For weekly and monthly data, a. = 1/n so the distinction between £, and £, disappears. But daily data gives us sharper estimates of v2. This suggests the next question: How accurate is our estimate

of 22 Case 1: m=0

From (5) and (6), 5 = (v2/n) x? where x? is Chi square with =n degrees of freedom. Calculations show thst a 90% confidence interval for one year's (equally spaced) weekly data (52 degrees of freedom) is given by

2 2 - < os < 52 e,/v < x2os (71)

where e, is the observed value of £.- In terms of v, the 90% confidence interval becomes

<!-- Page 15 -->

2ks5

## 6 Ve, Sv £1.20 Ye, .      (8)

f If the year is divided into 250 equal time intervals by observations (an approximation to daily data) the corresponding 90% confidence fm interval is

Case 2: m Arbitrary Known Constant

Proceeding as before, 8,¥(%) =v Zz; vat +m at where the Zz, are normally (0,1) distributed and independent, i = 0,1,+++,n-l.

b- Corresponding to (6), we obtain

{

' 8;¥-ma;t\2 ion

: g -1 -giliopad ely 2 i Df Zz GR 3 aly

with the same confidence limits as (7) and (8). The usefulness of this Case 2, which appears to provide little that is different from it its particular subcase, Case 1, is that it shows (a) that the value re of m has little effect on the estimated value of v and (b) it

= suggests to us how to estimate v when m is unknown (Case 3, below). To verify (a),

iE Sa TE 2 : EE) =3 Clad tin a E(&) - a*/n , (0)

assuming as before one year's data, i.e. I 4% = 1.

How €, is unbiased therefore if we neglect m (i.e. set m = 0)

<!-- Page 16 -->

28

and use £& to estimate 72, the bias is =¢/n. For the geometric Brownian motion which the stock price X(t) is assumed to follow, we define R by

soMR(tt))] = E(X(E,)/X(t)) ) = exp((av?/2)(e,-t))]

or R=m + v2/2. It is the "mean compound growth rate” or the "exponential growth rate.”

The Fisher and Lorie work indicates a long term average value of about 0.083 for R. Observed v values of stocks underlying listed options have generally been bracketed between 0.2 and 0.7 with the median near 0.35. Using R = 0.083, the =m values corresponding to v= 0.2, 0.35 and 0.7 respectively are 0.063, 0.022, and -0.162, their squares sre 0.0040, 0.0005, and 0.0262, and the corresponding v2 values are 0.0k00, 0.1225, and 0.1900. The percent positive bias, 100 n?/nv?, from neglecting m in the estimate of v is shown in Table 1. Note that the bias is very small.

One expects riskier (higher v) stocks to have higher mean compound returns R. This leads to less extreme values for the bias. Table 2 shows the results if we change the Tabie 1 assumption to: R = .06 for v=0.20, R= .083 for v=0.35, and R= .12 for v = 0.70. We suspect that most users of the Black-Scholes formula use some weighted version of €,. neglecting = and obtaining v2 values that are slightly too large. The errors thus introduced appear negligible. We shall, therefore, omit discussion of the actual situation, Case 3: mean unknown, since Case 1 appears to approximate

it very well indeed.

Since AY =v Z; OF +mA.t, in the case At =1/n for all i,

i =

8.7 =v Z//a + m/n. Thus AY is normelly u,c? distributed for each i,

<!-- Page 17 -->

## TABLE 1

Bias m?/v? in the Estimete of v2 when = is Assumed to be Zero, using 0.083 = R = m + v2/2 to Estimate =

v v2 m a? a/v? @?/50v2 0.20 .0400 .0630 . 0040 10.0% 02% 0.35 «1225 .0217 .0005 0.4% 0.0%

0.70 .4900 _-.1620 .0262 5.3% 0.1%

247

<!-- Page 18 -->

2:8

## TABLE 2

Bias m?/v? under the Changed Assumptions R=0.06 if v=0.20, R=0.12 if v = 0.70

v «2 o al a/v? a?/50v% 0.20 .0400 .0400 .0016 4.0% 0.1% 0.35" 1235 Jal 00S 0.4% 0.0% 0.70 .4900 -.1250 .01l56 3.2% 0.1%

<!-- Page 19 -->

where yp =m/n and 02 = v2/n. Letting iT =2 Fav=fralm = n i=l EO

1 | -_ end §2=2- FB [A - BT) it is a standard result that

2 n 2p 27 1 EE on fiw ou n S4/o is x%(n-1) distributed. Now n S%/c ENE iL \ 5F a7

so we can use this statistic to get confidence intervals for v2 when = is unknown and all A.% = 1/n.

 V. BIASED OPTION FORMULA PRICES COME FROM UNBIASED v2

^estimator-price-bias

Suppose we have an unbiased estimator of v2, such as Eg, in case m = 0. Then it is well known that a function h(§,) will in general be a biesed estimator of h(v2). (In particular +, is a biased estimator of Y¥% = v.) Thus, considering w(x,t) from equation (1) as a2 function h(v?), h(€,) is likely to be a biased estimator of n(v2).

It seems desirable to use the data x(t): i=0,+++,n} in such a way as to obtain an unbiased estimate of w(x,t). Let W be such an unbiased estimator of w(x,t). Then E(W) = w(x,t) is the option formula value w(x,t,v) for the true (but unknown) v. I have not finished thinking about this problem but a choice for W which seems

plausible to me is:

Ms

W= i w(x, t,(8;7)%/4,¢t) (11)

5 3 where w(x,t,v2) = w(x,t) as given by (1).

Thus the practitioner might compute and use as his estimate of w(x,t)

a . 72 w(x, t,(8,7)%/a;¢t) s (12) i=1

wix,t) =

Hp

<!-- Page 20 -->

250

If (11) is appropriate, how would the calculated model prices change? The numbers w(x,t) in (12) are an average of w(x,t,v2) values for it ranging over values both above and below the

n value v2 = 55, (8, 1)2/8,t. Since w(x,t,v2) is increasing in

v2, values " > v2 will tend to make w(x,t) > w(x,t,v2) and

values 5 < v2 will tend to make w(x,t) < w(x,t,v2).

Experience with the formula suggests that ¥(x,t) > w(x,t) in the regions of interest and that the most significant increase in the calculated option prices is for out of the money options. (Note that w(x,t) < w(x,t) is possible. Suppose, for example, that

v= cee =v =a and v2 =n v2, r=.1, t¥t=.5, x= 200, e =100, v2 =.1. Then w(x,t,v2) = 200 - 100 e =05 i=1,-++,n-1, and w(x,t,v2) < 200 so w(x,t,v2) < 200 - 100 4 Joie 2% /n +200 - 100 e=*% < w(x,t,v%) hence for sufficiently large n, ¥ < w.)

This is also a region where the model values are generally significantly below merket prices. Hence removing the bias in Ww may remove much

‘or all of this difference.

We hope to find out whether W is unbissed for w and, if so, will calculate model prices w and w for a variety of situations, to

investigate whether w is significently greater than w.

Here is a method which could tell us to what extent the calculated model value of Ww, based on an estimated v, differs from the true model value, based on the true v. Assume for simplicity that = = 0, which is Case 1 of section 4. Then the data-based estimator

n g = v2/n 52 22 = (v2/n) x(n) where x2(n) is Chi-square with

1 n degrees of freedom. Ordinarily the observed value of e, is substituted for v2 in the Black-Scholes formulas, giving an option

value w(e,).

<!-- Page 21 -->

251

How let f(e,) be the probebility density function for e we noted is x2(n). Then

2s which

Iu(e,) 2(e,) de, = E(w(€,))

is the expectation of the calculated mcdel value of w, based on v estimated from the data. We can calculate E(w(E,)) ana w(v?) for various true v and assumed r. This can be carried out theoretically or, if necessary, numerically.

As an extreme illustration of what might be learned, suppose it turns out that E(wlf,)) < w(v2) but that E(w(af)) = w(v2) where & > 1 is some constant. Then se, should be used in the Black-Scholes formula for v2, rather than 25. Further, tc use e, as is customary, would give option model prices which are biased downward, especially for out of the money options (as seems to be the case).

VI. THE BLACK-SCHOLES (v2x2?) MODEL AND THE COX-ROSS (v2x°)

## MODELS MAY BE CONSISTENT

There is a rapidly expanding literature on cptions models alternate to the Black-Scholes model (see references). It is not yet known whether any of these alternate models work better than the originel, either in making predictions of market prices or as tools for securing excess rates of return.

These options models are based on various assumptions about the underlying stochastic behavior of the stock. A most important parameter here is "instantaneous volatility,” v, which we define

when it exists by v2 = lim E((ax)2/at) = v2 £{x), with v constant. at+0

Note that Vv may depend on x but not on ©. For the Black-Scholes

<!-- Page 22 -->

model #(x) =x? and v = vx. However, it has long been suggested that v = =", 0 <a <1l, better describes observed stock price changes. I first read of this in 196k in Burton Crane's "The

' where he claimed v = v vx. It seemed

Sophisticated Investor,’ tc be a cross-sectional assertion. Hence, sven if the "average" ¢ were 1/2, the a; for various stocks might differ significantly from 1/2. I did a small rough cross-sectional study at the time

and concluded that a& was nearer to 0.85 than to 0.5.

As 2 possible explanation, consider the various plausibility arguments for the lognormal description of stock prices. These arguments seem still more plausible when applied to the total

assets (debt + equity) of the company. Suppose then that the price of the total assets of a company follows the lognormal model. What model describes the price behavior of the common stock? The following example supports the idea that v= =x, 0<a<1l, is approximately correct. We oversimplify to illustrate the point; many of

the restrictions can be lifted.

Imegine a company which has common stock and a2 single bond issue,

with no other debt (even bank loans) of any kind. To simplify the coming use of the Black-Scholes model, assume further that the stock pays no dividends and the bond has no coupon (to be more neerly realistic, think of it as having been issued at an appropriate discount). Suppose that both stock and bonds are continuously and actively

traded on an exchange so we have the usual price information. Let

b(t) be the market price of the entire bond issue, w(t) the market

price of all the stock, and c¢ the face amount of the entire bond issue.

Let x(t) = w(t) + b(t) and note that this is the current market. price of the total assets of the company. Call a claim on the total assets "superstock." If we think of stock and bonds as divided into

N small shares each, which we can pair to make N small shares of

<!-- Page 23 -->

-

253

superstock, then the market prices of stock and bonds give an effective market price for supershares. Note that x/N, w/N and b/N are marginal prices: we can buy small quantities at these prices but if we try to buy 2 whole issue, or the whole company, the price will probably rise and we will pay more than ww, Db, or x. Thus "market price" for an issue here means (price/share) x (no.

of shares), rather than what it would actually cost to buy the issue.

When the bond issue matures at time <£*, we expect the stockholders to redeem the bonds if the company assets have market price greater than ¢, i.e. if x(t*) > ¢. Upon redemption the stock issue should have market price w(t*) = x(t*) - ¢. If instead x(t¥*) Sc at t%, the stockholders should let their option to redeem the bonds expire unexercised. The company defaults and w(t*) = 0. It follows then that in this simplified example the assumptions of the Black-Scholes option model are fulfilled. The stock is a (Euro) call option on the superstock with exercise price c¢ and expiration te t*. (The idea up to this point appears in Black and Scholes [6]. See Smith [26], §7.1, for a compact account.) Using the notation and

methodology of the appendix, we have Ax = v x Z /At + 0(At) and Aw = w,Ax + 0(4t)

hence the ratio of the relative change in equity of the stock to

the superstock is

wef [9] VX Z JE + 0(at) 1/w Vive = = We Sx ax/x

(v x Z J/&T + 0(at)]/x

wix

where we put v._ =v /w and v_=v_/x =v, whence Vv and v : w w x x = x w

are the respective "lognormal varisnces." Suppose now that

wo x/w =w = Qlciy <i Thaw

<!-- Page 24 -->

25k

Aw = wbx = (wx/¥) wv 2 at = wiv z Jar = wr 2 ix =

where a =1-y, 0<a<1l, and w diffuses according to a

n

Cox-Ross [9] "constant elasticity of variance" model.

The expression w;x/w = Fy ve = ve /w has the right qualitative behavior.

From (1), calculations yield w;x/w =1 + c exp[-r(t*-t)] N(a,)/w and it

can be shown from this that vw, x/% +o as x0.

We have w x = w* where « is 2 function a(x), 0 < a(x) £1. For lognormality and the Black-Scholes model ax) = 1 and the quantity

1 - a(x) is an indication of the extent of deviation of the stock model from lognormality. Taking logarithms, a(x) = log(w,x)/log Ww. If lafrlis a over an Xx interval then the Cox-Ross model is approx-

imately true for that a and that interval.

Figure 1 is a computer plot of a(x) when t* -- t = 10 years,

v=0.3, r=0.08, and c¢ = 1. The curve was drawn by calculating .51(.01)5.50 and plotting this parametricaily described (by x) curve, joining successive computed points.

(2n w(x), n(w,x)) for x

The points for integer values of x are marked by labelled crosses. Superimposed is a lighter straight line. This is a "best" linear fit estimated by eye. Note that it is a remarkably good fit over the entire range of the plot. The slope of this line is 6.6/7.77 = 0.849. It is curious that it happens to coincide so exactly with the 0.85 earlier reported. The range of x values covered is from 0.51 to

5.5, a ratio of superstock prices of more than 10. The range of

-1.6 1.6 os w values is from w =e to w=e » a ratio of stock prices of more than 24, a far wider range than normally encountered during

the life of a listed call option.

<!-- Page 25 -->

255

Q * -

|

11 T0298] X

h7 1090m] M ¢4g* Jo adoys a%uwa ajoym 173 pool

## LIRR

## TINE INL OF 90 X OE

Ar wan or

G°'6 oa 16° ot

## MIYHOANE 1

[ I

## 'T MINOTA

<!-- Page 26 -->

Since vor = w.x/w, and the greph gives (for the linear fit) fn wx = .32 + .849 on w, we find ga(v.) = .,32 = .,151 fn w and v= 1.30w Phe is the relation, derived from the linear fit,

between the superstock volatility bi and the stock volatility Vos

Figure 2 is a similar graph, for t* - t = 5 years. Again there is a remarkable linear fit over the entire range. The values of x plotted are 0.51(.01)5.21. The slope is 0.766, the ratio of x values covered is more than 10, and the ratio of w values covered is exp(1.5 + 2.45) a 52. The graph gives for the linear fit

23k

2n wyx = 158 + .766 nw or Voom 1.58w 3 We also have graphed the cases t¥ - +t = 1 year and t* - t = 1 week. These are shown in Figures 3, 4 and 5. The range and precision of the linear fit decreases as t* - t decreases. However, the amount the superstock or the stock can change in the time t* - t, also decreases as t* - t decreases. When this is considered, there is

a very good linear fit about each point (2m w(x), 2a vx) on the curves. This example could be extended to ccmpanies with several

classes of debt.

It would be interesting to see if there are any companies which approximately fit the assumptions: listed common stock, ome class of listed debt, and no other securities or debts. Then the option model could be used as in the example to calculate common stock

prices, for comparison with the actual market prices.

The example, and more generally the model of stocks as options on

superstocks, suggests the principle that common stocks should tend to be more volatile as the debt-to-equity ratio increases. We can Test this two ways: cross-sectionally, and with individual stocks.

Cross-sectionally, one might plot volatility of a stock average versus

<!-- Page 27 -->

S6°1T ol 9° 0g: ST M)uy

fia ST l= Gls

257 Ea]

EN 5 So LY %. 72) 2)

i I] | | P : z : : A A |

-              HHH               N                     #1 L349          f

ii i 3 A Ld { rd 7 5 Alb 1 EE 0 0 Zl als od 1 1 73 1 8 : Bad Bet 4 5 i 1 HHH fas EE H{- +H 1 - HH AT 2 2 i I Shiad aa casa anti Bq Mi HH 4 1 5 TI E ! i A 5 V pad { | f 4 qd Bed 24 /| LA B q 41 Eladef Foe ’ i a1 fv JLOEIEL 2 A A i f |

f=) = -

' pI 4 [1 Ls LURE of 37 + AH RaPed i. o - I! Cl / §rd HH Ha 5 12 55 1 I 1 1 240 2 HA . LAT i RR FEE 7 7 we iB GL 13 B IE i EE F E if EEE EEE AE AT 7 B { fil £2) 0 LS 1 iy i / rad - } V] cl fo bo Be CEE EEE slid 1 ie CEREEEE EE [ rh Jf dt 1 to Z| {3c Pa LY i] 4 oI EE 1 ‘9g 10308) X (7 10308 M JTF poo3 G'C 07 TC’ =X ARC (15) Aran yam 97° sT gExE7¢* 93uea aaao adoys G = 1 QC 0 19-9p0gy AIM NI OE OT X OL wens Lj vmwen vero 0 (ESV Havel Bi J

<!-- Page 28 -->

258

- (x'm)uy

- 8't-     he H-     0°9-     9°L-         ---(M)uy

u 1 V1 i Pe Pq be A tol p LENE LY] % ST CERI] 4 | rd i { LM A tL i IA a 1 a ba o » HL mY =: : Bs HH

## 1             HHT               1

. = |! HH 1 Pr do [7 A ldq >A A 1] | pe Be (| OA | SURGES TA TIEE fi i ped I Tul 1 | i 1 | 14 { of HHH

-        '        mEWEEwE.      |

| i au | 5 I

-                 amas   §

| EPARPAIT] MANE [4399 [4 {pad A 3 ARTE bebiah ator tpb| tbbhhoh| | 19-441 i 601] pEahi i | E | | PrP didis Pi

## 1   Jo 1%    | py

€'GOoITE =X = '¢c quod T1=23 CE LB RR LL A ARR b erin tries (Eava Living w

\

HT

<!-- Page 29 -->

259

[Ae Lio L 38 s | ty 6i 1 | *H- I , bed 16 y 7°14 = 2° 4 4 pnwl] | M | [sled adda | | A] A] | Blin Malte sud (Aig | V vd | !

## A                                   FFT   REE

Hi bl H A H 1 pe A 1 TEEEATH Bs

-       » I. 48                     - =

y : 1] LM pad RaRESERSERITREI IT I0EL AHHH i A HR EE : At 1 i ’ . 1H / A +4- AX | Tk PEER FEE 2 : i 11 E ‘1 I i H EERE dsl EE 7d HHH 311th HE HEH IB] 1 { 2 ] 11 : g : A 1 ta FARE ELEL 1 ul ” - asiad [I 18a8 ] Wi - : 1 % e ? IMI t EE SE. 9 1H a oq | 18191 15 F

-             HH  eal        HH     “sural Hadpugas (¢ |   ho            RIE

REEEREEEERN= I 2 Jo [loada [# [4d 1¢ 941% 7/4 +H “T1a : [2] |

## B                          #1001   FH (EET

1 i [1] IT Lyd TM | | HHH : . " was aa 7 TO WAS TT. 08° 1h" wid sl 20° = 13 { owen BRN Se WED Ss tee (HITTITE

<!-- Page 30 -->

50 = alil=

ol TRY] Qu

pri

260

1 - - Je A aL E 5 i % J FE I 7 1 3 1a le IElElE q vd [of od = fl TES A It - HHH HA FE THA £ t : Vi] TS A 2 (HIB 02 FL lH EEE E iia C 8 | I z di i 5 1 dl 5] 12 I 5 5 of 1b 1 I i eh Bl A ba i THF : i P | - AE i 2 mo Id 1 7 i | x I % +] Vl I | ad : AH Bed 2 8 G0 a ”; nod kphhflinop

«-((Tp)m)uy

8% Ba A | i PITT 0 TOE Lol SH vd | | HA wv. 6 - - H

## 2 EE                B             IR               I Ed                    |    EEE HH

Se J 1 eB HHH TH m i lo t 1 | Hl 0 OZ 5 1 £3 EEEEP ANE 1 1 1 i | I 1 |

## 1      Ted 1 HHH  SRE Bp Zi SRANAREA RANE AEARR Ea       TEER Sparbhiny Hpns

HEHEHE EEE HEH EEE EEE EER TEE EEE EEE ead [Adds [A234 [31 [iat awiikofadqk psi

## 1 Gi    %  ia    EEE i      a         UNEEETP SERREAR LAAN   LY PRERPEPT PHA

: Hel LEH FETT Z Jo lo tAT [1799 [99 | $0 GAEHALOD| PID PEF! i i HT 70 ACLEEE Uy IBA bhot| bbl| ||! “| Il Gl'h 03 #8* = X 'G HMNOI1A 20° = 12 ( £ LUE TTR TR TTL J mem men monsioauns Svaavun (E3IVE HIVE EY

<!-- Page 31 -->

261

debt-to-equity ratio and look for a positive correlation. There bas been a marked secular increase in debt-to-equity for American corporations in the post-war era. Has there been a significant increase in stock volatilities? According to Kidder, Pesbody [17], in an interesting discussion of market volatility, there has been such an increase. They try various one-variable explanations: institutionalization of trading, interest rate fluctuations, and

a trend (tax-related) towards lower dividend payouts ratios. None seems satisfactory. We suggest that they add a new variable, debtto-equity ratio, and that they then use a multi-linear regression on the whole set of variables.

In shorter times (like a year) when the debt-to-equity ratio is determined mainly by fluctuations in stock prices, does the volatility vary like x”, 0 <a <1, rather than vx? In other words, do percentage changes in the stock averages tend to be larger when prices have fallen, than when they have risen? (Note: Over longer periods, other factors may dominate effects of price change on volatility. . For instance, over the post-World War II years, stock prices have risen greatly. This might be expected to reduce stock relative volatility. However the debt-to-equity ratio has also risen greatly with the effect of raising volatilities. The net effect seems to be

a significant increase in volatilities.)

Thisnotion of relative volatility increasing as stock prices decrease mey explain several puzzles in the literature. Thorp and Kassou? [29] report a regression model for warrant prices, devised by Kassouf. The

model is w(x) = (142%) 1/%

-1 where 2z is a function of several variables that is determined by regression on data. In particular z is found to be increasing in x/X, where x is a surrogate for the average stock price over the preceding year. Since increasing z

means decreasing w, the regression says that if the stock price has

risen, the model price is higher, put lower than otherwise. Conversely,

<!-- Page 32 -->

262

i? the stock price has fallen, the model price is lower, but higher

than if x/X were not so small.

In terms of the Black-Scholes model, if stock price Ww increases and the volatility of w increases more slowly than w (as it does when Ww is an option on the superstock), the model price is less than otherwise expected. Conversely, if w falls, we expect the volatility to be higher than previously believed, thus a higher model price. My casual observations during a decade of trading warrants and options and watching their price action confirms this

behavior. A quantitative verification would be desirable.

Note also that this effect: option (and warrant) prices lagging below model prices when the stock runs up, and lagging above model prices when the stock runs down, tends to "explain" at least part of the two principal discrepancies which seem to exist, between the

Black-Scholes model and market prices.

Leabo and Rogalski [20] reported that warrant price changes do

not seem to follow the lognormal distribution. They conclude that warrant price changes are not consistent with the random walk model. Our analysis shows that if the lognormal model holds for stocks and if the Black-Scholes model applies, then we should expect warrant price changes not to be lognormally distributed. A detailed analysis along these lines may explain away the Leabo-Rogalski results and show that warrant price changes are consistent with the lognormal

model for stock price changes.

## VII. TESTING THE COX-ROSS VOLATILITY MODEL

Assume that for small time increments Ax = wb Z /At where v and

B are positive constants characteristic of the stock. In perticuler

<!-- Page 33 -->

263

the trend m= 0. Then (4x)? =v2xZ® 22 At and u =

(8,x)2/x2% t, i =1,2,+++,n, has a common distribution, namely i :

v2x2(1). For various values of 8 regress u, versus x, and

ask whether the slope b differs "significantly" from O. When 38 is small the slope will be positive. When 8 is large, the slope will be negative. As 8 increases, the slope decreases monotonically.

There will be an interval in which b does not differ "significantly" from 0. Because of the monotone behavior of b, a binary search Quickly determines this interval to arbitrary precision. This interval is a confidence interval for 8.

To apply the procedure cross-sectionally, take the time interval 4,t = At fixed and let 4.x, x. refer to the ith stock. Interpret

v and 8 as "average" values for the set of stocks. One might use, for instance, the x; and 4;x for one particular week on the New York Stock Exchange.

## VIII. CLOSING REMARKS

In the complete version of this paper I want to also discuss:

A. Use of past stock price data to determine volatility.

## 1. Optimal weighting (near term versus more remote).

## 2. Regression towards the mean. Cf. Klemkosky and

Martin [18] for 8.

## 3. Bayesian estimates (ibid).

B. Using option volatility to (help) forecast volatility: Latané and Rendleman [19]. g C. Alternate option models.

## 1. Jump processes. Merton, Cox-Ross.

## 2. Possible role of noise component in the stochastic

process describing stock price. .Fernholz [12].

<!-- Page 34 -->

3. "Vertical" vibration about option model surface;

vertical drift. D. Time variation in v.

## 1. May change via a rendom walk. Fisher [13],

Black [1,2].

2. "Volume time" versus calendar time.

I wish to thank David Gelbaum for programming assistance and calculations, and Oakley, Sutton Securities Corporation for supporting

this work.

<!-- Page 35 -->

265

## APPENDIX

A Corrected Derivation of the ' Black-Scholes Option Model

## INTRODUCTION

| The derivation of the option model by Black and Scholes [6] depends

: upon stochastic calculus and It§'s lemma. This demands much of the reader. Furthermore the derivation as given contains some mathematically incorrect steps. The revised derivation which we give here appears to be more nearly mathematically correct, intuitive, relatively

| undemanding of reader background, and very close in form to the original.

## THE REVISED DERIVATION

Notation, terminology, and procedure follow Black and Scholes [6], pp. 641-643 equations (1)-(T7).

Create a hedged position with one share of stock long and

Ls 1/w, (x,t) (1) SE options sold short. We introduce (implicitly) at this point the assump-

tion that there is a continuous "smooth" (i.e. "sufficiently meny" continous partial derivatives) function w(-,-) such that the value of

the option is w(x,t) for stock price x and time 3%.

To a first approximetion, the value of the hedged position does not aad depend on the price of the stock. To see this, expand Aw by

a Taylor's formula:

&w = w,8x + w,At + 0(At) (12)

<!-- Page 36 -->

where we use the assumption that ax = xfexp (vZ./BE+mat] - 1]=mxAt+vxZ/AT+0(AL) = vxZJ/EE +0 (at) (1b)

(stock price changes are lognormally distributed, i.e. they follow

a geometric Brownian motion with arise). The constants m and +v are called "drift" and "volatility" respectively. The Z represents a normally distributed random variable with zero mean and unit variance. This assumption (1b) corresponds to Black and Scholes' assumption (b). The symbol O(y) means that for scme € > 0 and M > 0 we have |0(y)| < M|y| if |y| <e. We get (1a) from (1b) by noting

that Ax = o tae 7” so all higher order terms in (la) can be replaced by 0(at).

What is new here is the appearance of Z in equation (1b). It is the crucial difference. I am indebted to Bob Oliver for showing me that it was required. Note that without Z, (ib) would equate the random variable Ax to the constant mxAt + vx/At + 0(At). This is evidently incorrect. It's subsequent role will be still more crucial. We can write (la) as

Aw = w Ax + 0(at) . (le) Thus if the stock price changes by Ax, the option price will change

by w,Ax + 0(At) and the number 1/w of options will change by Ax + 0(At) hence the change in the equity of the portfolio is 0(At).

With these revised preliminaries we derive the model. The value of the equity is

E=x - w/w, 3 (2)

<!-- Page 37 -->

267

The change in the value of the equity E in a short time At is: AE = Ax - &w/w, . (3)

Now for the crucial correction: Assuming the short position is changed continuously, we have from Taylor's formula and (1b) applied to higher

order terms:

## 1         PA      :          2            3/2

aw = wy Axa, atis(uy) (ax) 242w) paxachey, (a8)2) + o( (se) ) ;

Using (1b) and lumping all terms of order higher than At,

Aw = wy 8x SAE x 2,272, + o((ec)¥/2) i

2 1 BA

Substituting in (3) yields AE = -(Rwy v?x%2? + ow, )at/wy + o((ae)3/2) oi

Note that in the original derivation the 722 is missing at this point. Hence the random variable AE is being incorrectly equated there to

a constant. Black and Scholes in fact continue by saying: "Since the return on the equity in the hedged position is certain, the return must be equal to rAt. . . . Thus . .

-(3wp vi? + wy )ac/wy = (x - w/w) )rac LAY (6)

Returning to (5) we proceed differently. Note first that the 22 term shows that AE is risky. However, as the time intervals between adjust-

ments in the hedge ratio tend to zero, we shall show that the risk in 2

<!-- Page 38 -->

268

fixed time interval At also tends to zerc. Subdivide At into n equal subintervals.

at = fidc/m CEEl)Ae/n], 1 = 0,=:° ,a-1-.

Let A.,E be the change in equity corresponding to act and note that

Te 222.9 i 3/2 aE (39117 x°Z7 + wy Ja tlw o( (ast) 7 ) (6a) = Gurs22 -- w, )dc/owy + o((at/n)¥/2)

where the Zz; are independent (0,1) normelly distributed random

variables. Then with n-step adjustment of the hedge,

n n = Ey uel 2-2(L 2) AES ails <P E 15%5)88/ /2 (60) 3 =

- wybt/w, + o((at)   Ya

By the law of large numbers, lim AE = - i, v2x2ac/uw - woAt/w (6c) =. igh 4 § BR i!

N==

in probability.

Thus continuous adjustment of the hedge yields, with probability 1, for the small finite time At, the riskless change in equity of (6b). Equating this to (x - w/w, rat yields equation (7) of Black and Scholes,

1-9: Wo = EWS EE gu X ayy (7)

<!-- Page 39 -->

from which point the derivation continues as in their paper.

## MATHEMATICAL REMARK

To preserve the intuitive flow of the argument we have omitted certain’ readily supplied but tedious steps: First, the expansions (la), (1b), (1), (&), (5), (6a), (6b), etc. are correct in some bounded region |ax| < &,, |at] <6,, but |ax| is unbounded. However, by choosing sufficiently small 6, and given §;, Pr{|ax| 2 é;} can be made

as small as we like. Hence the expansions are correct except on a

set of arbitrarily small probability. Secondly, we should observe that the Taylor expansion (5) is valid uniformly on a neighborhood

of x,t. Therefore (6a) holds simultaneously (same constant M for

0 (8,2)%/2)) for all the AE. This is needed so we can write

: J o((a0)¥2)/8 1a (60).

## APPLICATION

The derivation shows the approximate amount of risk from the hedge if the adjustment is not continuous. Define R, the (random variable) rate of return during At (no interim adjustments) by

AE = ER At . (8)

Then from (5), letting £(X) ve the expectation of a random variable X, it follows that

E(R-r)At r at = AE - E(aE) (9)

Ll] = mw [*3 ct 1 x

1 = | 391 72x (22-1]) ae fw) + 0 (at)3/2

<!-- Page 40 -->

270

whence

2202215

¥ “Wi V X : 1/2 R -1r = Heer a od o((ec) ) . (10)

Thus the rate of return R between adjustments is risky and the distribution of R about the mean r depends mainly on the coefficient K = wv, 72x?/2(¥, xv) and, for small At, not much on At. However, the R's between successive adjustments are independent so, as the At steps between adjustments tends tc zero, the risk tends to zero too, by the law of large numbers.

To study R, rewrite K in (10):

~wy v2x2 wa - rw + XW, 5H LJ)

= = y= R 2(w;x-w) wx -w wx = Ww =

K

ws ATE Es Note thet w;X - Ww = N(d,)x -w = cet = IN(d,) and

wy = = ceTM(E = PVNon(d,) + WW (d,)/2/EF TE} . This gives

oN’ (d,) RK = a (11) : U/e* - 5 N(d,)

pg ET o((ae)t/?)

where X is 2s in (11) and ¥ = 22 - 1 has the density

<!-- Page 41 -->

=n

--

and 0 otherwise.

Note that, neglecting oftat) 2), R satisfies &R) =r,

o2(R) = x2 gz? -1)2) = 2k2, and (since XK <0) R is in the interval ~* < R <r - K. A study of XK will indicate the risk if the hedge is not adjusted during time At.

271

Table 3 is helpful in studying K. It suggests that XN~ (d,)/8(a,)~-4, as

4, + -». This is correct and can be proved using asymptotic series for N(x). For insight into the behavior of KX, consider the special case r - v2/2 = 0. This would be true, for instance, if r = .07 and

v = /.1k'= .37 «++. Then setting s2 = v3(t* - t), 4, = 2n(x/c)/s = a where 2n(x/c) = as. Then K ~ v?a/2s as a + -=» or K ~ 0.07a/s.

After this appendix was written, Black sent me Black and Scholes [3,4], which I had not previously seen. These preliminary versions of Black and Scholes [6] present a Taylor series approach to the derivation of

their model. It is close in spirit to this appendix.

<!-- Page 42 -->

nN

## TABLE 3

¥° (4,)/8(a,) as a Function of 4,.

N' (dy)

6.0800E-09 1.4867E-06 1.3383E-04 4,4318E-03 5.3991E-02 2.4197E-01 3.9894E-01 2.4197E-01 5.3991E-02 4.4318E-03 1.3383E-04 1.4867E-06 6.0800E-09

N(d,)

9.9000E-10 2.8670E-07 3.1671E-05 1.3499E-03 2.2750E-02 1.5866E-01 5.0000E-01 8.4134E-01 9.7725E-01 $.9865E-01 9.9997E-01 1.0000E+00 1.0000E+00

N (dy)/N(dy)

6.14 9-19 4.23 3.28 2-37 1:33 0.80 0.29 0.06 0.00 0.00 0.00 0.00

<!-- Page 43 -->

213

## References

Black, Fischer, "Forecasting Variance of Stock Prices for Options Trading and Other Purposes,” Proceedings of the Seminar on the Analysis of Security Prices (November 1975): 297-306.

Black Fischer, "The Pricing of Commodity Contracts," Journal of Financial Economics, Vol. 3, Nos. 1/2 (Jan/March 1976): 167-179.

Black, Fischer and Scholes, Myron, "A Theoretical Valuation Formulas for Options, Warrants and Other Securities," Financial Note No. 16B (October 1, 1970).

Black, Fischer and Scholes, Myron, "Capital Market Equilibrium and the Pricing of Corporate Liabilities," Working Paper No. 16C, University of Chicago and Massachusetts Institute of Technology (January 1971).

Black, Fischer and Scholes, Myron, "The Valuation of Option Contracts and a Test of Market Efficiency,” Journal of Finance 27 (May 1972): 399-417.

Black, Fischer and Scholes, Myron, "The Pricing of Options and

Corporate Liabilities," Journal of Political Economy (May- June 1973): 637-654.

Capozza, Dennis and Asay, Michael, "Testing the Black and Scholes Model of Call Option Valuation," Preprint, Graduate School of

Business Administration, University of Southern California.

Cox, John, "Notes on Option Pricing I: Constant Elasticity of Variance

Diffusions," Preprint (September 1975).

Cox, John and Ross, Stephen A., "The Pricing of Options for Jump Processes," Working Paper No. 2-75, Rodney L. White Center for Financial Research, The Wharton School, University of

Pennsylvania (1975).

<!-- Page 44 -->

11.

2

iT.

Cox, John and Ross, Stephen A., "The Valuation of Options for ternative Stochastic Processes,” Journal of Financial Economics, Vol. 3, Nos. 1/2 (January/March 1976): 145-166.

Crane, Burton, The Sophisticated Investor, newly revised and

expanded by Sylvia Crane Eisenlohr. Simon and Shuster, New York, 1964 (an Essandess paperback): 168-169, 22k.

Fernholz, Robert and Zumbrunn, John, "Random Walk with Noise and Stock Option Valuation," Hunter College, New York (1975).

Fisher, Lawrence and Kamin, Jules, "On the Nature and Estimation

of Systemetic Risk," University of Chicago (February 1975).

Galai, Dan and Masulis, R. W., "The Option Pricing Model and the

Risk Factor of Stock," Journal of Financisl Economics, Vel. 3,

Nos. 1/2 (January/March 1976): 53-82.

Ingersoll, J. E., Jr., "A Theoretical and Empirical Investigation of the Dual Purpose Funds: An Application of Contingent- Claims Analysis," Journal of Financial Economics, Vol. 3, Nos. 1/2 (January/March 1976): 83-12k.

Ingersoll, J. E., Jr., "A Contingent Claims Valuation of Convertible

Securities,” Center for Mathematical Studies in Business and

Economics Report No. 7628, University of Chicago (February 1976).

Kidder, Peabody and Company, Inc., "Coping with Market Volatility: Diversification Strategies for Equity Portfolios," Portfolio

Strategy, The Research Depertment (November 1k, 1975).

<!-- Page 45 -->

{ } | 1

## 18.  Klemkosky, Robert C. and Martin, John D., "The Adjustment of

Beta Forecasts,” Journal of Finance XXX, No. 4 (September

1975): © 1123-1128. A : G 3

## 19. Latané,  Henry A. 2nd Ren dleman, Richard J., "Standard Deviations

(

October 1975).

f£ Stock Price Ratios," Preprint,

n o

). Leabo, Dick A. and Rogalski, Richard L., "Warrant Price Movements and the Efficient Market Model," Journal of Finance XXX, No. (March 1975): 163-177.

## 21. Merton, Robert C., "Theory of Rational Option Pricing," Bell

Journal of Economics and Management Science (Spring 1973):

141-183.

## 22. Merton, Robert C., "The Impact on Option Pricing of Specification

Error in the Underlying Stock Price Returns," Working Paper 829-76, Sloan School of Management, Massachusetts Institute

Technology (January 1976).

## 23. Merton, Robert C., "Option

are Discontinuous," Jour nancial Economics Vol. 3, Nos. 1/2 (January/Msrch 1976): 125-1Ll.

2k. Morgenstern, Oskar, "Thirteen Critical Points in Contemporary Economic Theory," and "Descriptive, Predictive and Normative Theory," Writing Paper No. 3, New York University (April 1972)

## 25. Scholes, Myron, "Taxes and the Pricing of Options," Journal of

Finance, Vol. 31, No. 2 (May 1976): 319-332.

nL px . > - Py

20. smith, C.                         : A Review," Journal of

% C n

g inancial Economics, Vol. 3, Nos. 1/2 (January/March 1

275

<!-- Page 46 -->

nN - on

## 27. Thorp, Edward 0., "Portfolio Choice and the Kelly Criterion,"

Proceedings of the 1971 Business and Economics Section of the American Statistical Association (1972): 215-224. To

be reprinted in Investment Decision-Making, ed. by J. Bicksler.

Latest augmented version appears in Stochastic Optimization

Models in Finance, ed. by W. T. Ziemba, S. L. Brumelle, and R. G. Vickson, Academic Press (1975): 599-619.

## 28. Thorp, Edward 0., "Options in Institutional Portfolios,"

Proceedings of the Seminar on the Analysis of Security Prices, Vol. 20, No. 1, University of Chicago (May 1975): 229-251.

## 29. Thorp, Edward 0. and Kassouf, Sheen T., Beat the Market, Random

House, New York (1967).
