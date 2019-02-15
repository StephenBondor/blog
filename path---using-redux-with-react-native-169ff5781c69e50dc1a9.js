webpackJsonp([0x76a714d614d7],{357:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Pav Sidhu",author:"Pav Sidhu"}},markdownRemark:{id:"/Users/bondor/Desktop/Lambda/Projects/blog/src/pages/2017-01-30-using-redux-with-react-native/index.md absPath of file >>> MarkdownRemark",html:'<p>I’m in the middle of developing a React Native app — Revisify. Originally starting as a website to help students prepare for their exams, I’m currently moving the experience over to mobile. As this is my first React Native app, getting my head around new ideas has been challenging. The hardest thing for me since I started has been understanding Flux and Redux. Since React Native and Redux are fairly young (about 2 years old), there is not a lot of resources on the subject, so today I’ll give you my thoughts on implementing Redux into your application.</p>\n<h3>What is Flux/Redux?</h3>\n<p><a href="https://facebook.github.io/flux/">Flux</a> is a pattern which Facebook created to manage the data of an application. Flux is <strong>not</strong> a library, it’s just an idea.</p>\n<p><a href="http://redux.js.org">Redux</a> is one of many Javascript libraries that help you create applications using the Flux architecture.</p>\n<h3>Why should you use Flux in the first place?</h3>\n<p>When learning about Redux, I didn’t understand why I should use it. To make it straightforward for you here’s a few reasons why you may want to use Redux:</p>\n<ul>\n<li>\n<p>It makes managing data and understanding data flow in your application much easier since data can only be send one way (unidirectional) rather than being like a mess, like spaghetti.</p>\n</li>\n<li>\n<p>Data that needs to be accessed in multiple parts of your application such as the user’s details can be stored easily in one place</p>\n</li>\n</ul>\n<p>If your app is very basic, you probably don’t need Redux, it all depends on your app and it’s features. Hopefully, by the end of this post, you’ll be able to understand whether Redux is for you.</p>\n<h3>How does Redux work?</h3>\n<p>Redux has one big object that contains all the data you choose to store called the <strong>state</strong>. The state for a note taking app could look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n user<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n   name<span class="token punctuation">:</span> <span class="token string">\'John Smith\'</span><span class="token punctuation">,</span>\n   age<span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">,</span>\n   email<span class="token punctuation">:</span> <span class="token string">\'john_smith1@gmail.com\'</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span><span class="token punctuation">,</span>\n notes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n   <span class="token string">\'remember to take the washing out\'</span><span class="token punctuation">,</span>\n   <span class="token string">\'pick up some apples on the way home\'</span><span class="token punctuation">,</span>\n   <span class="token string">\'give Jane a call\'</span>\n <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can see that there is information about the user using the app such as his name and also a list of notes that have been created. I like to think of the the state as a database.</p>\n<p>One thing which confused me was the fact that Redux state and React components state were 2 different things, just with a different name. Remember the Redux state is a way to store data whereas a React component’s state has nothing to do with Redux and simply keeps track of data which can change within a component.</p>\n<p>To manage the data in the Redux state, we have 3 things: actions, reducers and stores.</p>\n<ul>\n<li>\n<p><strong>Actions</strong> can be sent when a user presses a button, load an app, etc. They can contain information that you want to add to the state.</p>\n</li>\n<li>\n<p><strong>Reducers</strong> listen for actions. When it hears that an action has been sent to it, it updates the state.</p>\n</li>\n<li>\n<p><strong>The Store</strong> holds the Redux state and allows access and modifications to it. It’s the middleman between actions and reducers.</p>\n</li>\n</ul>\n<p>To explain what each of these does, let’s pretend we have an app with a button and a counter. Every time the user presses the button, the counter goes up by one. So if we were to build this app using Redux here is how it would work.</p>\n<ol>\n<li>The user presses the button, sending (or better known as ‘dispatching’) an action</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token comment">// this.props.count comes from the Redux state</span>\n      <span class="token operator">&lt;</span>Text<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>\n\n      <span class="token comment">// This.props.addToCounter() is a function to update the counter</span>\n      <span class="token operator">&lt;</span>Button onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">addToCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n        Click Me<span class="token operator">!</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This function provides a means of sending actions so that data in the Redux store</span>\n<span class="token comment">// can be modified. In this example, calling this.props.addToCounter() will now dispatch</span>\n<span class="token comment">// (send) an action so that the reducer can update the Redux state.</span>\n<span class="token keyword">function</span> <span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    addToCounter<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addToCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This function provides access to data in the Redux state in the React component</span>\n<span class="token comment">// In this example, the value of this.props.count will now always have the same value</span>\n<span class="token comment">// As the count value in the Redux state</span>\n<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>When <code class="language-text">this.props.addToCounter()</code> is called, it calls the action below:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// We specify the name of the action as a variable</span>\n<span class="token keyword">const</span> ADD_TO_COUNTER <span class="token operator">=</span> <span class="token string">\'ADD_TO_COUNTER\'</span>\n\n<span class="token comment">// This is an action creator, it simply specifies the action.</span>\n<span class="token comment">// this is what we call to send an action.</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addToCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> ADD_TO_COUNTER<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>A reducer hears the action <code class="language-text">ADD_TO_COUNTER</code> has been sent and adds 1 to the value of <code class="language-text">counter</code> in the state</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span>ADD_TO_COUNTER<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./actions\'</span>\n\n<span class="token comment">// This is the default state of the app i.e. when the app starts for the first time</span>\n<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  counter<span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This is a reducer which listens to actions and modifies the state</span>\n<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// A switch is used since if more actions are added in the future, it will be easy</span>\n  <span class="token comment">// to be able to handle this in the reducer since we just add another \'case\'.</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> ADD_TO_COUNTER<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        counter<span class="token punctuation">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state\n</code></pre>\n      </div>\n<ol start="4">\n<li>As the state has been updated, the value of ‘this.props.counter’ in the React component is automatically updated to show that the button has been pressed.</li>\n</ol>\n<p>It’s quite straightforward once you get the hang of it. One thing I did not mention was the store. The store is something you setup and not need to worry about after. Here is how you should implement it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">\'./reducer\'</span>\n\n<span class="token comment">// This connects the reducer to the store</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> store\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>As I said before, the store ties together actions and reducers. When you send an action using <code class="language-text">this.props.addToCounter()</code> you’re actually calling <code class="language-text">dispatch(addToCounter())</code> (this is because we set this up in <code class="language-text">mapDispatchToProps())</code>. The dispatch function comes from the store behind the scenes. The reducer is used when creating the store as you can see in the above code snippet.</p>\n<p>The last thing you need to do now is include the store into your application:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span>\n\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./app\'</span>\n\n<span class="token keyword">import</span> configureStore <span class="token keyword">from</span> <span class="token string">\'./store.js\'</span>\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyCounterApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token comment">// &lt;Provider> allows us to access the store for dispatching actions and receiving data from</span>\n      <span class="token comment">// the state in it\'s children i.e. &lt;App/></span>\n      <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'MyCounterApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> MyCounterApp<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>And there you have it! There is a lot more to talk about such as containers vs components, keeping the state available in storage and retrieving data to and from an API using Redux but that I think that would be a lot of content to digest at once, I will leave that for another post.</p>',excerpt:"I’m in the middle of developing a React Native app — Revisify. Originally starting as a website to help students prepare for their exams, I’m currently moving the experience over to mobile. As this is my first React Native app, getting my head around new ideas has been challenging. The hardest thing for me since I…",frontmatter:{title:"Using Redux with React Native",date:"30th January 2017",path:"/using-redux-with-react-native"}}},pathContext:{}}}});
//# sourceMappingURL=path---using-redux-with-react-native-169ff5781c69e50dc1a9.js.map