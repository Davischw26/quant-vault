---
title: "A Public Index for Listed Options"
archive: "Edward O. Thorp"
category: "Mathematical Finance"
source: "https://www.edwardothorp.com/wp-content/uploads/2016/11/APublicIndexForListedOptions.pdf"
source_archive: "https://www.edwardothorp.com/articles/"
source_format: "PDF converted to Markdown"
extraction_method: "OCR"
converted: "2026-08-03"
ocr_average_confidence: 81.0
pages: 41
tags:
  - edward-o-thorp
  - mathematical-finance
type: article
---

# A Public Index for Listed Options

> [Original PDF](https://www.edwardothorp.com/wp-content/uploads/2016/11/APublicIndexForListedOptions.pdf)
>
> Converted from the source PDF using OCR. Page markers correspond to the original PDF.
>
> The source is an image scan. Equations, tables, and game-board diagrams should be checked against the linked PDF when exact notation matters.

<!-- Page 1 -->

## A PUBLIC INDEX FOR LISTED OPTIONS

by

Edward O. Thorp University of California, Irvine

## DEPARTMENT OF

## MATHEMATICS

## UNIVERSITY OF CALIFORNIA

## IRVINE

<!-- Page 2 -->

## A PUBLIC INDEX FOR LISTED OPTIONS

by

Edward O. Thorp University of California, Irvine

Center for Research in Security Prices Graduate School of Business The University of Chicago

Proceedings, Seminar on the Analysis of Security Prices Vol. 22, No. 1, May 12-13, 1977

<!-- Page 3 -->

## ABSTRACT - A PUBLIC INDEX FOR LISTED OPTIONS

Edward O. Thorp University of California at Irvine

Our objective is to construct an options index which indicates whether and to what extent listed options as a class are under or over-priced. The index could continuously inform market participants as to the relative preponderance of buying or selling opportunities.

Our approach is to value options with a model (the Black- Scholes model is used to --- Users accept the model assumptions, limitations, and any misspecifications. As the underlying model is improved, the index becomes more acceptable.

Options may be classified as 1) "well" in the money, 2) underlying stock "near" the exercise price, and 3) "well" out of the money. The model price of typ=s 1) options is determined mainly by the interest rate used in the model, type 2) is determined mainly by the model volatility, and type 3) model prices are highly sensitive to changes in the model (hence any model misspecifications cause large relative errors).

We therefore develop three indexes: (1) for in the money

options, to indicate the interest rate available in the market, (2)

<!-- Page 4 -->

for near exercise options, indicating the deviation between the market's estimate of future volatility and the estimate based on history, and (3) a "speculative index" for well out of the money

options.

ii

<!-- Page 5 -->

## A PUBLIC INDEX FOR LISTED OPTIONS

Edward O. Thorp University of California at Irvine

## 1. INTRODUCTION

Our objective is to construct an options index which indicates whether and to what extent listed options as a class are under or over-priced. The index could continuously inform market participants as to the relative preponderance of buying or selling opportunities.

Our approach is to value ostions with a model (the Black- Scholes model [1,2] is used to illustrate). Users accept the model assumptions, limitations, and any misspecifications. As the underlying model is improved, the index becomes more acceptable. This index differs from the usual indexes for stocks or bonds in that it indicates over or under valuation of the indexed securities. Such a valuation index for a class of securities is made possible for the first time by the recent spectacular development of mathematical models of option valuation.

Options may be classified as I) "well" in the money, 2) underlying stock "near" the exercise price, and 3) "well" out of

the money. The model price of tyzz 1) options is determined

<!-- Page 6 -->

mainly by the interest rate used in the model [7], type 2) is determined mainly by the model volatility, and type 3) model prices are highly sensitive to changes in the model, hence any model misspecifications cause large relative errors.

In pursuing the analysis we find it natural to develop not one but three indexes. The first, for in the money options, indicates the effective interest rate available in the options market. the second, for options near the exercise price, indicates the deviation between the market's estimate of future volatility and an estimate computed from past prices. The third is a "speculative index" for well out of the money options.

For simplicity we initially use the Black-Scholes model and limit the indexes to call options. In theoretical calculations we will use the Black-Scholes formula. However, for some call options with "sufficiently large" dividends "sufficiently near expiration”, no formula is known. -Instead numerical algorithms are used. The same is true for "American" puts.

Parkinson [8] gives a "formula" for valuing American puts but it is dibs formula in the generally understood sense: It is not an expression in terms of standard functions. Instead it is a

recursive algorithm--an iterative procedure for calculating an

<!-- Page 7 -->

approximate put value. Successive approximations converge to the correct value. I derived and used the same algorithm in 1974, and proved the approximations converge to the correct value [11]. 1 also extended the algorithm to cover the usual case of stocks with cash dividends [11].

