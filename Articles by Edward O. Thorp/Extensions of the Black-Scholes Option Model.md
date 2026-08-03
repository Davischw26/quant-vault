---
title: "Extensions of the Black-Scholes Option Model"
archive: "Edward O. Thorp"
category: "Mathematical Finance"
source: "https://www.edwardothorp.com/wp-content/uploads/2016/11/ExtensionsOfTheBlack-scholesOptionModel.pdf"
source_archive: "https://www.edwardothorp.com/articles/"
source_format: "PDF converted to Markdown"
extraction_method: "OCR"
converted: "2026-08-03"
ocr_average_confidence: 86.1
pages: 7
tags:
  - edward-o-thorp
  - mathematical-finance
type: article
---

# Extensions of the Black-Scholes Option Model

> [Original PDF](https://www.edwardothorp.com/wp-content/uploads/2016/11/ExtensionsOfTheBlack-scholesOptionModel.pdf)
>
> Converted from the source PDF using OCR. Page markers correspond to the original PDF.
>
> The source is an image scan. Equations, tables, and game-board diagrams should be checked against the linked PDF when exact notation matters.

<!-- Page 1 -->

## BULLETIN OF THE INTERNATIONAL STATISTICAL INSTITUTE

## BULLETIN DE L'INSTITUT INTERNATIONAL DE STATISTIQUE

## PROCEEDINGS

## OF THE 39TH SESSION

## ACTES

## DE LA 39¢ SESSION

## 4 VOLUMES : 4 TOMES

1973

## VIENNA : VIENNE

## SEPARATUM

<!-- Page 2 -->

Source of variation _...Sum of squares d.f. Mean squares F-ratios Quadratic regression 112 967.13 1 S17%%% Additional for linear term 1 104.75 1 5.06% Additional for constant term 6.40 1 0.03 Lack of Pit 4 059.52 16 253.75 Within groups 6 764.80 31 218.22

AX, /D = 0.1533 x2 A,X,/D,0, = -0.0632 x2 + 1.2390 x

7 = 0.0901 x2 + 1.2390 x

## SUMMARY

Multiple linear regression functions can be fitted by means of orthogonal polynomials. This method allows to include successively additional predictor variables in a prespecified order without the necessity of recomputing the regression coefficients of all previously included predictors. The orthogonal terme and the sums of squares for the analysis of variance can sasily be computed from determinants constructed from the sums of squares and products of the observations.

## RESUME

L'adaptation des fonctions ce =

gression multiple et lindaire pout @tre réalisé & l'aide de polynomes orthogonaux. La méthode parmet d'inclure les variables explicatives successivement et de faire des tests de signification pour chaque variable supplémentairs. Les fonctions orthogonales de régression et les sommes des carrés de 1'analyse de variance peuvent @tre calculdes b l'aide de diterminante composés

des sommes des carrds et produits dos observations.

## REFERENCES

COX, C. P. [1958] J. Royal Stat. Soc. (London) Series 8, 20, 405.

LINDER, A. [1960] Statistische Methoden. Birkhiuser Verlag Basel, 3rd Edition, 149.

STRASSER, R. and MISEREZ, A. [1971] Experientia 27, 239.

TEGHEM, 3. [1952] Bull. Inst. Agron. st Stat. Rech. Gombloux 20, 293.

THENT, H. [1972] EDV in Medizin und Biologie 3, 121.

WISHART, J. and METAKIDES, T. [1952] Biometrika 40, 361.

1% ro

<!-- Page 3 -->

## EXTENSIONS OF THE BLACK-SCHOLES

## OPTION MODEL#*

## EDWARD THORP

Mathematics Department-University of California Irvine, California

Summary, The Black-Scholes option theory is a breakthrough, It has simple hypotheses, provides a valuation formula using only observables, and explains actual prices, We solve the corresponding problem for the two types of warrant hedges. Black and Scholes assume no cash dividends. For one cash dividend we give the condition for the solution to be unchanged. When the dividend affects the solution, we give upper and lower bounds. The method extends to a finite series of cash dividends.

## 1. Introduction. An option on common stock (ordinary shares)

is the right to buy (a call) or to sell {a put} a specified number of shares (usually 100) at a specified price (striking price) until a

specified time (expiration date). A European option may be exer-

cised only at expiration. An American option may be exercised at any time before expiration.

The common stock purchase warrant is an option similar to

the call option, Warrants are issued by the company who possesses the stock the warrants claim. Terms typically are of the form A warrants + B dollars obtain C shares of stock until time t=.

Let x(t) be the stock price at time ¢, ¢ the exercise price of the option, t* the expiration time of the option, wit) the price of a call on one share and pit) the price of a put on one share. If y+ = max(y, 0) and y = max{-y,0), itis evident that for American options and t E14, w(t) = (x(th-e)’, pit) = (x(t)-c)”, and that wit)-p(t)=x(t)-c. Many other functional relationships are also evident or strongly suggested. The functional dependence of option

