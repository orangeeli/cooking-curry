[![Build Status](https://travis-ci.org/orangeeli/cooking-curry.svg?branch=master)](https://travis-ci.org/orangeeli/cooking-curry) [![Code Climate](https://codeclimate.com/github/orangeeli/cooking-curry/badges/gpa.svg)](https://codeclimate.com/github/orangeeli/cooking-curry)

# Cooking Curry
This is a small project to play around with function currying. The original code can be found [here](https://gist.github.com/lovasoa/e9c51b84ead1ae0b2659).
I've just made a few changes to improve readability:

1. Replaced the first _if_ ~~for the logical _OR_~~ ES6 default parameter.
```javascript
function cook(f, args=[]) {
# args = args || [];
(...)
}
```
2. Removed the *context* argument. I just wanted to _curry_ the function without thinking about which scope I'm working with.
3. You'll [node 6](http://node.green/) to run this project.

## A bit of context

Function Currying is a technique where you can take a function with _n_ arguments and transform it into a series of functions (n to be precise) with arity 1.
The technique is named after his [Haskel Curry](https://en.wikipedia.org/wiki/Currying), according to Wikipedia, still have to confirm this with more sources.
[Haskell has this for free](https://wiki.haskell.org/Currying) for every function. I'm still trying to figure out a use case for this technique because
every use case that I thought I was using Currying, I was actually using Partial Application or just creating a clojure to
to return a function that has access to that scope.

The difference between partial application and Currying is that with partial application you take a function with _n_ arguments and you transform it into a function with fewer arguments.
In javascript this can be achieved, for example, with the [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Partially_applied_functions) operator.

As for the clojure example, the use case I had was the handling of the error function when working with Parse's javascript SDK promises.
Again, in order to improve code readability, instead of writing the callback function directly as one of the arguments of the _then_, I wrote something like this

```javascript
function handleError (res, message) {
  return function (error) {
    res.json(`${message} ${JSON.stringify(error)}`);
  }
};
```

Still have to figure out a use case for Function Currying, yet in the mean time I have this small project to play around with the technique and understand a little bit more.

# Sources

* [Currying versus partial application (with JavaScript code)](http://www.2ality.com/2011/09/currying-vs-part-eval.html)
* [Wiki Haskell](https://wiki.haskell.org/Currying)
* [Curry or Partial Application](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.9dqgkijhv)

## License
[MIT License](http://www.opensource.org/licenses/mit-license.php)

**[Follow me (@orangeeli) on Twitter!](https://twitter.com/orangeeli)**