var test = require('tap').test;
var sentiment = require('../../lib/index');

// var dataset = ['Cats are stupid.'];
// sentiment(dataset, function (err, result) {
//     test('asynchronous positive', function (t) {
//         t.type(result, 'object');
//         t.equal(result.score, -6);
//         t.equal(result.comparative, -1.5);
//         t.equal(result.tokens.length, 4);
//         t.equal(result.words.length, 2);
//         t.end();
//     });
// });

var dataset = ['Cats are stupid.', 'en'];
sentiment(dataset, function (err, result) {
    test('asynchronous positive', function (t) {
        t.type(result, 'object');
        t.equal(result.score, -2);
        t.equal(result.comparative, -0.6666666666666666);
        t.equal(result.tokens.length, 3);
        t.equal(result.words.length, 1);
        t.end();
    });
});

// dataset = ['Katzen sind dumm.', 'de'];
// sentiment(dataset, function (err, result) {
//     test('asynchronous positive', function (t) {
//         t.type(result, 'object');
//         t.equal(result.score, -6);
//         t.equal(result.comparative, -1.5);
//         t.equal(result.tokens.length, 4);
//         t.equal(result.words.length, 2);
//         t.end();
//     });
// });
//
// dataset = ['El gato es estúpido.', 'es'];
// sentiment(dataset, function (err, result) {
//     test('asynchronous positive', function (t) {
//         t.type(result, 'object');
//         t.equal(result.score, -6);
//         t.equal(result.comparative, -1.5);
//         t.equal(result.tokens.length, 4);
//         t.equal(result.words.length, 2);
//         t.end();
//     });
// });
//
// dataset = ['Le chat est stupide.', 'fr'];
// sentiment(dataset, function (err, result) {
//     test('asynchronous positive', function (t) {
//         t.type(result, 'object');
//         t.equal(result.score, -6);
//         t.equal(result.comparative, -1.5);
//         t.equal(result.tokens.length, 4);
//         t.equal(result.words.length, 2);
//         t.end();
//     });
// });
