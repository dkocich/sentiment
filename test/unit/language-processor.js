const test = require('tap').test;
const languageProcessor = require('../../lib/language-processor');

test('spec', function (t) {
    t.type(languageProcessor, 'object');
    t.type(languageProcessor.getLanguage, 'function');
    t.type(languageProcessor.getLabels, 'function');
    t.type(languageProcessor.applyScoringStrategy, 'function');
    t.end();
});

test('getLanguage', function (t) {

    const englishLanguage = require('../../languages/en/index');

    t.deepEqual(
        languageProcessor.getLanguage(),
        englishLanguage
    );

    t.deepEqual(
        languageProcessor.getLanguage(null),
        englishLanguage
    );

    t.deepEqual(
        languageProcessor.getLanguage('en'),
        englishLanguage
    );

    t.throws(function () {
        // Should throw with unknown language code
        languageProcessor.getLanguage('xx');
    });

    t.end();
});
