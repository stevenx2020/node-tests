const utils = require('./utils.js');
const expect = require('expect');

it("should add two number", () => {
    let result = utils.add(13,30);
    expect(result).toBe(43);
});

it("should sqare a number", () => {
    let res = utils.square(15);
    expect(res).toBe(225);
})