We have available a complete set of algorithms for cal- -culating Black-Scholes option values which are used as needed below. All our algorithms are exact in the sense that they converge to. the theoretical model prices.

Other efficient market type mathematical options models may be substituted for the Black-Scholes, often with only minor modifications [3,4]. We compare the indexes with the Value Line options index [12] and to that of Gastineau-Madansky [4,5,6]. Finally, we discuss how to extend the indexes to include put

options.

## 2. THE r AND v PARAMETERS

The Black-Scholes model requires two empirical parameters in order to calculate the model value of an option. They are volatility v and short term riskless rate of return r. A good first

estimate Vv of v is given by

<!-- Page 8 -->

i+]

n 2 et) = Zlenfiee, )/xce))}

or more generally by

oi > 3

dN Zt n(X(t,, X(t) )} where w= 0 and Ew =n is a set of weights. The x) are closing prices of the underlying stock at successive times t< t,< see t- A time interval LT 3 between 3 months and one year and weighting the most recent data most heavily, with wy <w, < e<w, seems to give the best forecast of future v. See [9] and [10] for further discussion of the problems in estimating v and confidence limits for V.

The Black-Scholes derivation [1] assumes a continuously adjusted riskless hedge. Then the return on equity is equated to "the" riskless rate of return r, which is taken to be the rate on a T-bill which matures on the option's expiration date t*. If no T-bill matures on t*, interpolate from the yield of nearby T-bills.

The quoted T-bill rate is generally on a 360 day discount basis whereas the r used in the Black-Scholes formula is the equivalent continuous compound growth rate (i.e. the exponential growth rate). For instance, for a 90 day T-bill with a discount

yield of 6%, the price is 100(1-dt}=100(1-[6%/360 days] 90 days) =

= 100(1-.015) = 98.5. The equivalent daily ry is the solution to

<!-- Page 9 -->

98.5exp(S0 rg) =100 or ry =1.679E-04. Multiplying by 365 and converting to percent gives 6.129% as the corresponding Black- Scholes r (annual, 365 day basis).

A somewhat larger value than that from T-bills should actually be used for r, More precisely, two distinct values could be used: 5 for lenders (option writers) and n for borrowers (option buyers) with GE5<n, where oT is the T-bill rate.

Note that with non-zero commissions, the net price paid by an option buyer exceeds the net proceeds to the writer of the same option: At a given market price the rate of return 5 for a given ¥ is determined by solving the model for that r which gives a model price equal to the buyer's net price. Using the lesser net proceeds to the writer gives n -

Why is the option buyer a borrower and the writer a lender? One way to see this is to note that in the riskless hedge of the Black-Scholes derivation, the option buyer is short stock and is assumed to get the short-sale proceeds. These proceeds turn out to always exceed the option purchases price so the buyer has net proceeds to use--he is a borrower. Conversely, the option

writer has the opposite stock position, so he has net equity in-

vested and is a lender.

<!-- Page 10 -->

There is an alternate explanation which is valuable for intuitive thinking about options (taken from [11], which includes a similar (introductory) discussion for puts). We can write (see [7]) the price w of the call as

1)                        w= (x-¢) + cli-eTM'")

+p where p is the price of a European put and t*-t=+. The term cli-e”') is always non-negative. It represents the price at time t. of a riskless investment worth c at time t*. Intuitively it arises because possession of a call allows the prospective common stock purchaser to invest ce ©" now atrate r until time t*, and only then put up the remaining purchase price c. Diagram | illustrates the three parts of equation (1). The figure shows that the value of a call consists of three parts: (1) stock conversion value x-c, (2) interest value c(l-e '") of money freed up by deferring the stock purchase decision from t to t* (loan value), and (3) insurance value p due to expected (probability definition) loss reduction from deferring the stock purchase decision from t until t*. This is most intuitive when the option is in the money (x>c).

For simplicity we will neglect the effect of transactions

costs and take 5 =r, =r. We now resume the discussion of why

<!-- Page 11 -->

y y= (x-c) +cli-e”TM") iy

Diagraml. The value of a call option comes from (1) stock conversion value x-c, (2) interest value cll-eTMTM) of money

freed up by deferring stock purchase decision from t to t*, and

(3) insurance value p due to expacted (probability defn.) loss re-

duction from deferring the stock purchase decision from t until oo

<!-- Page 12 -->

the 1 term T-bill rate is inappropriate. (See [10, pp. 237-240] for 2 somewhat different discussion.) First, real-world neutral hedges are far from riskless, and efforts to approximate a riskless return through frequent adjustments are both limited by the market place and by associated commission and other costs. Approximation through diversification is cumbersome and complex.

