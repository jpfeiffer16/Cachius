var Cache = require('../index');

var testFunction = function(numberToCountTo) {
  for (var i = 0; i < numberToCountTo; i++) {
    //Do stuff here
  }
  return numberToCountTo;
};

var countTo = 1000000000;

for (var i = 0; i != 2; i++) {
  console.log(Cache.cache(function () {
    testFunction(countTo); 
  }, 'count'));
  //Cache.touch('count');
}
