//If you want to make sure that your variable is a string (not just a variable that can be converted to a string), you use this test:

if (typeof unknownVariable === 'string') {
    // unknownVariable is a string
  }

  //If you want to check that you have a nonempty string (not the zero-length string ''), you can tighten your verification like this:

  if (typeof unknownVariable === 'string' && unknownVariable.length > 0) {
    // This is a genuine string with characters or whitespace in it
  }

  //to reject strings that are made up of whitespace only,
  if (typeof unknownVariable === 'string' && unknownVariable.trim().length > 0) {
    // This is a genuine string that is not empty or all whitespace
  }