prices on the price of the underlying common has led to formulas

#*The research for this paper was supported in part by the Air

Force Office of Scientific Research under Grant AF0SR-70-1870C,

for the option price as a function f{x(t), t*¥-t,.-.) of stock price, time t¥-t until expiration, and a few other variables. In particular, the hope (successful! }) has been to eliminate most or all

of the variables which affect common stock price, by lumping them all in x(t) itself,

The extensive modern mathematical theory of options was initiated by Bachelier (1900), This landmark paper developed the theory of Brownian motion and applied it to option prices. It assumed stock price changes were normally distributed (modern statistical work shows that the lognormal distribution gives a

better fit) and identified volatility v (i.e standard deviation

per unit time) as a principal determinant of option price, entering the functional expression in the form VE eh-t).

Subsequent mathematical and statistical work developed along several lines. Regression techniques were used to construct models of past price behavior (Kassouf, 1965; Shelton, 1967, and others). Rational (normative) theories of option prices were developed by, e.g., Samuelson (1965), Samuelson and Merton (1 969), and others. The lognormal model for stock prices yielded a natural expression for the price of an option in terms of the normal distribution. See, e.g., Sprenkle (1961), Harbaugh (1965), Thorp (1969), and others. Hedging techniques (e.g., call options or warrants short, stock long) as in Thorp and Kassouf (1967), and Thorp (1971) give information about the use of options in optimizing portfolio performance.

## 2. The Black-Scholes theory, These efforts have culminated

in a breakthrough by Black and Scholes (1972, 1973). We sketch their

theory for calls. It is similar for puts and for straddles.

Black and Scholes observe that hedging options short and common stock long and continuously adjusting the mix leads to a riskless rate of return r. They argue that in market equilibrium this must equal the riskless rate of return in the market,

They further assume:

(a) The short term interest rate r is known and constant.

{ob} The distribution of possible stock prices at the end of any finite interval is lognormal. The stock price follows a random walk in continuous time with variance proportional to the square of the square

of the stock price. The variance rate of the return on the stock is

523

<!-- Page 4 -->

constant. fe} The stock pays no dividends or other distributions. (d) The option is "European'', (e) There are no transaction costs, (f) 1t is possible to borrow at rate r any fraction of the price of a security to buy it or to hold it, {g) A short seller receives the price of the security from a buyer, and will settle on some future date by paying the price of the security on that date,

From this they show that the call price w satisfies the partial

differential equation

1 2 2

(1)     ZV xX wy, trxw, dw, -rw=0

subject to the boundary conditions

wix,t*) = x - ¢ if x Ec

wix,t*) = 0 if 0 2x <c

2 where x Z0, t £t¥, v~ is the variance rate of return on the stock

2)

per unit time (say onc year), and r is the riskless rate of return.

