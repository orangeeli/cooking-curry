(()=> {

  'use strict';

  const assert = require('chai').assert,
    curry = require('../curry'),
    _ = require("lodash"),
    plumber = require('gulp-plumber');

  describe('Cooking curry', ()=>{
    it("should return 10 when on (9)(1): Arity 2", ()=>{

      let result = curry((a,b)=>a+b)(9)(1);

      assert.equal(result, 10);
    });

    it("should return 13 when on (9)(1)(3): Arity 3", ()=>{

      let result = curry((a,b,c)=>a+b+c)(9)(1)(3);

      assert.equal(result, 13);
    });

    it("should return 14 when on (9)(1)(3)(2): Arity 4", ()=>{

      let result = curry((a,b,c,d)=>a+b+c+d)(9)(1)(3)(2);

      assert.equal(result, 15);
    });

    it("should return y when on (x)*n: Arity n", ()=>{

      const maxArgs = Math.floor(Math.random() * 11),
        args = [];

      for(let i = 0; i<maxArgs;i+=1){
        args.push(Math.floor(Math.random() * 12));
      }

      const expected = _.reduce(args, (sum, n)=>sum + n, 0);

      function *createIterator(curried, args) {
        for (let i = 0, length=args.length; i < length; i+=1) {
          yield curried(args[i]);
        }
      }

      let curried = curry(a=>_.reduce(a, (sum, n)=>sum + n, 0)),
        result = 0,
        iterator = createIterator(curried, args);

      for (let value of iterator) {
        result+=value;
      }

      assert.equal(expected, result);
    });

  });

})();