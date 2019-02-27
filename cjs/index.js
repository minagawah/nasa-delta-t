"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getDeltaT = exports.getDeltaTFromDecimalYear = exports.getFunctionFromDecimalYear = exports.getAfterAD2150 = exports.getAD2050toAD2150 = exports.getAD2005toAD2050 = exports.getAD1986toAD2005 = exports.getAD1961toAD1986 = exports.getAD1941toAD1961 = exports.getAD1920toAD1941 = exports.getAD1900toAD1920 = exports.getAD1860toAD1900 = exports.getAD1800toAD1860 = exports.getAD1700toAD1800 = exports.getAD1600toAD1700 = exports.getAD500toAD1600 = exports.getBC500toAD500 = exports.getBeforeBC500 = exports.getDecimalYear = void 0;

/* eslint brace-style: [0] */

/**
 * All the polynomial expressions for delta-T (ΔT) are based on that of NASA's:
 * https://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html
 */
var pow = Math.pow;
/**
 * We define the decimal year "y" as follows:
 *
 *   y = year + (month - 0.5) / 12
 *
 * This gives "y" for the middle of the month, which is accurate enough
 * given the precision in the known values of ΔT. The following
 * polynomial expressions can be used calculate the value of ΔT
 * (in seconds) over the time period covered by of the Five Millennium
 * Canon of Solar Eclipses: -1999 to +3000.
 */

var getDecimalYear = function getDecimalYear() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return year + (month - 0.5) / 12;
};
/*
 * Before the year -500, calculate:
 * ΔT = -20 + 32 * u^2
 * where: u = (y - 1820) / 100
 */


exports.getDecimalYear = getDecimalYear;

var getBeforeBC500 = function getBeforeBC500() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var u = (decimalYear - 1820) / 100;
  return -20 + 32 * pow(u, 2);
};
/*
 * Between years -500 and +500, we use the data from Table 1, except
 * that for the year -500 we changed the value 17190 to 17203.7 in order
 * to avoid a discontinuity with the previous formula at that epoch.
 * The value for ΔT is given by a polynomial of the 6th degree, which
 * reproduces the values in Table 1 with an error not larger than 4
 * seconds:
 *
 * ΔT = 10583.6 - 1014.41 * u + 33.78311 * u^2 - 5.952053 * u^3
 *   - 0.1798452 * u^4 + 0.022174192 * u^5 + 0.0090316521 * u^6
 * where: u = y/100
 */


exports.getBeforeBC500 = getBeforeBC500;

var getBC500toAD500 = function getBC500toAD500() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var u = decimalYear / 100;
  return 10583.6 - 1014.41 * u + 33.78311 * pow(u, 2) - 5.952053 * pow(u, 3) - 0.1798452 * pow(u, 4) + 0.022174192 * pow(u, 5) + 0.0090316521 * pow(u, 6);
};
/**
 * Between years +500 and +1600, we again use the data from Table 1 to
 * derive a polynomial of the 6th degree.
 *
 * ΔT = 1574.2 - 556.01 * u + 71.23472 * u^2 + 0.319781 * u^3
 *   - 0.8503463 * u^4 - 0.005050998 * u^5 + 0.0083572073 * u^6
 * where: u = (y-1000)/100
 */


exports.getBC500toAD500 = getBC500toAD500;

var getAD500toAD1600 = function getAD500toAD1600() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var u = (decimalYear - 1000) / 100;
  return 1574.2 - 556.01 * u + 71.23472 * pow(u, 2) + 0.319781 * pow(u, 3) - 0.8503463 * pow(u, 4) - 0.005050998 * pow(u, 5) + 0.0083572073 * pow(u, 6);
};
/**
 * Between years +1600 and +1700, calculate:
 *
 * ΔT = 120 - 0.9808 * t - 0.01532 * t^2 + t^3 / 7129
 * where:  t = y - 1600
 */


exports.getAD500toAD1600 = getAD500toAD1600;

var getAD1600toAD1700 = function getAD1600toAD1700() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1600;
  return 120 - 0.9808 * t - 0.01532 * pow(t, 2) + pow(t, 3) / 7129;
};
/**
 * Between years +1700 and +1800, calculate:
 *
 * ΔT = 8.83 + 0.1603 * t - 0.0059285 * t^2 + 0.00013336 * t^3 - t^4 / 1174000
 * where: t = y - 1700
*/