Black and Scholes estimate 5 by

n 2 Tq [ {xe - xe Ip xtt, 1] where to -ty= 1 year and the x(t.) are stock prices on successive market days. They use the 6

month commercial paper rate for r, Equation (1)-(2) is a version of the heat transfer equation of physics and is solved by Black and Scholes by standard methods to yield:

(3)              wi, t) = xN(d, ) - cal FEE) Nid)

"

[tneser + trivira) ert) ] Fun/Eict

5

[1ntxser + (x-v212) ext) | fT

where ln is log, and N{d) is the cumulative normal density function.

Formula (3) has the virtue of containing only quantities which are given such as ¢ and t*, available such as t and x, or which can be estimated from data, such as r (high accuracy) and v

(“fair' accuracy}. The stock enters only through x and wv.

524

972) demonstrate via a statistical study of

Black and Scholes more than 5000 options, that their model describes actual option prices,

3, The Black-Scholes assumptions. Assumptions (al-(g) have

been examined carefully. Merton (1573) considers the extension of fal to a stochastic interest rate. The lognormality of stock prices, with constant variance, as in (bl, has been a central theme in the literature for 70 years (Caootner, 1664), It will he shown below that when the stock pays dividends (contrary to assumption cl ), the value of a call option is equal to, ar can often he estimated from, the idends. See alsc Merton (1973),

model value for no di

Until recently, most Anfefican calls had their striking price reduced for cash dividends. The recently created Chicago Board

Option Exchange (C.B.0. E. now trades options which do not change

their exercise price for cash dividends, Also, warrants do not, It has alsa been shawn that for calls, but not for puts, the model price is the same for American and for Eurapean (assumption (d) | options: the optimal stralegy 1s to hold a call {on a random-walk stack) until expiration,

Assumption (e} of no transactions costs may be nearly true in practice for certain stock exchange firms. Assumption (f] also may be nearly true in practice. Even in portfolios where borrowing is limited or is not allowed (most mutual funds, pension funds) unlimited borrowing may occur in a "virtual" way. For instance if the portfolio has some commercial paper and wishes lo buy a lesser value of stock, it can finance as much as it wishes of the purchase by selling commercial paper. In terms of money, this 1s equivalent to buying the stock by borrowing the desired ammount at the commercial paper rate.

Assumption (g), which includes tacitly the assumption that short selling is done, migh be challenged on the grounds that most market participants arc cither limited in the amount of short selling they may do, can do none at all, or choose to da none. The idea of “virtual” short sales answers this. Consider far instance a large portfolio which has T stock. If we sell T stock and buy T options,

we have done the equivalent of adding to the portfolio a package which

Ln [=] th

<!-- Page 5 -->

consists of: sell short some T stock, receiving the proceeds, and buy some T options. Thus investors who do no short selling, but

instead switch from stock to option ar from option to stack, can instead be regarded as having added to their original portfolio option

hedges of the type used to derive the model,

## 4. Extension to warrant hedging, Tharp and Kassou! [197]

^warrant-hedging

showed that warrant hedging (sell shart appropriate expiring warrants, buy common, use strategies for determining and adjusting

the proportions) led to unuscally high rates of return and unusually low risk (variance).

However, assumption {g) is generally not correct for the warrant hedger. When warrants or other securities are sold short, the brokerage firm which lent the securities retains the proceeds, The short-seller loses the use of the money, Thus to sell warrants short buy stacks, and yet achieve the riskless rate of return r requires a higher warrant shart sale price than for the corresponding call.

Reasoning hike Black and Scholes (1973), we find that the price Ww which the warrant satisfies is: iy} RENEE subject to the boundary conditions

wWiktF)=2x-¢c if xXE¢ 2) wix, t#) = 0 if D=Ex<e.

The solution is

rit*-t) rite-t] ©

wix, t] = e

xNfd,) - <Nid,)

