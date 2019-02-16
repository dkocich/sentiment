const test = require('tap').test;
const Sentiment = require('../../lib/index');
const sentiment = new Sentiment();

const input = 'This is so cool';

sentiment.registerLanguage('xx', {
    labels: { 'cool': 5 }
});

sentiment.analyze(input, { language: 'xx' }, function (err, result) {
    test('asynchronous positive', function (t) {
        t.type(result, 'object');
        t.equal(result.score, 5);
        t.equal(result.comparative, 1.25);
        t.equal(result.tokens.length, 4);
        t.equal(result.words.length, 1);
        t.end();
    });
});
