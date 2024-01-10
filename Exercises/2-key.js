"use strict";

const generateKey = (length, possible) => {
  let res = "";
  const len = possible.length;

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * len);
    res += possible[index];
  }

  return res;
};

// console.dir(generateKey(16, "abcdefghijklmnopqrstuvwxyz0123456789"));

// console.dir(generateKey(16, "abcdefghijklmnopqrstuvwxyz0123456789").length);

module.exports = { generateKey };
