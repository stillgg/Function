"use strict";

const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  return Math.random().toString()[1];
};

module.exports = { generateKey };
