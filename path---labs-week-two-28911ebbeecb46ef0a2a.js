webpackJsonp([0xf9e7bfb84156],{344:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Bondor",author:"Stephen Bondor"}},markdownRemark:{id:"/Users/bondor/Desktop/Lambda/Projects/blog/src/pages/2019-2-21-labs-week-one/index.md absPath of file >>> MarkdownRemark",html:'<h2>Part 1 - Individual Accomplishments this Week</h2>\n<h4>Your team’s github contribution graph here and indicate your Github</h4>\n<p><a href="https://github.com/StephenBondor">StephenBondor</a></p>\n<p><a href="https://github.com/Lambda-School-Labs/labs-team-home/graphs/contributors">Team Contribution Graph</a></p>\n<h4>This week</h4>\n<p>This week we began the process of refactoring and then adding to the code base we inherited from the previous labs team. Our new deploy is <a href="https://team-home-2.netlify.com/">here</a>. </p>\n<h4>Tasks Pulled</h4>\n<blockquote>\n<p>List the tasks you pulled this week, and provide a link to the successfully merged PR completing that task and the trello card for that task. You must have at least one front end and one back end. The expected total is 6 with a minimum of 4.</p>\n</blockquote>\n<p><strong>Ticket 1</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/278">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 2</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/279">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 3</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/280">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 4</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/284">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 5</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/290">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 6</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/292">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 7</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/295">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 8</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/302">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 9</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/307">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 10</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/309">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<p><strong>Ticket 11</strong>\n<a href="https://github.com/Lambda-School-Labs/labs-team-home/pull/314">Github</a>\n<a href="https://trello.com/b/Ir0KPUDw/labs10-team-home-2">Trello</a></p>\n<h4>Detailed Analysis</h4>\n<blockquote>\n<p>Pick one of your tickets and provide a detailed analysis of the work you did. This should be approximately ¼ page of text, and at least three screenshots.</p>\n</blockquote>\n<h5>Code Deprecation, Refactoring, and Standardizing</h5>\n<p>So, this is not going to be pretty. Instead of choosing one pull request, I will be referring to many of the early pull requests this week that comprise many different issues which I hope to shed light on, that all flow from the topic of refactoring inherited code. </p>\n<p>But first, a few caveats. </p>\n<p>This code works. Full stop. It’s not without its bugs, just like any other code, but it <em>works</em>. So, before we jump into the refactoring this context needs to be in place. On top of that, their are extra-curricular circumstances I do not know, but, given the circumstances of this project—circumstances that my team and I have seen thus far ourselves—we must assume that this pervious code was written under stress, with little time, and suffering from all communication issues inherent in all computer or internet based channels. To be clear, the fact that this code was shipped, in an of itself, is awesome. </p>\n<p>But lets dive in. </p>\n<h6></h6>\n<p>![Specimen #1](Screen Shot 2019-02-15 at 2.00.15 PM.png)<em>Specimen #1</em></p>\n<p>This is what it is like trying to understand code you have no idea about. I can not even speak to the validity of these comments as they were written but that is a part of the process. Most of the week felt like this:</p>\n<p><img src="https://abstrusegoose.com/strips/you_down_wit_OPC-yeah_you_know_me.png" alt="Other peoples code"></p>\n<p>But there is no other way to do it to learn the frameworks needed.</p>\n<h2>Part 2</h2>\n<blockquote>\n<p>As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences forming a team. What did you do to help the team solidify as a group? What did you do that you now realize caused friction in this process? What are you doing personally to make sure that everyone on the team, including you, has a voice in decision making?\nAs a group, provide links to evidence that:\nFront and back end servers are connected\nUsers can create accounts and log in through the front end via OAuth\nAll APIs and services are connected and can be interacted with through the front end. A test message is acceptable to meet this requirement</p>\n</blockquote>\n<p>In pursuit of this end I am writing this blog post.</p>\n<p>This week was a difficult week. We spent most of the week trying to make up the technical debt we inherited from a project built on graphQL and mongoDB, two frameworks which no one in our group understood on Monday. However, here on Friday, I have deployed this very blog using graphQL.</p>\n<h3>What Am I Doing?</h3>\n<p>As the self-proclaimed team organizational lead, last week, I took it upon myself to assign roles in our group and attempt to divide labor up and define rolls. I also lightly influenced the composition of our team by recruiting some of the best developers in our program in the fields our team composition may have been lacking in.</p>\n<h3>TDD</h3>\n<p>As a group we (mostly my awesome team) authored our Technical Design Document on Monday and Tuesday, to meet our specifications. My personal contribution to this was giving the final read over and presenting the document and our plan to our Client in a 15 minute (ish) presentation.</p>\n<p>In preparation for this, we played around with competitive products and got a feel for the kind of experience we were tasked with building.</p>\n<p>We were accepted immediately, and moved onto development.</p>\n<h3>Study</h3>\n<p>Upon gaining access to the repository, we began the long slog up hill trying to wrap our heads around the entirely foreign tech stack we now had to digest in days. In pursuit of this, much of time I spent this week was working through <a href="https://www.howtographql.com/basics/2-core-concepts/">this tutorial</a> on graphQL, which is excellent.</p>\n<h3>Deploy</h3>\n<p>It took us Tuesday Wednesday and Thursday to re-deploy the app (and rebuild our understanding) but we got it done.</p>\n<p><a href="http://team-home-2-graphql-mongodb.herokuapp.com">Server</a></p>\n<p><a href="http://team-home-2.netlify.com">Front End</a></p>\n<p>Unfortunately, issues with Auth0 have been preventing us from logging in. We haev created a few work around solutions — including depricating all the authentication logic and code (yikes) — but we hope to soon find a solution here.</p>\n<p>Seeing as how this project was given to us as a completed project, we did not need to build or touch any of the user models.</p>',excerpt:"Part 1 - Individual Accomplishments this Week Your team’s github contribution graph here and indicate your Github StephenBondor Team Contribution Graph This week This week we began the process of refactoring and then adding to the code base we inherited from the previous labs team. Our new deploy is  here .  Tasks…",frontmatter:{title:"Labs Week Two",date:"21st February 2019",path:"/labs-week-two"}}},pathContext:{}}}});
//# sourceMappingURL=path---labs-week-two-28911ebbeecb46ef0a2a.js.map