const expect = require("chai").expect;
const disemvowel = require("./disemvowel");

describe("Disemvowel", function () {
    it("should remove all vowels from lowercase strings", function () {
        expect(disemvowel("courtney")).to.equal("crtny");
    });

    it("should remove all vowels from uppercase strings", function () {
        expect(disemvowel("COURTNEY")).to.equal("CRTNY");
    });

    it("should remove all vowels from mixed strings", function () {
        expect(disemvowel("Courtney")).to.equal("Crtny");
    });

    it("should remove all vowels from mixed strings", function () {
        expect(disemvowel("COURTNEY")).to.equal("CRTNY");
    });

    it("should cast numbers to strings", function () {
        expect(disemvowel("COURTNEY1")).to.equal("CRTNY");
    });
});