Furthermore, market prices deviate from model prices, sometimes substantially and for extended periods of time. This causes actual individual hedges to have returns different from theory. The hedges are not riskless in practice. Neither frequent rebalancing of neutral hedgass nor broad diversification will even approximately eliminate risk from this source. An illustration: when the Arab oil embargo was about to begin (Fall, 1974), options were generally overpriced. Black-Scholes model neutral hedgers were typically long stock and short overpriced options. Two to three months later options were very overpriced. The typical result--for a widely diversified portfolio of neutral hedges which had been frequently and carefully rebalanced--was a zero or even a negative rate of return. But the 3 month T-bill

rate touched 9% and the prime rate peaked at 12%.

<!-- Page 13 -->

Thus: neutral option hedges, and even a diversified portfolio of such hedges, is substantially riskier than a portfolio of T-bills. It is also a lot more work to manage. Therefore we expect the appropriate r for the practical use of the Black-Scholes model to “substantially” exceed the T-bill rate. Gastineau [4, page 228] adds 1.5%. Oakley, Sutton has been using a variable factor ranging from 0% to 3.5% and depending on factors such as the prime rate, the commercial paper rate, and the T-bill rate.

Black-Scholes model users generally report that options as a group tend to be overpriced relative to the model. Now the lower the value of r used in the model, the lower the calculated prices. And the usual choice for r is the T-bill rate. It's too low so the calculated model prices are also. This means that at least part of the overpricedness of market relative to model is an illusion. It also means that hedgers who wrote apparently overpriced options (i.e. using the T-bill rate for r) and who waited for them to return to "normal" often waited nearly to expiration, unnecessarily. Thus their misspecified r caused them to ex-

perience reduced rates of return.

<!-- Page 14 -->

10

We now see that it is important to specify r correctly. But how shall we do this? The clues so far are that the correct r exceeds the T-bill rate, that the correction ought generally to be "significant", be variable, and that it may be in the 1% to 4% range. Later we will find (a possibly appropriate) r by having

the option market itself tell us what r is!

## 3. THE FIRST VOLATILITY INDEX

Suppose for now that we know the correct value of r. Use the T-bill rate, for discussion purposes. Then for each option at each instant there is a market price and a model price. If we assume the market is perfectly efficient and that the model hypotheses hold, then the market prices are the correct model prices. If the calculated model price differs it is because either the r or v used was incorrect. We assume for now that r is correct. That means the ¥ estimate for v is in error.

There are two principal sources of error. The first is measurement error: V is distributed around the "true” v for the same past period, rather than precisely equalling that true wv. Secondly, contrary to the model, volatilities change with time. Therefore the true v for the time period from rE to Lt =t does

not in general equal the "true" volatility for the remaining period

<!-- Page 15 -->

of the option's life, from t to t*. But this true future volatility we would like to have to calculate the model price.

Black-Scholes [2], using the T-bill rate for r, calculate the market volatility v required such that the model price equals the market price, The value 4 so obtained is the market's forecast of the expected future volatility, With the preceding assumptions this is the true current expected future volatility, Then the observed future volatility, being a sample based on a finite set of prices, will be distributed in a known way about Ves

Note that for each option market price w(x) there is a set §={lr.vh:wlx,t)=w (x,1)} of (r,v) pairs such that ww, where w is the model price. This set or locus is a negatively sloping curve in the non-negative quadrant of the r-v plane. This has the important consequence that for each r there is at most one Ves hence no ambiguity in its calculation. The existence of at most one v for each r and the negative slope of S both follow intuitively from the fact that w is an increasing function in each of the variables r and wv.

For those call options satisfying the Black-Scholes for-

mula (i.e. calls on stocks without cash dividends; there are only

11

<!-- Page 16 -->

a few stocks which have listed options and pay no cash dividends but it frequently happens that there are no cash dividends before the call expires, in which case the formula applies)

(2)          wlx,t) = xN(d)) - ce" N(d,)

with 4,2 = [en(x/c) + (r= VY 7 and t=t*-t we can verify the negative slope by calculating it, Set ww a constant and find the implicit differential of w=1f(r,v) with respect to the variables r and v.

0=dw=fdr + fav whence dv/dr=-f/f, and by

[10, page 241) f and { are positive so dv/dr< 0.

If the options market is inefficient and the model and the r used in it are correct, then to some extent the difference between ¥ and w may reflect market misestimates of future volatility. We adopt this point of view and construct a first index to measure the market estimate Vo aggregated over the optionable stocks. We call this aggregated market volatility Vo. A similar aggregation of ¥'s is called V. The first volatility index is defined as I= A

Aggregating the vis and the V's presents difficulties. I illustrate with my current procedure. For a single option find

vas that v which makes w=w_. Calculate Vv from

12

<!-- Page 17 -->

o? ne) = ils pot {anf vxie)) ¥

(triangular weighting). The X(t) are daily closing stock prices

for the past year. Although n varies somewhat, it typically is about 252. This weighting is an arbitrary choice. It is one of many which seem to work well. It is plausible because it weights recent data most heavily and seems to respond fairly rapidly to sudden sharp changes in - --

If v >2V thenreset v_ toequal 2V. If v <¥/2 then reset x to equal V/2. Some such truncation to eliminate extreme v, seems reasonable because sudden changes in "true" (but alas unobservable) v do not generally seem to exceed a multiple of, say, 2 or of 1/2, The truncation we chose is arbitrary. However, the factor } =2, used via 3 and 1/3, probably shouldn't be much smaller than 2 or sudden changes in true volatility may be reduced too frequently. As ) increases beyond 2, we suspect that the increase in the aggregated ws will be relatively slow.

