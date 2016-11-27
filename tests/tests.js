let Cachius = require('../index');

let count = function() {
  console.log('Counting');
  return 10;
};

//This first call will cause the method to be called once.
Cachius.cache(count, 'count');

//This will simply return the cached result stored under the 'count' key
Cachius.cache(count, 'count');

//This will clear the cache for the 'count' key
Cachius.touch('count');

//The count method will now be called again since the key has been touched
Cachius.cache(count, 'count');