and w > w as expected. The solution may be obtained in the usual way but an easier method (and the one used) is to guess the solution by plausibly)

arguing that since the short sale proceeds are not available until (t-ts

t = t¥ we expect the present value ef . Wix,t} to equal wix, tl. The solution is then verified by substitution. Remember that in obtaining this solution we have assumed that warrants and calls are the samme except for (gl. Black and Scholes (1973) point out differences. In the second kind of warrant hedge the warrant is purchased, the stack is sold short, and the proceeds of the short sale are again re-

tained by the broker, rather than being used to the short seller.

526

For this hedge, the warrant price wix, t) satisfies

i) 1v8Pw tw, mw 0

subject ta the boundary conditions

wix,t%) =x -¢ if XE

12)         =

wix, t£) = 0 if 0 £ x Ec,

Again the plausible puess yields the solution. The short sale

proceeds of the stock will not be available until time so the present value of the proceeds are htatal This suggests

i'd - A

(3)         wix, tl =  wie ¥ bet)

which is readily verified. Since w is strictly increasing in x, ww.

For a given t consider the wix,t}, wix,t} and Wix, 1} curves in the ix,w) plane. The w and W curves define a strip which contains the w curve. If the market were efficient transactions would occur close to the w curve and generally within this band. Hedgers would only operate outside the band so hedging would never occur. But the option markets are inefficient and hedging docs occur.

## 5. Calls on stocks paying cash dividends, Let  ty  be the last

market time that the owner of a stock 15 entitled to a particular divi-

dend D and let t

2 > th be the first subsequent market time that

he is not. Then, ceteris paribus, x(t} = x{ 2! +D. Let D be the only dividend before the expiration of a call on the stock, [f we plot x, w} for 12 t, on axes shifted rightan amount D, the B-S option price at 4 will be maxfwix, 1,1, x-cl. For wix,t)) we use the madel price (31 relative to the right-shifted axes.

if this curve wix,t,) intersects w= x-¢, say at (x*, x®.cl,

then the option should be exercised at t exactly when x(t) > x¥F_

1 In this case, the model price wp x,t] for the option will satisfy

Yh Ix,11® wix, 1) when tee. If wix,t,) does not intersect

w = x - ¢, and there is just the one dividend D to consider, then

(x, 1) = wix. t) for all t= t+, The curves (3) are above and asymp-

w D T(t-t¥)

totic to w = x -ce from which it follows that intersection

occurs if and only if rft-t*} > In{l-Dfel or (6) 1> tots nil-Dic).

527

<!-- Page 6 -->

A sufficient condition for this is rit®-t)< D/fc {Merton, 1973). As an example, consider the C, B.C. E, April 50 call option for T (American Telephone and Telegraph. We have t¥ = close,

April 30, 1973, t = close, February 21, 1973, t=-t, =68/365,

c=$50and D =$0,70. With r= 7.5%, rit-t=)= -, 01397 > 01410 so intersection {barely) occurs. If, as was the case later in the year, r were 8 0%, rit-t%) = -, 01490 < -_ 01410 and intersection would nat

occur, This happened for the July 30 C. B.O. E. call optiens on T.

We have the lower bound wix,t} for w pix tl. An upper bound

is alse readily obtained. Find the el which gives egualily in (6). If 4 = Be wl t) = wix,t). I ty = i then intersection does not rie for an option which expires at time té be -t. Thus for such an

and Hx, t) = wix, t Ky eh so

option, wp = w. Also w LE

D L wix,t FL, «t 1>w (x, Lt) >wix, t). In the case of the April 50 T call

1

options, t

! = 0.6 days and the approximation is very good, In any case, lim _, [wix. t te) - th - w(x, 9] =0 uniformly in x so nix t) = wix, t} uniformly in x as t increases, By applying these arguments recursively, upper and lower

bounds can be obtained far w

b . the model price for the

1° Dp

