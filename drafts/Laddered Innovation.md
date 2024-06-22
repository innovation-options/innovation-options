# Laddered Innovation



At a basic level, finance is charged with deciding where to apply the firm’s limited resources.  If your goal is profit maximization, and are forced to choose between competing ideas, then of course ROI is the right metric on which to base those decisions.  To finance, it’s nonsensical to pursue something that isn’t expected to make as much money as another choice, and it’s utter lunacy to use resources on ideas expected to lose money.  


I’ve written extensively about Innovation Options, but here’s a quick primer: an option represents the right, but not the obligation, to make future transaction at a set price.  They delay investment decisions until more is known about the market.  A common example is a mortgage rate lock:  home buyers can lock in their interest rate at a specific point.  If rates go up, they pay the locked rate.  If rates go down, they ignore the lock and take the cheaper rates.  It removes all the uncertainty about interest-rate fluctuation and allows them to search for a house without having to worry that rates will rise while they look.  This is one example, but options are used extensively throughout markets as a way to cost-effectively handle uncertainty.  Innovation Options serve this purpose for the uncertainty surrounding discontinuous innovation.

In this case, every idea represents an Innovation Option with a pre-defined expiration date and (relatively) small set of resources to spend, with a larger growth funding amount available for exercise.  During the Option’s life, the spending resources are not used to scale the idea, but are expressly intended for small-scale testing.  We want to get market-validated information on that idea’s potential.  Then, at Option expiration, we need to make a decision:  based on what we’ve learned during testing, do we exercise the option, accept the growth funding, and pursue the idea further (GO)?  Or do we let the option expire, reject spending the growth funding, and not pursue the idea (NO-GO)?  Thus, the option forces a specific Positive or Negative decision, but with the benefit of actual market testing.

Yet that isn’t the end of it.  As with standard statistical testing, our main objective should be to identify and minimize error and focus on what’s true.  With an option-based approach, this is fairly straightforward.  If the option was exercised, was the idea successful?  Did it produce the predicted returns?  If so, it’s a Success — True Positive.  If not, it was a Failure — False Negative.  So far, this looks exactly like traditional assessments, but with the benefit of market testing.

For expired options, it’s a bit more difficult since we must look outside the firm for the answer.  However, the basic heuristic is, did some other competitor/entrant produce returns with the same idea?  If not, it’s an Opportunity Benefit True Negative — we correctly passed on the idea.  Otherwise, it’s an false Opportunity Cost False Negative, we considered the idea and missed it.  These assessments are, necessarily, subjective.  Still, in most cases the results are obvious enough for us to make uncontroversial assessments about the actual results.

In any case, the assessments themselves should be bounded within a particular observation window.  For innovation options, this period should be equal to the duration of the option itself.  So, for instance, if the option had a term of three months, then the assessment should be conducted three months after the term expired.  
![]()
This approach is particularly useful when considered as part of a “laddered portfolio” of options.  Here, multiple options are staggered through time, each with a roughly equidistant expiration date.  This approach lowers the overall risk in rapidly evolving technology and markets since we remove market timing from the equation.    

Consider the following laddered portfolio: if the underlying technology makes a significant shift in the latter part of the year, the laddered portfolio will catch it, where the “one and done” will miss.  
![]()

Moreover, using a binary classification approach allows us to take advantage of that discipline’s toolset.  For instance, firms may wish to view their entire innovation portfolio through time as a confusion matrix, a classification layout used to adjust supervised machine learning algorithms.  Or, emphasis can be placed on particular statistics according to the firm’s innovation risk policy.  Want to focus on not missing opportunities?  Focus on a low False Negative Rate.  Prefer to pursue fewer opportunities with a stronger likelihood of success?  Precision is your stat.  Want a good balance?  Choose Specificity and Sensitivity, or Accuracy.  The main point is that we can drive towards a particular outcome by measuring our activity in a consistent and predictable manner and align our corporate governance accordingly.


