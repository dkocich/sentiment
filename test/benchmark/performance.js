/**
 * Runs benchmarks against sentiment and Sentimental.
 *
 * @package sentiment
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const Sentiment = require('../../lib/index');
const sentiment = new Sentiment();
const sentimental = require('Sentimental');

/**
 * Test data
 */
const stringShort = 'This cat is totally awesome';
const stringLong = require('../fixtures/corpus');

/**
 * Setup
 */
suite
    .add('sentiment (Latest) - Short ', function () {
        sentiment.analyze(stringShort);
    })
    .add('sentiment (Latest) - Long  ', function () {
        sentiment.analyze(stringLong);
    })
    .add('Sentimental (1.0.1) - Short', function () {
        sentimental.analyze(stringShort);
    })
    .add('Sentimental (1.0.1) - Long ', function () {
        sentimental.analyze(stringLong);
    })
    .on('cycle', function (event) {
        process.stdout.write(String(event.target) + '\n');
    })
    .run({
        minSamples: 100,
        delay: 2
    });
