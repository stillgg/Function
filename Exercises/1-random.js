"use strict";

const random = (min, max) => {
  const diff = max - min;

  // my solution is the best!!

  return Math.floor(Math.random() * diff + min);
};

module.exports = { random };
