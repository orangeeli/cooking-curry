(()=> {

  'use strict';

  const assert = require('chai').assert,
    curry = require('../curry');

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

  });

})();