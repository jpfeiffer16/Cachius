var Cache = function() {
  var self = this;
  self.keys = [];
  self.cache = function(obj, key) {
    var objIsFunction = typeof obj === 'function';
    insertKey(obj, key);
    tryUpdateKey(key);
    return getValue(key);
  };
  self.touch = function(key) {
    self.keys.filter(function (item) {
      return item.key = key; 
    }).forEach(function (item) {
      item.dirty = true;  
    });
  };
  function tryUpdateKey(key) {
    var subset = self.keys.filter(function (item) {
      return item.key = key; 
    });
    subset.forEach(function (item) {
      if (item.dirty) {
        if (typeof item.originalValue === 'function') {
          item.value = item.originalValue();
        } else {
          item.value = item.originalValue;
        }
        item.dirty = false;
      }
    });
    return subset.length > 0;
  }
  function getValue(key) {
    var cacheItems = self.keys.filter(function (item) {
      return item.key === key;
    });
    if (cacheItems.length > 0)
      return cacheItems[0].value;
    else
      return null;
  }
  function insertKey(value, key) {
    if (self.keys.filter(function(item) {
      return item.key === key; 
    }).length == 0) {
      self.keys.push({ 
        dirty: true,
        key: key,
        originalValue: value
      });
    }
  }
}

module.exports = new Cache();
