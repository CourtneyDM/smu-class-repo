const multiply = require("../src/multiply");
const should = require("chai").should();

describe("Multiply", function () {
    it("should return the product of x and y when x and y are numbers",
        function () {
            multiply(60, 2).should.equal(120);
        },
        function () {
            multiply(60, "chair").should.throw(Error);
        })
});