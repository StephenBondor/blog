---
title: "Labs Week Five"
date: "2019-03-15"
path: "/labs-week-five"
---

## Part 1 - Individual Accomplishments this Sprint

> > Provide a paragraph (5-8 sentences) summarizing the work you did over the course of this sprint, including the challenges you faced, the tools you used, and your accomplishments
> > Detailed Analysis
> > Pick one of your tickets and provide a detailed analysis of the work you did. This should be approximately ¼ page of text, and include screenshots if appropriate

This week was the last week of Lambda Labs. For this week, we focused on finalizing the project and getting it up to a production level public deployment level of readiness. Most of the challenges faced this week were smaller and related to finalization. However, over the weekend, we did encounter one rather large issue. When a user was added to a team, their user name and email address would appear in the front end graphQL query resolution for about 5 seconds, and then the users info would vanish... but there would still be a user present, only their user info would now be "Null Null" @ "Null". Consequently, we dubbed this error the null null null bug.

At first it seemed obvious that it was a front end error. Somewhere, we must have been over writing something or unnecessarily re-rending a component. However, as we `console.log`ed everything to death, we were lead to a strange graphQL behavior. But as we dug into that, by trying to refactor to `optimisticResponse` and `subscriptions` we soon learned that it could not be a problem with our gql implementation, and had to be an issue with the database itself.

We came to realize that the null null null bug was a result of calling upon graphQL and Mongo exactly as they perform when calling and dealing with a relational database. Only, we were not dealing with a relational database, but a hack of one. We failed to plumb the depths of the refactoring we needed to do in the 5 weeks alloted to us. To fix the null null null bug would require us to refactor the **entire** code base.

So what did we learn here? I could say, "do not trust the inherited code", but it worked for the previous team, which puts one in a bit of a bind--considering the nature of the project was to reuse the foundation. In this light, the previous team made a house, and they made it well enough to build a house. Our team was given that house, and told that we need to build a skyscraper using the same foundation. And that does not scale.

To refactor the entire code base would take another 2 weeks. And we already know we would then again have to refactor the graphQL implementation.

> Part 2 - Weekly Reflection
> As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to bring an application to completion. The 90-90 rule is a quip referencing the very real difficulty of truly completing a project. Describe some of the final tasks that were the most difficult for your team to resolve - challenging bugs, layout and presentation woes, or anything else that was easy to get mostly working, but hard to get perfect.

See above.
