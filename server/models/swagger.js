
module.exports = function(SwaggerApi) {

/**
 * Accepts valid Roman number alphabet in body and returns the roman as well as decimal value.
 * @param {RomanNum} body Object containing valid roman value.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {DecimalOutput} result Result object
 */
SwaggerApi.postRomanToDecimal = function(body, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid input');
  err0.statusCode = 405;
  return cb(err0);
  */ 
}



SwaggerApi.remoteMethod('postRomanToDecimal',
  { isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'body',
       type: 'RomanNum',
       description: 'Object containing valid roman value.',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'Returns object with roman alphabet and corresponding decimal value',
       type: 'DecimalOutput',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/romanToDecimal' },
  description: 'Accepts valid Roman number alphabet in body and returns the roman as well as decimal value.' }
);

}
