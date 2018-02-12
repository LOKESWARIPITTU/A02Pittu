// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing matcheslost function with several sets of inputs', function (assert) {
    assert.equal(valid(-1), 0, 'Tested the givenMatches argument with negative number and it will be set to zer0');
    assert.equal(valid(-1), 0, 'Tested the givenWon argument with negative number and it will be set to zer0');
    assert.equal(valid(200), 0, 'Tested the givenMatches argument with positive number greater than 100 and it will be set to zer0');
    assert.equal(valid(500), 0, 'Tested the givenWon argument with positive number greater than zero and it will be set to zer0');
   
        //throws( block                                    [, expected ] [, message ] ) 
  // assert.equal(App.calculateSeats(null), 0, 'Tested with missing or invalid arguments, will be set to 0.');
  // assert.equal(App.calculateSeats('abcd', 'efgh'), 0,'Tested with two string arguments will be set to 0.');
 //assert.equal(App.calculateSeats(2.4, 3.5), 0, 'Tested with two string arguments . will be set to 0.');
   assert.throws(function () {valid(7.8); }, 'The given argument is not a number Passing in floats will correctly raises an Error');
   assert.throws(function () {valid(7.8); }, 'The given argument is not a number Passing in floats will correctly raises an Error');
        //throws( block                                    [, expected ] [, message ] ) 
    //assert.throws(function () { App.calculateSeats("Christine","Christine"); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

