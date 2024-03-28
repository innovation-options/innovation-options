Title: How to Calculate an Innovation Option
Date: 2024-01-04
Summary: The mathematics behind the innovation option formula.


Innovation Options measure the return on investment (ROI) of pre-growth initiatives based on the option value they provide to the firm. They are an effective alternative to traditional, cash-flow based approaches such as Net Present Value which fail under conditions of high market uncertainty.

In this article, I’ll detail how one calculates the ROI of an Innovation Option using the trinomial option pricing model. First, I’ll describe the trinomial model’s general approach and equations. Second, I’ll demonstrate how the trinomial is adapted specifically for innovation. Third, I’ll show how you use the model to generate an ROI for the Innovation Option and measure progress during its term. Finally, I’ll describe some of the advantages and limitations of the Innovation Option approach and provide some tools for the model’s real-world application.

### The Trinomial Model

The [Trinomial](https://en.wikipedia.org/wiki/Trinomial_tree) is an option-pricing model developed by [Phelim Boyle](https://en.wikipedia.org/wiki/Phelim_Boyle) in 1986.  It is the most-common method to value American-style options (as opposed to the more widely-known [Black-Scholes Model](https://en.wikipedia.org/wiki/Black–Scholes_model) used primarily for European-style options).  The Trinomial Model has three steps.

#### Step One: Construct the Lattice

Step one constructs a range of possible future values for a given opportunity. Think of it like a storm tracker; from the current position of the storm, the potential path expands into a cone across the possible area of impact. The further in the future, the greater the size of the cone. That’s what happens in step one: from a known starting point, the range of values branches out over the life of the option. It could appreciate greatly and always be headed “up and to the right”. Or it could be a complete disaster, always losing value. Or it could go up, then down, then up, then flat--anywhere in between the best and worst case.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*yl7dfA0y7dmUo-xucIkVCQ.png){.img-fluid}{.img-fluid}

This range is called a “lattice”, or a series of connected nodes that looks like a sideways branching tree. Mathematically the lattice is constructed by applying these equations to each node in sequence:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*R3HNE8ORyiRt475x6yn7uQ.png){.img-fluid}

The components of these equations are the Natural Logarithm `e`, the duration of the time step `delta t`, and the volatility of the proposed investment `sigma`. (We’ll show later how to calculate these and other variables; for now simply assume them to be known.) The desired outputs are the factors `u`, `d` and `m`, by which the investment may increase, decrease, or remain the same, respectively.  It is from these three moves that the Trinomial is named.

With the factors determined, you build the lattice by taking your starting point (called the Spot) and multiplying it by the `u`, `d` and `m` factors.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*7DZ9zja9H4DouAhQBm665g.png){.img-fluid}

Then, those three results are themselves multiplied by `u`, `d` and `m`, creating still more nodes.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*bzPGID3nuSRFI59UTuM6FQ.png){.img-fluid}

This continues for a given number of steps until the option’s term (the period within which it must be exercised) expires.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*KIQgYmKMuSy-26iLTk1fCw.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*xl8v5pW4JR2wkdEHrhimpg.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*yl7dfA0y7dmUo-xucIkVCQ.png){.img-fluid}

An interesting feature to note is that the `u` and `d` factors are reciprocals of one another. This means that going up in one step and then down in the next results in the same value as if you went down and then up.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*UWOJcNrtr3zPrgj2A6TESw.png){.img-fluid}

In fact, any combination of up/down/flat moves results in the same possible future value. This is called a recombining matrix, making the trinomial method fairly easy to visualize and calculate.

#### Step Two: Consider the Option

Step two is about factoring the choice the option represents into its value. There is no requirement that you exercise an option; it’s a right, not an obligation. So, if the option is a net positive we use that value; if it’s a net negative we walk away and the value is zero. Step two is simply about assessing the positive values and zeroing the rest.

Calculating exercise value is fairly simple: just subtract the proposed investment (called the Strike, or `K`) from that possible future value (the future Spot, called `Sn`) and take the difference or zero, whichever is greater. For instance, if the future value is $2 and the investment is $5 we’d lose $3 if we did that deal, but since we are under no obligation to buy we simply walk away. If instead the future value were $12 we’d make $7, and take that deal. Mathematically, we write this as:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*8yB419ax8RSccfxsH9hkOw.png){.img-fluid}

Simply apply that to every possible future value, and you have the total range of exercise value at the end of the option’s term.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*J-XkpOaoN5gWgJBAA59Zcw.png){.img-fluid}

#### Step Three: Calculate the Expected Value

