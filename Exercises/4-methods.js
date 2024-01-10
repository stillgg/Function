"use strict";

const methods = (iface) => {
  const res = [];

  for (let key in iface) {
    const fn = iface[key];
    if (typeof fn === "function") {
      res.push([key, fn.length]);
    }
  }

  return res;
};

module.exports = { methods };