Truncation or something similar is necessary because some options lead to absurd values of v. For instance, as v decreases to 0, the lowest meaningful value, the model price w

ity )

decreases to max(0,x-c(l-e . However some deep in the

13

<!-- Page 18 -->

14

money options have traded below this value. (More extreme, sometimes w is even slightly less than max(0,x-c) and a tiny before commissions arbitrage appears.) In such a case, the Ve which brings w closest to w. is no. This is absurd and the truncation v, =V/2 eliminates it.

Well in the money options with w substantially above x-cll-e”"") occur frequently and often require v/¥>1 to get a SO This might happen "because" the option has a market price corresponding to a somewhat higher r, say Tr =2r. In the case of well out of the money options, v/v 1 frequently and, sometimes, v/v 1. In a typical case, the model price might be 0.01 and the market price 0.06 (1/16) with v/v» 1 required to get wWEW -

Both well in the money options and well out of the money options frequently give distorted v,'s that we subsequently truncate. Therefore we next weight the v's for options on a single stock so that the vs of these option groups have light weight compared to options around strike. The intuitive perception that option model prices for well out of the money calls and well in the money calls are relatively insensitive to v changes

leads us to examine 3aw/av (or alternately, 3znw/3v, which

<!-- Page 19 -->

shows the sensitivity of percentage change in w to change in v). For those call options for which formula (2) holds, aw/av=xN'(d ad /av-ce” N'(d,)3d,/av. Since xN'(d) =ce” N'(d)) this becomes 3w/dv=xN'(d)3(d -d, Vav=xN'{d)3{w/T Vav=xN'(d)J/7 .

Now Nid) is the slope of the option curve, the "delta" or num-

ber of share equivalents of each option at the current stock price.

Thus N'(d)) measures change in delta so is related to the curvature of the option curve. Thus 3w/3v will be large where the curvature of the option curves is large, i.e. for options around strike, and small when the curvature is small, i.e. for well out of the money options and for well in the money options. This is what we hoped.

The actual curvature is

aNd Vax=w = Nd))2d /3%= Nd V/xu/T

so in terms of curvature Iw/ov exter yd Wo We replace va by a constant k because at the time of calculation x and v are fixed for any one stock whereas t may vary with the option. Thus 3w/3v=kT wo weights options on a single stock

proportional to the time remaining, as well as to the curvature.

15

<!-- Page 20 -->

Weighting an option in proportion to its remaining life seems desirable. The frequent price anomalies of very short lived options are "damped out".

A plausible alternate weighting is

alenw)av=0Bw/a3v)/w=kT w/w This measures the sensitivity to changes in v of the percentage change in w. If w, /w=+0 as x/c-0 then this will probably give results similar to those for dw/3v. We have not investigated the 3(¢nw)/dv weighting.

Formula (2) does not apply to many of the options on stocks with dividends. Nor is there a formula for puts. In these cases I don't have a way to calculate dw/av. However wlvte)) - wlv-e,) = @w/3v) ke -¢,) and therefore, for fixed €r and v=v, weights so derived are approximately proportional to the weights dw/av. Furthermore, the option algorithms will supply wlvte) and wlv-e,). Therefore I actually have used as weights w(l.15%) - w(.85%), where =e, = .15%. In cases where formula (2) holds, these final weights are

wil. 159) - w(. 859) = .30¥(ow/av) =. 30x rw Combining the vis for the options on one stock, accord-

ing to these weights, gives 2 for that stock. The average of

16

<!-- Page 21 -->

17

the v.'s over all option stocks gives Nes our average market volatility forecast. Similarly, the average of the V's over all stocks gives V, our (weighted) average historical volatility sample. I use a simple arithemetic average to get Ys and v. There are an infinitude of alternate averaging methods but, as I don't have a preference, I have chosen the simplest one. The first volatility index =v A.