Finally, we work from those potential future values back to the present. We are sequentially saying, “OK, if this is a future outcome, what does it look like right before that outcome?” Repeating this process back to time zero, we ultimately arrive at a single number that represents the value of the option today. Thus, in contrast to a traditional project where value is determined from a single future outcome, an option considers many different future outcomes, calculates their relative probability, and sums together their discounted expected values to get the current value.

Starting with the penultimate nodes, calculate these using the factors:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*KRAX8U3MeE0jb1Yt8ba8Hg.png){.img-fluid}

The equations here are the most complex, but in plain English they say, “multiply the exercise values by their expected value, and sum those results taking into account the time value of money at the risk-free rate `r`.”

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*HKOVcWLv8UXuWQr3TlxgMw.png){.img-fluid}

Continue calculating backward column by column, node by node, through the entire lattice.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*wOzoFoQ0UKk_d3ZnnviWug.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*u3ljB15UVl-u2xNbSyIuMA.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*cbPZHWiMHwmxismPfJUBQg.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*oGeqg6-yWd12QU4lp5Oqzw.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*yl7dfA0y7dmUo-xucIkVCQ.png){.img-fluid}
![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*cHlpdhnVAn1-UzLJftlImA.png){.img-fluid}

When you get back to the starting point, you have the current value of the option. This is the exact same approach that is used to value billions of dollars of American-style options on the Chicago Board of Exchange every day.

### Applied to Innovation

Conceptually, Innovation Options are similar to their traditional counterparts: they represent the right, but not the obligation, to make a future purchase at a fixed price, thus delaying the investment decision until more is known about the market. In the Innovation context, the investment decision is the answer to the question: ‘should we enter the market for this innovative product?’ Therefore the negotiated price--the Strike--is the investment we’d make to develop and market that product. Think of it as a Series A round--how much would you raise in a Series A for this idea? That is the Strike of an Innovation Option.

Next, we need to determine a Spot value. Normally we’d use a stock quote for the spot, but obviously there is no such quote available for our innovation project. However, we do know that if the option is exercised it will have cash in the bank--specifically, the cash provided by the exercise of the option itself. For example, if you exercised the option with a Strike of $50K and then immediately sold it, it could only be worth $50K since there has been no time to create any other value. Thus, we are able to approximate the starting point (the Spot) by making it equivalent to the Strike.

Next, we consider the term for the Innovation Option. The term can be any duration, but as a practical matter we want the option to represent the period during which we are gathering new market information so that we can make an informed decision about the Strike investment. It should be enough time for us to gather useful data while not being so long as to miss the opportunity for action. Typically, an Innovation Option term is anywhere from a month to a year, depending on the sector. In addition, it’s important to recognize that at the end of the option term we make the decision whether or not to exercise; therefore, it’s common to line up the term with other budgetary milestones (like quarter close, etc.)

Next, we consider the `sigma`. Like the Spot, the sigma is traditionally estimated through historical stock prices to which we don’t have access. However, with Innovation Options we do have access to other variables in the sigma equation that allow us to derive the sigma directly. Mathematically, we solve for sigma by:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*Aznb61VdkJYUFIN1Zi4ldQ.png){.img-fluid}

With this equation, K represents the known strike price; that’s the easy part.

`M` represents the maximum pre-money market value of the idea. There are two primary methods for estimating M. The default approach recognizes that the Strike is akin to a Series A investment in scope and risk; we’re seeking a particular amount of money as a first-raise to bring this product to market. Thus, we can use the bounds normally associated with Series A valuations to serve as a proxy for the range of pre-money exercise value.

While this may seem like a random constraint, Series A investments actually have a fairly narrow range of operation. For instance, even with can’t-miss ideas and repeat entrepreneurs an initial raise (with no product or traction) for a consumer internet play will rarely exceed a $100M valuation. Moreover, the valuations tend to cluster by sector--consumer internet would typically be a lower raise and valuation than a biotech play, for instance. Thus, Series A sector benchmarks approximate the market value for Innovation Options just as stock quotes approximate the sigma for a traditional asset.

Alternatively, firms with a history of investing in innovation projects can use their own internal valuation benchmarks for greater relevance. Simply find previously funded projects similar in scope and concept to the idea being considered, and use their original business plan valuations to create the boundary range. Note that you should consider all projects that were approved and funded--not solely the ones that were successful--to provide the complete picture of the value these ideas command within the firm.

