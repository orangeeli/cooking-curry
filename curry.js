((mod)=> {

  "use strict";

  mod.exports = function cook(f, args=[]) {
    // TODO : update to node6 http://node.green/ to have default parameters support
    // Once the number of arguments is the same as of the original function, call the function.
    if (args.length === f.length){
      return f(...args);
    } else {
      return function(a){
        let args_copy = args.concat(...arguments);
        return cook(f, args_copy);
      }
    }
  };

})(module);
