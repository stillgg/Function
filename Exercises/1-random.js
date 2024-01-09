"use strict";

const random = (min, max) => {
  const diff = max - min;

  return Math.random() * diff + min;
};

module.exports = { random };