In either case, you simply need to determine a maximum possible next-round valuation to solve for the sigma; the lower bound will always be zero, and is considered as part of the equation. Also, it’s worth mentioning that option is not highly sensitive to `M` at the early valuation stages. Sensitivity increases as the option approaches expiration, which allows for revised expectations as more information becomes available. Moreover, this means that you can’t game the initial value simply by increasing the `M`; the option intrinsically discounts the value of information the farther into the future you go.

This leaves us to estimate `i`, or the number of iterations during the life of the option. (`delta t` is solved by `term-in-years`/`i`). In the standard trinomial model, the number of iteration steps is arbitrary because the process is simply a simulation; generally about a dozen iterations suffices for a statistically significant result. However, with Innovation Options we don’t rely on simulated outcomes because we can run actual trials. In fact, that is the entire point of the option: to delay the investment decision until we know more about the market. Thus, with an Innovation Option it’s no longer the idea of “it could go up, it could go down, it could stay the same”--instead, it’s “it _did_ go up, it _did_ go down, it _did_ stay the same”, reflecting the actual value of the information gained during the option’s life.

It is important to note that since each iteration represents an assessment of where the idea stands against reality, each iteration must map to a real-world test of one of the idea’s core assumptions. This is called “validated learning”, and it means that our assessment must result from actual customer interaction rather than research or hypotheticals. Thus, the number of iterations should tie directly to the anticipated release cycle for prototypes and other minimal viable product releases. Release cycles themselves are generally related to the sector: again, in our consumer internet v. biotech example, the release cycle of the former is generally measured in weeks, while the latter might be months. Regardless, when constructing the option the number of expected iterations should be estimated in advance and used to calculate the sigma.

Thus, with an upper bound value `M` and a strike price `K`, the total iterations `i` and time period `delta t` we can approximate the sigma required by the other formulae.

#### Calculating the Return on Investment

At this point we have all the inputs and equations needed to construct an innovation option. To review, we need:

*   The amount of funding sought to bring the product to market (S, K)
*   The term of the option (t)
*   The iterations expected during that term (i)
*   The upper bound of the next-round valuation (M)
*   The risk-free rate (r)

From that, you first calculate the sigma:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*Aznb61VdkJYUFIN1Zi4ldQ.png){.img-fluid}

Then you build the lattice as follows:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*R3HNE8ORyiRt475x6yn7uQ.png){.img-fluid}

Determine the exercise payoff:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*8yB419ax8RSccfxsH9hkOw.png){.img-fluid}

And finally, calculate all expected values:

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*KRAX8U3MeE0jb1Yt8ba8Hg.png){.img-fluid}

You now have the option’s initial value. This represents the value in today’s dollars to determine the actual growth potential of the proposed investment. Thus, to calculate the Return on Investment (ROI) of the option we simply subtract the cost required to produce the market information we need to run our iterations. This cost is called the Premium, and it reflects the cost of the option itself (as opposed to the Strike, which represents the proposed future investment.) The difference between the option’s value and its premium is what I call the Option’s Present Value (OPV) and that is its ROI.

For example, let’s suppose we have an idea for a new consumer internet service, say a social network for pets. The idea would need an investment of $3M to bring the concept to market. We’d like to spend 90 days to gather market data to determine the answer, and expect to iterate once a week during that time. The upper bound Series A valuation is determined to be $100M, and the risk-free rate is 1% (current T-bill rate). The budget for the 90 days would be $90K, or $30K a month, fully-burdened.