exports.getAD1600toAD1700 = getAD1600toAD1700;

var getAD1700toAD1800 = function getAD1700toAD1800() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1700;
  return 8.83 + 0.1603 * t - 0.0059285 * pow(t, 2) + 0.00013336 * pow(t, 3) - pow(t, 4) / 1174000;
};
/**
 * Between years +1800 and +1860, calculate:
 *
 * ΔT = 13.72 - 0.332447 * t + 0.0068612 * t^2 + 0.0041116 * t^3 - 0.00037436 * t^4
 * + 0.0000121272 * t^5 - 0.0000001699 * t^6 + 0.000000000875 * t^7
 * where: t = y - 1800
*/


exports.getAD1700toAD1800 = getAD1700toAD1800;

var getAD1800toAD1860 = function getAD1800toAD1860() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1800;
  return 13.72 - 0.332447 * t + 0.0068612 * pow(t, 2) + 0.0041116 * pow(t, 3) - 0.00037436 * pow(t, 4) + 0.0000121272 * pow(t, 5) - 0.0000001699 * pow(t, 6) + 0.000000000875 * pow(t, 7);
};
/**
 * Between years 1860 and 1900, calculate:
 * ΔT = 7.62 + 0.5737 * t - 0.251754 * t^2 + 0.01680668 * t^3
 * -0.0004473624 * t^4 + t^5 / 233174
 * where: t = y - 1860
 */


exports.getAD1800toAD1860 = getAD1800toAD1860;

var getAD1860toAD1900 = function getAD1860toAD1900() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1860;
  return 7.62 + 0.5737 * t - 0.251754 * pow(t, 2) + 0.01680668 * pow(t, 3) - 0.0004473624 * pow(t, 4) + pow(t, 5) / 233174;
};
/**
 * Between years 1900 and 1920, calculate:
 *
 * ΔT = -2.79 + 1.494119 * t - 0.0598939 * t^2 + 0.0061966 * t^3 - 0.000197 * t^4
 * where: t = y - 1900
 */


exports.getAD1860toAD1900 = getAD1860toAD1900;

var getAD1900toAD1920 = function getAD1900toAD1920() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1900;
  return -2.79 + 1.494119 * t - 0.0598939 * pow(t, 2) + 0.0061966 * pow(t, 3) - 0.000197 * pow(t, 4);
};
/**
 * Between years 1920 and 1941, calculate:
 *
 * ΔT = 21.20 + 0.84493*t - 0.076100 * t^2 + 0.0020936 * t^3
 * where: t = y - 1920
 */


exports.getAD1900toAD1920 = getAD1900toAD1920;

var getAD1920toAD1941 = function getAD1920toAD1941() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1920;
  return 21.20 + 0.84493 * t - 0.076100 * pow(t, 2) + 0.0020936 * pow(t, 3);
};
/**
 * Between years 1941 and 1961, calculate:
 *
 * ΔT = 29.07 + 0.407*t - t^2/233 + t^3 / 2547
 * where: t = y - 1950
 */


exports.getAD1920toAD1941 = getAD1920toAD1941;

var getAD1941toAD1961 = function getAD1941toAD1961() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1950;
  return 29.07 + 0.407 * t - pow(t, 2) / 233 + pow(t, 3) / 2547;
};
/**
 * Between years 1961 and 1986, calculate:
 *
 * ΔT = 45.45 + 1.067*t - t^2/260 - t^3 / 718
 * where: t = y - 1975
 */


exports.getAD1941toAD1961 = getAD1941toAD1961;

var getAD1961toAD1986 = function getAD1961toAD1986() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 1975;
  return 45.45 + 1.067 * t - pow(t, 2) / 260 - pow(t, 3) / 718;
};
/**
 * Between years 1986 and 2005, calculate:
 *
 * ΔT = 63.86 + 0.3345 * t - 0.060374 * t^2 + 0.0017275 * t^3 + 0.000651814 * t^4
 *   + 0.00002373599 * t^5
 * where: t = y - 2000
 */


exports.getAD1961toAD1986 = getAD1961toAD1986;

var getAD1986toAD2005 = function getAD1986toAD2005() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 2000;
  return 63.86 + 0.3345 * t - 0.060374 * pow(t, 2) + 0.0017275 * pow(t, 3) + 0.000651814 * pow(t, 4) + 0.00002373599 * pow(t, 5);
};
/**
 * Between years 2005 and 2050, calculate:
 *
 * ΔT = 62.92 + 0.32217 * t + 0.005589 * t^2
 * where: t = y - 2000
 */


