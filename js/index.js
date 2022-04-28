// function cache() {
//   var num = 0;
//   return function () {
//     num ++;
//     console.log('num:', num);
//   }
// }

// const res = cache();
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    console.log('cache[str]', cache);
    return hit || (cache[str] = fn(str))
  })
}

var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  // The nth string found by a parenthesized capture group, provided the first argument to replace() was a RegExp object. (Corresponds to $1, $2, etc. above.) For example, if /(\a+)(\b+)/, was given, p1 is the match for \a+, and p2 for \b+.
  return str.replace(camelizeRE, function (_, c) { console.log(999,_,c); return c ? c.toUpperCase() : ''; })
});

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
 var hyphenateRE = /\B([A-Z])/g;
 var hyphenate = cached(function (str) {
   return str.replace(hyphenateRE, '-$1').toLowerCase()
 });

var res = cached(function(str) {
  console.log('cache,', str);
});

res('123');
// res('123');
camelize('xiao-tuo-feng');
capitalize('shouzimu daxie');
hyphenate('xiaoTuoFeng');