![](https://innovation-options.s3.us-west-1.amazonaws.com/img/1*YmavgdQ2fXDNevz6WJ3h3Q.png){.img-fluid}

Using the Innovation Options model, we determine that the initial value of this option is $800K. However, since we’re only spending $90K, the option represents an ROI of $710K to the firm. It’s also worth noting that the option’s initial value represents the highest possible budget to explore the idea--anything more than that destroys value and has a negative OPV.

#### Measuring Progress

In addition to providing an initial ROI for the option, we can also use the model to measure progress. Recall that the lattice represents the range of possible future values, with each node being a combination outcomes to that point in time. Thus, within that range one of the combinations reflects reality. Or, returning to our storm tracker analogy, when the storm has passed it will have taken a path through the cone that was originally predicted. The path is within the cone; we just don’t know which path yet.

Thus, to estimate the value of the option at any given point in time we simply need to determine which path is real. Since each move represents the up/down/flat determination at each node, to deduce the current estimated value we only need to make periodic assessments relative to the prior iteration. Thus, determining progress reduces to a single, tractable question: “are we in a better, worse, or about the same position as we were before?” Remember, we’re not re-calculating anything; we’re just making assessments along the way which, in aggregate, tell us where we are.

This value estimation is directly related to the number of iterations `i` during the life of the option. The greater the number of possible nodes, the greater the fidelity in the possible future value. Thus, we’re encouraged to conduct as many iterations as possible to improve our value estimation. That said, there are practical limitations to how frequently you can iterate since each must represent a qualified assessment of actual market conditions for the result to be valid. Generally speaking, iteration speed is a function of the market sector: consumer internet ideas might be testable on a weekly basis, while hardware could take a month per release. Yet regardless of speed, it is absolutely critical that each assessment represent the result of actual market data and not conjecture or opinion. The whole point of the option is to inform the investment decision with market data; relying on speculation defeats the entire purpose of the exercise.

#### Advantages

Innovation Options have significant advantages over traditional cash-flow analyses such as Net Present Value (NPV). Most centrally, an options-based approach embraces the uncertainty associated with innovation. Considering a range of possibilities--including complete failure--is at the heart of the model. In contrast, an NPV-based analysis only considers a single outcome based on far-future forecasts that are highly suspect in uncertain markets.

In addition, options are dynamic, adjusting to new information as it becomes available. An NPV analysis is static--once the initial forecast is made it can’t be changed without calling into question the entire financial justification for the project. This also produces a moral hazard: any information that runs counter to the original assumptions tends to be discounted, minimized, or outright ignored in favor of the approved plan. Options encourage transparency because the plan is to gather information, both good and bad.

Also, options tend to be much faster to implement than other governance approaches. With an NPV profitability has to be included from the outset; otherwise there is a negative return and the project never gets approved. This leads to concepts like robustness and economies of scale that are misplaced priorities at the earliest innovation stages. Options encourage smaller steps, which reduce the overall variance (ie, the riskiness) of the project.

In short, options expect you to determine revenue, while NPV expects you to deliver revenue. For well-known products in established markets it is reasonable to use NPV because we somewhat-reliably predict the future. For unknown products in unknown markets with discontinuous innovation, NPV utterly fails.

### Limitations

Despite these advantages, it does not mean the Options model is perfect. As with any model, it is susceptible to GIGO: put garbage data in, and you’ll get garbage data out. The model is also substantially more complex than linear approaches. Terms such as sigma and the natural logarithm are not as straightforward as NPV’s method of subtracting current costs against future profits.

Also, while not strictly speaking a limitation, it’s worth noting here that the derived sigma of an Innovation Option is not equatable to a traditional sigma. In a traditional option, the sigma represents the volatility of the underlying security, which is independent of the option itself. In contrast, an Innovation Option’s sigma is calculated from the number of iterations in the option, making the sigma a direct function of the option. (Special thanks [Florian Müller](https://medium.com/u/1efc1730d7ff) for helping me understand this vital distinction.) Thus, the option’s initial value is highly sensitive to the number of iterations, which can be used to game the outcome. Care should be taken to ensure the number of expected iterations is fair and reasonable for the sector.

Similarly, one can manipulate value simply by choosing a higher target raise amount. A higher raise implies a higher valuation, all other variables equal. Still, practical reality bounds the theoretical: in the real world, investment amounts (and related valuations) fall within envelopes that are correlated to the industry sector. For instance, consumer internet software plays tend to require less up-front capital and thus have lower raise amounts and valuations relative to sectors like biotech, which have larger needs and correspondingly larger valuations. Thus, the nature of the idea (and its sector) tend to constrain to a particular fundraising target which itself then reflects a particular valuation range.

In general, the way to address these limitations is to be as honest as possible in inputs and assessments. Again, while NPV-style investments discourage any information that runs counter to the initial forecast, options encourage the reality whatever it may be. If an NPV investment doesn’t provide a return, it fails. In contrast, an option only fails if it reaches the wrong conclusion. Thus, the former encourages confirmation bias while the latter encourages truth, for good or ill.

### Summary

Options are necessarily more complex than traditional investments. While the former must consider a range of possibility the latter only has one reality to manage. Still, when facing uncertain markets the option approach is the superior choice. It changes our valuation process from divination to discovery. If we decide to exercise the option and pursue the opportunity, then we can have confidence that evidence and not supposition drove that decision. And, if the eventual conclusion is that the option should not be exercised it has still served its purpose; we can put scarce resources to better, more productive use. Either way, we do not have to make our most critical decision at the precise moment we have the least amount of information. Instead, we can value our discovery efforts by demonstrating the Return on Investment from the perspective of the optionality those efforts represent.