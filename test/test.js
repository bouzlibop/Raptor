exports.testSomething = function(test){
    test.expect(2);
    test.ok(true, "this assertion should pass");
    test.equal(2, 2, "numbers should be equal");
    test.done();
};