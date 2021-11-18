const spamArr = require('./spam.json');

// return false if test fails(word is spam)
const spamChecker = (string, type) => {
  for (let i = 0; i < spamArr.length; i += 1) {
    if ((type.indexOf('full') !== -1 && string === spamArr[i]) || (string.indexOf(type.indexOf('full') === -1 && spamArr[i]) !== -1)) {
      return false;
    }
  }
  return true;
};

const validateVar = (inputVar) => {
  if (inputVar == null || inputVar.length < 1 || typeof inputVar === 'undefined' || !inputVar) {
    return true;
  }
  return false;
};

module.exports = (options, callback) => {
  exports.checkSpam(options, (err, results) => {
    callback(err, results);
  });
};

/*
 * check spam
 * @param string url - user input of a string
 * @param function callback
 */
exports.checkSpam = (options, callback) => {
  // string is the sting that needs to be check
  const { string } = options;

  // type can be 'full' or 'part'
  // full - the full string has to match the full spam word
  // part - only part of the string has to match the full spam word
  let { type } = options;

  // no string? reture false
  if ((validateVar(string))) {
    callback(true, { error: 'No String Input' });
  } else {
    // no type? set type to part
    if ((validateVar(type))) {
      type = 'part';
    }
    // run the check!
    if (spamChecker(string, type)) {
      // valid!
      callback(false, { spam: false });
    } else {
      // invalid!
      callback(false, { spam: true });
    }
  }
};