The values for v and V have been computed daily with closing prices from 6-25-76 through 7-29-77. Daily values of each were plotted, as were weekly averages. The plot of weekly averages is shown in Figure 1. They retain most of the structure of the daily plots, which were omitted to save space. To test the notion that vi is predicting future v, I plotted v against V with re lagged 4 weeks, then 8, 12, 16 and 20 weeks, Figures 2 and 3 are the plots for Ye lagged 8 weeks and 16 weeks, respectively. There is no power of v to predict V evident in Figures 2 and 3 nor was there in the omitted plots for 4, 12 and 20 week lags.

Now ask whether, instead of Ve predicting v, © reflects Vv. Figures 4-8 show va and v with v lagged 4, 8, 12,

16 and 20 weeks from Ves There is a dramatic improvement in

<!-- Page 22 -->

i8

fit, especially in the 12 to 20 week range. This is consistent

with the hypothesis that is simply a 12 to 20 week delay by

the market in responding to recent stock price history as embodied in v. Perhaps option price levels reflect the past more

than the future. Caveat: The . and U series are too short to firmly support this hypothesis. Furthermore, when we develop the “r-index" below, we will also develop a revised 45 (adjusted for the rate of return r which the option market itself is providing). This 4 will be substantially lower than the one in Figures 1-8 and may lead to different conclusions,

Figure 9 shows the option index =v A condensed to weekly averages, after being computed daily. The index shows v sv only 4 weeks out of 58. Thus if option model values based on ¥ are on average correct, the index suggests options have usually been overpriced during the observation period. The most extreme overpricing would appear to have occurred during the five weeks from 12.2076 (week ending Thursday, 12.2376) through 1.2177, when Lz 1.2. Our experience in the marketplace was that option hedges initiated during this time were largely reversed by mid-March (when the index returned almost

to 1.00) for substantial profits.

<!-- Page 23 -->

19

We plotted the index for each exchange separately, ona daily basis, and compared the results. We found the Pacific Coast Stock Exchange options index to be significantly less than that for other exchanges. This is indicated by Table 1, which is a statistical summary of the daily results for the individual exchanges.

The difference between PCSE and all options also is illustrated graphically in Figure 10. There are 9 points where * and S are plotted in the same 5 “cell” (of dimension 0.01). There are 49 points where * and S are plotted in distinct cells. Of these, 39 have S below * and only 10 have S§ above *. Assume that the chances of each S being above or below * are equal, and independent. Using the cumulative binomial distribution with p=1/2, the probability that 39 or more S will be below

* is .000019 or about 2x10 > (one-tail test). The probability

that the distribution is as skewed as it was, i.e, at least 39 S on the same side of *, is about 4x 0° (two-tail test). Thus 158 for S and for * appear to differ significantly for the period in question.

Note that the * observations include the S observations

as a component. Thus the differences between the S observa-

<!-- Page 24 -->

## TABLE 1

CALLS raT1sTICS ON AVERAGE MARKET VOLATILITY/COMPUTER VOLATILITY

Cele

6. 2276

8.9377

1.2679

12. 2376

0. 9339

4. 2077

1. 0764

©. 87041 280

## AMEX

. 2276 . 8377

6. 8. 1.2645 1. 2 3S. 1 8,

0577

. 9785 . 0377

. 0847 , 85267 ©. ©7932 @.95737

232

PEW

6. 2276

8. 0377

4. 2909

1 1877

e. 9482 S. 8577

1. e929

280

PSE

6. 227¢

8.0377

1 2857 1 2177

@. 9265

12. 2776

1 ©0554

282

HUE

12 ©276 B. ©377

1.3356 1 0577

@ 9235 3.1677

1. 9542

©. 95882 165

## TOTAL

6.2276

8. 0377

1 2578 1.6577

©. 9565 S. 0577

1. e301

0. 86527

282

20

<!-- Page 25 -->

21

KEENLY GRAPH OF COMPUTER ArD/OR MAEYET VOLATILITIES

## AVERAGES FOR ALL STOCKS WITH OPTIONS

WEErs

## OFFSET IS SET FOR ©

ge LE un

icici

## BEREEEER

## ANANSOO®

## EEREEER

i FERRERS

## REEEREEERE     AERRASHARR

senngasss

## EEERELCRRERARSAAREEERRERRRAEEREER]

ARE ie aida aad ros id

## FIGURE 1

<!-- Page 26 -->

22

tl I

o is " . Ex ®

§ . : .

i x HY Tex © A x i:

5% 8a » x Pr

® 3 Pe M

us ’ R= x

n ®

Pe vo 0 rex

ah © 1

fi VOLO You = a c Qo = Loe Lo [ERNE 3

i wooo OB 0 woul,” oo ;

## BERRCARERANRRRREREREEERRELREARROERAREEERS

CELE LELLE YT] gagurdduguayrddddiiNNMMMmMY Fees Yung