exports.getAD1986toAD2005 = getAD1986toAD2005;

var getAD2005toAD2050 = function getAD2005toAD2050() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = decimalYear - 2000;
  return 62.92 + 0.32217 * t + 0.005589 * pow(t, 2);
};
/**
 * Between years 2050 and 2150, calculate:
 *
 * ΔT = -20 + 32 * ((y-1820)/100)^2 - 0.5628 * (2150 - y)
 */


exports.getAD2005toAD2050 = getAD2005toAD2050;

var getAD2050toAD2150 = function getAD2050toAD2150() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return -20 + 32 * pow((decimalYear - 1820) / 100, 2) - 0.5628 * (2150 - decimalYear);
};
/**
 * After 2150, calculate:
 *
 * ΔT = -20 + 32 * u^2
 * where: u = (y-1820)/100
 */


exports.getAD2050toAD2150 = getAD2050toAD2150;

var getAfterAD2150 = function getAfterAD2150() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var u = (decimalYear - 1820) / 100;
  return -20 + 32 * pow(u, 2);
};
/** @returns {Function} */


exports.getAfterAD2150 = getAfterAD2150;

var getFunctionFromDecimalYear = function getFunctionFromDecimalYear() {
  var decimalYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var f;

  if (decimalYear < -500) {
    f = getBeforeBC500;
  } else if (decimalYear < 500) {
    f = getBC500toAD500;
  } else if (decimalYear < 1600) {
    f = getAD500toAD1600;
  } else if (decimalYear < 1700) {
    f = getAD1600toAD1700;
  } else if (decimalYear < 1800) {
    f = getAD1700toAD1800;
  } else if (decimalYear < 1860) {
    f = getAD1800toAD1860;
  } else if (decimalYear < 1900) {
    f = getAD1860toAD1900;
  } else if (decimalYear < 1920) {
    f = getAD1900toAD1920;
  } else if (decimalYear < 1941) {
    f = getAD1920toAD1941;
  } else if (decimalYear < 1961) {
    f = getAD1941toAD1961;
  } else if (decimalYear < 1986) {
    f = getAD1961toAD1986;
  } else if (decimalYear < 2005) {
    f = getAD1986toAD2005;
  } else if (decimalYear < 2050) {
    f = getAD2005toAD2050;
  } else if (decimalYear < 2150) {
    f = getAD2050toAD2150;
  } else {
    f = getAfterAD2150;
  }

  return f;
};
/**
 * @param {number} [decimalYear=0]
 */


exports.getFunctionFromDecimalYear = getFunctionFromDecimalYear;

var getDeltaTFromDecimalYear = function getDeltaTFromDecimalYear(decy) {
  return getFunctionFromDecimalYear(decy)(decy);
};
/**
 * @param {number} [year=0]
 * @param {number} [month=0]
 */


exports.getDeltaTFromDecimalYear = getDeltaTFromDecimalYear;

var getDeltaT = function getDeltaT() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return getDeltaTFromDecimalYear(getDecimalYear(year, month));
};

exports.getDeltaT = getDeltaT;
var _default = {
  getDecimalYear: getDecimalYear,
  getBeforeBC500: getBeforeBC500,
  getBC500toAD500: getBC500toAD500,
  getAD500toAD1600: getAD500toAD1600,
  getAD1600toAD1700: getAD1600toAD1700,
  getAD1700toAD1800: getAD1700toAD1800,
  getAD1800toAD1860: getAD1800toAD1860,
  getAD1860toAD1900: getAD1860toAD1900,
  getAD1900toAD1920: getAD1900toAD1920,
  getAD1920toAD1941: getAD1920toAD1941,
  getAD1941toAD1961: getAD1941toAD1961,
  getAD1961toAD1986: getAD1961toAD1986,
  getAD1986toAD2005: getAD1986toAD2005,
  getAD2005toAD2050: getAD2005toAD2050,
  getAD2050toAD2150: getAD2050toAD2150,
  getAfterAD2150: getAfterAD2150,
  getFunctionFromDecimalYear: getFunctionFromDecimalYear,
  getDeltaTFromDecimalYear: getDeltaTFromDecimalYear,
  getDeltaT: getDeltaT
};
exports.default = _default;