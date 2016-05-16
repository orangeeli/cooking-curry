((mod)=> {

  "use strict";

  mod.exports = function cook(f, args) {
    args = args || [];

    // Once the number of arguments is the same as of the original function, call the function.
    if (args.length === f.length){
      // Just passing null because the context is not important
      return f.apply(null, args);
    } else {
      return function(a){
        let args_copy = args.concat.apply(args, arguments);
        return cook(f, args_copy);
      }
    }
  };

})(module);