option in the case of a series of cash dividends whose magnitudes are known with certainty, In particular if intersection does not occur for the last dividend in a serics of equally spaced cash dividends of equal amounts, it does not occur for earlier ones, Thus in this case

=w for all t=t=. It is alsa true in this case that

“py Db, lapproximately] intersection will not accur for dividends prior fo the last unless the dividend rate exceeds r. This is seldom the case. Resumé. La théorie des aptions de Black et Scholes a les hypothéses clegantes. Elle donne une formule pour le prix qu'il faut seulement les observables, et qui explique les prix de la bourse. Nous résoudons le probleme analogue pour les "warrants! parient pour et contre. Black et Scholes supposent que il n'y a pas des dividendes d'argent. Pour un dividend d'argent nous donnons une solution

partielle. La méthode s'dtend 3 plusieurs dividends d'argent.

## REFERENCES

Bachelier, L. (1900), Theory of Speculation. Translation of

French edition,

Black, F. and Scholes, M, (May 1972). The valuation of option contracts and a test of market efficiency. Journal of Finance 27. Black, F. and Scholes, M, (1973), The pricing of options and corporate liabilities, To appear, Journal of Political Economy. Harbaugh, Allen (1965). Expected value of options, warrants, and convertible securities. Paper presented at the 27th National Meeting of the Operations Research Society of America, Bostan, Massachusetts.

Kassouf, 5. T. (1965). A Theory and An Econometric Model for

Common Stock Purchase Warrants. Ph.D. dissertation,

Columbia University, Analytical Publishers Co,, New York, Merton, Robert C. Theory of rational option pricing. Ta appear,

Bell Journal of Economics and Management Science, Spring 1973,

Merton, Robert C, (March 1973a) The relationship between put and call option prices: comment. Journal of Finance 28, No, 1, 183-184.

Samuelson, P. A. (1965). Rational theory of warrant pri

ing.

Industrial Management Review 6, No. 2, 13.31,

Samuelson, P. A. and Merton, Robert C. (1969). A complete

model of warrant pricing that maximizes utility. Industrial

Management Review 10, No. 2, 17-46.

Shelton, J. P. (Part 1: May-June 1967, Part II: July-August

1967). The relation of the pricing of a warrant to the price of its associated stock. Financial Analyst Journal. Sprenkle, C, M, Warrant prices as indicators of expectations

and preferences, Yale Economic Essays I, 172-231.

Thorp, Edward O. (1969). Optimal gambling systems for favor. able games. Review of the International Statistical Institute, 37:3, 273-293,

Thorp, Edward O. {August 1971}. Portiolic choice and the Kelly

criterion, 1971 Business and Economics Statistics Section

Proceedings of the American Statistical Association, 215-224.

<!-- Page 7 -->

## CN EXCHANGEABLE PRIOR INFORMATION

## IN SAMPLING FINITE PCPULATIONS

## P. THYREGCD

Institute of Mathematical Statistics and Operations Research, The Technical University of Denmark DX 2800 Lyngby, Denmark

## 1. Summary

In the paper we introduce = model for Bayesian analysis of a finite population. The model is based on the assumption that the values of the population elements may be considered as exchangeable random variables with density

fulyayzeerayy) = J 7 Ely; lw) dic).

It is shown that the posterior density of the population characteristics after sampling is of the same form of the prior. For densities f{:|«) admitting one-dimensional sufficient statistics the posterior density depends only on the sufficient statistic for the sample.

Finally we give the distribution of the sample and the posterior distribution of the population for some well-known

prior distributions.

## 2. The Model

We censider a population consisting of KN elements with unknown characteristics Y1,¥g,0ee,Yy and assume that a sample of n elements drawn without replacement has yieldsd

the values Xxj,+++,x Thus the sample gives complete iIn-

Be formation about the particular population elements which are included in the sample, and leaves the statistician with the preblem of making inference about the non-sampled

individuals.

330
