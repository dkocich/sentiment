/**
 * Created by Administrator on 21.10.2016.
 */


var sentiment = require('./lib/index.js');

var r1 = sentiment('Cats are stupid.');
console.dir(r1);        // Score: -2, Comparative: -0.666

// var rErr = sentiment('Cats are stupid.', '');

console.dir(r1);        // Score: -2, Comparative: -0.666

var r2 = sentiment('Cats are totally amazing!', 'en');
console.dir(r2);        // Score: 4, Comparative: 1

var r3 = sentiment('Katzen sind dumm', 'de');
console.dir(r3);

var r4 = sentiment('El gato es estúpido', 'es');
console.dir(r4);

var r5 = sentiment('Le chat est stupide', 'fr');
console.dir(r5);