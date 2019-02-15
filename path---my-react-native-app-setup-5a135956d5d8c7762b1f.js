webpackJsonp([74319695738375],{354:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Pav Sidhu",author:"Pav Sidhu"}},markdownRemark:{id:"/Users/bondor/Desktop/Lambda/Projects/blog/src/pages/2017-02-05-my-react-native-app-setup/index.md absPath of file >>> MarkdownRemark",html:'<p>2017 will mark a huge milestone for me because I will release my first app for iOS and Android. My strong passion for programming, improving education and helping others led to the release of my website, Revisify, a free to use study tool for students. After 2 years of maturing the website, I plan on delivering the same experience on mobile.</p>\n<p>I want to document my process of building the Revisify app so that others who are building their first React Native app too will be able to refer to my process. If you’re interested in why I chose React Native over traditional development, <a href="https://blog.revisify.com/5-reasons-why-i-chose-react-native-over-traditional-app-development-3de18e208b8a#.m0wqbypjm">I talk about it here</a> however in this post I will be showing you the libraries that I am using to build the Revisify app.</p>\n<h2>Data management: Redux, Redux-Saga</h2>\n<p>The most popular library for implementing the <a href="https://facebook.github.io/flux/">Flux</a> application architecture is currently <a href="http://redux.js.org/">Redux</a> (If you don’t understand Flux and Redux you can <a href="https://blog.revisify.com/using-redux-with-react-native-9d07381507fe#.oku5fl6xp">read about it here</a>). I started learning <a href="https://github.com/reflux/refluxjs">Reflux</a> but moved over to Redux as the official documentation is excellent and the development of other libraries such as <a href="https://github.com/reflux/refluxjs">Reflux</a> is slowing down.</p>\n<p>Redux does not have the functionality to pull data from an API so there are libraries to help you do that. I began using <a href="https://github.com/gaearon/redux-thunk">Redux-Thunk</a> since it was easier to understand than the alternative <a href="https://github.com/redux-saga/redux-saga">Redux-Saga</a> however I switched over to using Sagas for multiple reasons. It was clear from starting to use Redux-Thunk that it would quickly become a mess to manage and test, especially since my app relies heavily on API calls. Redux-Saga has kept my code organised and easy to understand as well as made it simple to test. Unless your app barely relies on an API I would recommend taking the time to learn Sagas.</p>\n<h2>Forms: Validate.js</h2>\n<p>Most if not all apps have forms somewhere which is why it’s important to validate the inputted data. When looking around for a React Native solution I didn’t find anything. Thankfully one of the advantages of React Native is that apps are programmed in Javascript, meaning that there are already libraries that help you to do a load of stuff. One of those libraries is <a href="https://validatejs.org/">validate.js</a> (it only takes up a tiny 4.56KB). Validate.js simply allows you to define validation rules and error messages to different fields in your form. I plan on writing a post in the future to outline my process of implementing it into a React Native app.</p>\n<h2>Testing: Jest</h2>\n<p>I really love <a href="https://facebook.github.io/jest/">Jest</a> due to its simplicity and ease of understanding. Jest works by creating a ‘snapshot’ of your components. If you update the component and generate a new snapshot of it, Jest will compare the old and new versions and ask you if the changes are intended or not. Like React Native, Jest is also built my Facebook, so there is <a href="https://facebook.github.io/jest/docs/tutorial-react-native.html#content">good documentation</a> for implementing it into your app.</p>\n<h2>Conclusion</h2>\n<p>Something which I have learnt from building the Revisify website is that it is important to use the right tools and libraries when initially building your application since you’ll have to use it for a long time. If you want to make your development easier use the right tools at the beginning. Your future self will love you for it.</p>',excerpt:"2017 will mark a huge milestone for me because I will release my first app for iOS and Android. My strong passion for programming, improving education and helping others led to the release of my website, Revisify, a free to use study tool for students. After 2 years of maturing the website, I plan on delivering the…",frontmatter:{title:"My React Native App Setup",date:"5th February 2017",path:"/my-react-native-app-setup"}}},pathContext:{}}}});
//# sourceMappingURL=path---my-react-native-app-setup-5a135956d5d8c7762b1f.js.map