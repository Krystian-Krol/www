import { fib } from "./program";

import { expect } from "chai";

import "mocha";


describe("Fibonacci", () => {

    it("should equal 0 for call with 0", () => {

        expect(fib(0)).to.equal(0);
        expect(fib(1)).to.equal(1);
        expect(fib(2)).to.equal(1);
        expect(fib(3)).to.equal(2);
        expect(fib(4)).to.equal(3);

    });

});