## SEERREACREEAREEREREEAREAAREEERREAREREELIEARE

bebe dr better db bi CNN

## FIGURE 2

<!-- Page 27 -->

## HEEKLY GRAFH OF COMPUTER AND/OR MA®VET VOLATILITIES

## AVEFNGES FOR ALL STOCKS WITH OSTIONS

## OFFSET IS SET FOR 16 WEEVS

= L224 -26 .28 OBIE §:c::0:czcfricatsazafizzc®asscls: COMPUTER mAfyET

" 9 o

## WOVE BDB NNN

" H ES

## NNNNNAAAAURNGE SAAD AWUUWNNNNE

® ~ ~

## FIGUGSL 3

<!-- Page 28 -->

## WEEKLY GRAFH OF COMPUTER AND/OR MARKET VOLATILITIES

## AVERAGES FOR ALL STOCKS WITH OPTIONS

## OFFSEY IS SET FOR 4 WEEKS

. 26

= c n

## 3  LJ

Cc LJ cH cn [ nc nc nc Cc n c n c LJ c n Cc LJ cn Cc n Cc H Cc LJ c LJ] c n c LJ [= n c n c n c n [+ n Cc n c " [2 " c n c n c "n c n c n cC nn c n c n c n on - Cc n n Ld cn c n cn n n n [J] n n

## FIGURE 4

24

<!-- Page 29 -->

## WEEKLY GRAPH OF COMPUTER AND/OR MARYET VOLATILITIES

## AVERAGES FOR ALL STOCKS WITH OPTIONS

## OFFSET IS SET FOR 8 WEEKS

## DATE

## COMPUTER

6.2576

7.8276

7.0976

7.4676

7.2376

7.3076

8. 0576

8.4376

8 2076

8.2776

9.0376

9 1076

9.1776 11 1276 c LJ

9.2476 11 1576 c M

10. 0176 11 2676            c    n

108. 8876 12 0376           {=             n

10. 1576 12 1076          c           ]

10. 2276 12 1776           c               n

10. 2976 12 2376           “5.                         n

11 0576 12 3176 c "

14. 4276 1 0277               c                            n

24.1976 1.1477 c n 11 2676 1.2177 M 12 0376 1.2377 Cc M 12 1076 2 0477 [+ [J 12 1776 2.1177 c H 12 2376 2.1877 c n 12 3176 2.2577 c Ld

1.0777 3.0477 c n

1.4477 3.1177 c []

3.2177 3.1877 cE HM

1.2877 3.2577 c n

2.0477 4.0177 c n

2.1177 4.0777 c H

2 1877 4.1577 cn

22577 4.22727 nC

3 e477 4.2977 cn

3.14477 S 0577 nc

3.1877 5.1377 cH

3.2577 S 2077 cn =

4.0177 5.2777 Cc M

4.0777 6.0377 c n

4.14577 6.0977 cn

4 2277 6.1777 c

4.2977 6 2477 cn

S ©0577 7.0177 c ]

5.1377 72.0727 c "

5.2077 7.1577 c n

5.2777 7.2277 Cn

6 ©0377 7.2977 {= M

## FIGURE 5

25

<!-- Page 30 -->

## WEEKLY GPAPH OF COMPUTER AND/OR MARPYET YOLATILIVIES

.22

## DATE        1

## AVERAGES FOR ALL STOCKS WITH OPTIONS

## COMPUTER MARKET

6. 7. 7. L£ re 8. 8. 8.

~

8. 9. 9 S. S. 10. 10. 10. 19. 10. 11 ESS 11 41 12 12 12 12. 12. 1. 1 > 2 = 2 2 3.

3. 3 3

AbAan

S.

2576 0276 0376 1676 2376 3076 E76 1376

. 2076

2776 e376 1e76 1776 2476 8176 ess 1576 2276 2976 esve 1276 1576 2676 e376 1076 1776 2376 3176 e777 4477 2177 2877 e477 1177 1877 2577 e477 1177 1877 2577 e177 ere? 1577 2277 2977 e577

5.4776

9.2476

10. 0176

10. 0376

10. 1576

10.2276 19.2976 11 0576

11.1276

11.1976

11. 2676

412 e376 12 1076 12 1776 12 2376

12. 3178

1.0777

1 1477

121727

2877 . 0477 . 1177 1877 2577 8477 1177 1877 2577 0177 or?7 1577 2277 2577 es77 1377 2077 2777 e377 es77 1772 2477

NN

## NNNNNAAARNRUNSLAIDAWWWWNN

© 3

~N 8 5 ~

## OFFSET IS SET FOR 12

24

[4 c Cc Cc c c Cc c [3 Cc Cc c cm cn c M Cc n Cc n cr nC cn nc cn cn cn Cc M cH MC cn Cc Cc m c TMM cn Cc

## WEEKS

c nC Cc c n c HC c [> LJ) " n LJ n n n n "

## FIGURE §

26

<!-- Page 31 -->

27

## AVERAGES FOR ALL STOCKS WITH OPTIONS

## OFFSET IS SET FOR 16 WEEXS

## HEEXLY GRAPH OF COMPUTER AND/OR MARKET VOLATILITIES

4 0 - ‘8 - i ")

eee © = iS %o a £ \ ey LJ Fc =a eo, = LL Ns = = ? = = #00500 ,05 000 0 ©

## CREREEREE ERSA REA SEAR

CEA dd ANY YAN A dN NNNNMANY FFF BBN OUNRNNR

## SE RRAARRERERERRRRERARRERRAL ARERSRERARAD

KNRNNOOOERARAESSES ddd qld rddaianNrriMnYY

E27

## FICU

<!-- Page 32 -->

## WEEKLY GRAPH OF COMPUTER AND/OR MARKET VOLATILITIES

## AVERAGES FOR ALL STOCKS MITH OSTIONS

## OFFSET IS SET FOP 20 WEES

«28 .26 2 § Oh

" Cc

## 7.                                         LJ       Cc

re mn c J cn Et c 7: Cc. n

8.                                          c                J]

8 x c n 8.2076 1.0777 & " 8.2776 1.1477 Cc n 9 8376 1 2177 c n 9.1076 4.2877 c LJ 5.1776 2 0477 Cc n 9.2476 2 1177 Cc " 10.9176 2 1877 Cc n 18 e876 2 2577 Cc LJ 18 1576 3 e477 cn 1@ 2276 3.1177 cr

19. 2976 3. 1877             mc

11 e576 3.2577 cn 11 1276 4.0177 cn 43 1976 4.07277 Cc 41 2676 4.1577 LJ] Cc

12. 0376 4.2277 NM        c

42 1876 4.2977 [= 12 1776 S. e677 " (+4 42 2376 5.4377 mc 12.3176 5 2077 cn 4.7727 S5.2777 cn 1.1477 6.0377 Cc n 4 2177 6.0977 Cc 4.2877 6.1777 MC 2.9477 6.2477 c 2 1177 7.0477 c Ld 2 1877 7.0777 € M 2.2577 7.4577 c M 3 e477 7.2277 cH 3.1477 7.2977 c [J]

## FIGURE 8

28

<!-- Page 33 -->

29

1.1

+

COMPUTED VOLATILITIES. (weekly)

## CALLS

## GRAPH OF AVERAGE NASYET VOLATILITIES DIVIDED BV

## FIGURE §

GE

## WRNANNNG

## REE LEELA TTI

iaaddedandag

ddddanaimiriny yds vrinvnveuy ohpe to

10.1576

<!-- Page 34 -->

ches

## GRAPH OF AVEPAGE MILT VOLATILITIES DIVILED BY

COMPUTED WLATILITIES (weekly)

6 7 tA 7 & ooze .s [ 3 e 8 H 5 s

AsuNMNE nIEYEEEY

1453448

## NNNNNASARAGURNARAAL ALD

" Noe

## CRIME E

## FIGURE 10

30

<!-- Page 35 -->

31

tions and observations of (*-S) would be somewhat larger. The sign would not change so the analysis of Figure 10 would differ only in that for some of the seven cases where S and * were in the same cell, S and (*-S) might now be in different cells. Also the mean of *-S would be greater than that of * as given

in Table 1 so the difference would look more significant.

## 4. COMPARISON WITH GASTINEAU'S VOLATILITY INDEX

Gastineau presents an index [6, page 72] (G index) given 14 (in our notation) by 1=Zv /K where x, 3 in the sum of mar-

ket volatilities of certain options and K is a constant. One option each on 14 different stocks was used. Instead of weighting options nearer strike more heavily and weighting according to time remaining, as we do, Gastineau simply choses that option nearest strike with 3 to 6° months remaining life, The constant

14 Kis Dv where the v are historical volatilities on the

j=] h,i hi. underlying stocks over an arbitrary selected base period. The 8 i are determined from the Gastineau-Madansky options model (an empirical-theoretical hybrid) rather than the Black-Scholes model.

From our point of view, this model has a serious flaw. As

it stands, we can't tell from the index whether options seem

<!-- Page 36 -->

32

relatively over or under-priced. Nor can we tell whether they are getting more or less over-priced. Consider a ficticious country (call it the U.K.) in which during the base period (choose 1968- 1972), ov, (=0.25. Then suppose that during 1973 bs rose linearly to 0.50, where it remained from 1974 through 1976. (Perhaps this sharp rise in abe volatilities happened because U.K. had a stock market crash which in real terms exceeded the 1930's decline, high unemployment, a 98% tax on unearned income over 20,000 pounds, persistent inflation at the 20% level, and other horrors.) Now suppose that from 1968 through 1976 options always traded at model prices which were normal based on i. The G index would behave as inDiagram 2.

There has been a historical rise in stock volatility, which the CGC index user may be tempted to translate into a tendency for options to be overpriced. If he declines this incorrect interpretation, what is left? The index shows the combined effect of two variables: the historical shift in stock volatility levels and the difference between current stock volatility and the volatility implied (jointly by the model and) by options prices.

The problem is easily solved by replacing K by Zs,

where the \ are estimates of the current volatilities of the

<!-- Page 37 -->

Current stock

Index average volatility DN ~~ 2.0-1- - 0.50 G index --> 1.0 1, index sini 1968-1972 1973] 1974-1976

Diagram 2. Hypothetical Behavior of G index andof x index

in an extreme fictitious case: the "U.K.".

<!-- Page 38 -->

34

underlying stocks. With this change, the G index is basically similar to our I. A historical comparison of the revised G index and IL, could be interesting. Note from Figure 1 that v has varied between 0.24 and 0.29 over the 58 week period from 6.2176 to

## 7.2977. Thus the effect of replacing K is considerable. This

shows up again as the difference between the M graph of Figure

1 (which is our analogue of the G index) and the * graph of

Figure 9.

## 5. AN INTEREST RATE INDEX

For rational options models, the price of deep in the money options depends almost entirely on the interest rate. Diagram 1 illustrates for the Black-Scholes model. If options traded at the model price, we could therefore observe the interest rate directly from the price of deep in the money options. This is complicated by many factors, among them: transactions costs, taxation, the fact that options prices tend to be considerably dispersed around the model price, various sources of statistical "noise" in the price series of stock and options individually, and additional noise in the joint series (e.g. non-simultaneity of stock and op-

tion trades, hence of observed prices).

<!-- Page 39 -->

35

We have constructed a first interest rate index 1. proceeding much as with I, For each option a value re is calculated which makes the model price equal to the market price.

This is not always possible. For instance on calls where the

stock has no dividend before expiration, whence the Black-Scholes formula applies, an Fo 0 can be determined if and only if the call exceeds its conversion value (see Diagram 1).

If w is too low for r, to be determined, we set A If > 2r, where r is the current short term riskless rate being used in the model calculations, we truncate 2 to 2r. Then the from options on an individual stock are combined using the weights

aw/ar=(*-DxN() - wl = (*-t) ce")

N (@,)] 2 Thus 3w/3r varies with the time remaining and with xN(d)) -w, which represents the amount of money "borrowed" to hold the

amount of stock xN(d) to which w is locally equivalent.

‘For the continuation of this work, see the November 1977

issue of these Proceedings.

<!-- Page 40 -->

## REFERENCES

Black, Fischer and Scholes, Myron. 1973. "The Pricing of Options and Corporate Liabilities". Journal of Political Economy, May-June: 637-654.

Black, Fischer and Scholes, Myron. 1972. "The Valuation of Option Contracts and a Test of Market Efficiency”. Journal of Finance, May: 399-417.

Cox, John and Ross, Stephen A. 1976. "The Valuation of Options for Alternative Stochastic Processes". Journal of Financial Economics, January-March, Vol. 3, Nos. 1/2: 145-166.

Gastineau, Gary L. 1975. The Stock Options Manual. McGraw-Hill Book Company, New York.

Gastineau, Gary L. 1977. "An Index of Listed Option Premiums”. Financial Analysts Journal, May-June: 70-75.

Gastineau, Gary L. 1976 (April 6). "The Role of Options in Intelligent Portfolio Management”. The Options.Portfolio Service, published by Kidder, Peabody & Company.

Merton, Robert M. 1973. "Theory of Rational Option Pricing". Bell Journal of Economics and Management Science, Spring: 141-183.

Parkinson, Michael. 1977. "Option Pricing: The American

Put”. Journal of Business, Vol. 50, No. 1, January: 21-36.

Thorp, Edward O. 1975. "Options in Institutional Portfolios”.

Proceedings of the Seminar on the Analysis of Security Prices, Vol. 20, No. 1, University of Chicago, May:

229-251.

<!-- Page 41 -->

## 10. Thorp, Edward O., 1976. "Common Stock Volatilities in Op-

tion Formulas”. Proceedings of the Seminar on the Analysis of Security Prices, Vol. 21, No. 1, University of Chicago, May: 235-275.

11, Thorp, Edward O, 1974. "Bounds for the Price of an American Put". Unpublished Seminar Notes.

12, Value Line Convertible Survey. 1976. Vol. 7, No. 20, (May 24, 1976).
