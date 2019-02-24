const test = require('tape');
const {
  getDecimalYear,
  getBeforeBC500,
  getBC500toAD500,
  getAD500toAD1600,
  getAD1600toAD1700,
  getAD1700toAD1800,
  getAD1800toAD1860,
  getAD1860toAD1900,
  getAD1900toAD1920,
  getAD1920toAD1941,
  getAD1941toAD1961,
  getAD1961toAD1986,
  getAD1986toAD2005,
  getAD2005toAD2050,
  getAD2050toAD2150,
  getAfterAD2150,
  getFunctionFromDecimalYear,
  getDeltaTFromDecimalYear,
  getDeltaT
} = require('../cjs/index.js');

const int = Math.trunc;

const hist = [
  [-747, 2,  '747 B.C. (Babylonian Calendar)'], // [0] getBeforeBC500,
  [33,   4,  'Apr.4, 33 A.D. (Jesus Christ)'],  // [1] getBC500toAD500
  [1412, 1,  '1412 A.D. (Joan of Arc)'],    // [2] getAD500toAD1600
  [1646, 7,  '1646 A.D. (Leibniz)'],        // [3] getAD1600toAD1700
  [1749, 8,  '1749 A.D. (Goethe)'],         // [4] getAD1700toAD1800
  [1844, 10, '1844 A.D. (Nietzsche)'],      // [5] getAD1800toAD1860
  [1861, 2,  '1861 A.D. (R.Steiner)'],      // [6] getAD1860toAD1900
  [1914, 7,  '1914 A.D. (WW 1)'],           // [7] getAD1900toAD1920
  [1939, 9,  '1939 A.D. (WW 2)'],           // [8] getAD1920toAD1941
  [1945, 8,  '1945 A.D. (Atomic Bomb)'],    // [9] getAD1941toAD1961
  [1969, 7,  '1969 A.D. (Apolo 11)'],       // [10] getAD1961toAD1986
  [1991, 11, '1991 A.D. (Wall of Berlin)'], // [11] getAD1986toAD2005
  [2009, 1,  '2009 A.D. (Bitcoin)'],        // [12] getAD2005toAD2050
  [2100, 9, '2100 A.D.'], // [13] getAD2050toAD2150
  [2493, 9, '2493 A.D.'], // [14] getAfterAD2150
];

test('++++ getDecimalYear', t => {
  t.plan(1);
  const [year, month, msg] = hist[12];
  const decy = getDecimalYear(year, month);
  console.log(`[year] ${year} [month] ${month} [decy] ${decy} [msg] ${msg}`);
  t.equals(typeof decy, 'number');
});

test(`++++ getBeforeBC500 (${hist[0][2]})`, t => {
  t.plan(1);
  const [year, month] = hist[0];
  const decy = getDecimalYear(year, month);
  const dt = getBeforeBC500(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  t.ok(dt > 17190);
});

test(`++++ getBC500toAD500 (${hist[1][2]})`, t => {
  t.plan(1);
  const [year, month] = hist[1];
  const decy = getDecimalYear(year, month);
  const dt = getBC500toAD500(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Looking at deltaT correspondances, older the bigger.
  // 500BC has the maximum deltaT (17190), and 500AD
  // has the minimum deltaT (5710).
  t.ok(dt > 5710 && dt <= 17190);
});

test(`++++ getAD500toAD1600 (${hist[2][2]})`, t => { // Joan of Arc
  t.plan(1);
  const [year, month] = hist[2];
  const decy = getDecimalYear(year, month);
  const dt = getAD500toAD1600(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Older the bigger.
  // 500AD (5710) and 1600AD (120).
  t.ok(dt > 120 && dt <= 5710);
});

test(`++++ getAD1600toAD1700 (${hist[3][2]})`, t => { // Leibniz
  t.plan(1);
  const [year, month] = hist[3];
  const decy = getDecimalYear(year, month);
  const dt = getAD1600toAD1700(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Older the bigger.
  // 1600AD (120) and 1700AD (9).
  t.ok(dt > 9 && dt <= 120);
});

test(`++++ getAD1700toAD1800 (${hist[4][2]})`, t => { // Goethe
  t.plan(1);
  const [year, month] = hist[4];
  const decy = getDecimalYear(year, month);
  const dt = getAD1700toAD1800(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Between 1700 and 1800, 1700 (which is older than 1800) has
  // deltaT being the minimum (9), and 1800 (younger) being
  // the maximum (14).
  t.ok(dt > 9 && dt <= 14);
});

test(`++++ getAD1800toAD1860 (${hist[5][2]})`, t => { // Nietzsche
  t.plan(1);
  const [year, month] = hist[5];
  const decy = getDecimalYear(year, month);
  const dt = getAD1800toAD1860(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Between 1800 to 1860,
  // min being that of 1900 (-3),
  // max being that of 1800 (14).
  t.ok(dt > -3 && dt <= 14);
});

test(`++++ getAD1860toAD1900 (${hist[6][2]})`, t => { // R. Steiner
  t.plan(1);
  const [year, month] = hist[6];
  const decy = getDecimalYear(year, month);
  const dt = getAD1860toAD1900(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // Between 1860 and 1900,
  // min being 1900 (-3),
  // max being 1850 (7).
  // Also, the standard errors are almost 1,
  // adding |1| for the check range.
  // (min: -3 + |1| = -4) (max: 7 + |1| = 8)
  t.ok(dt > -4 && dt <= 8);
});

test(`++++ getAD1900toAD1920 (${hist[7][2]})`, t => { // WW 1
  t.plan(1);
  const [year, month] = hist[7];
  const decy = getDecimalYear(year, month);
  const dt = getAD1900toAD1920(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 1900 (-3) (err: <|1|)
  // max: 1950 (29)
  t.ok(dt > -4 && dt <= 29);
});

test(`++++ getAD1920toAD1941 (${hist[8][2]})`, t => { // WW 2
  t.plan(1);
  const [year, month] = hist[8];
  const decy = getDecimalYear(year, month);
  const dt = getAD1920toAD1941(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 1900 (-3) (err: <|1|)
  // max: 1965 (35.7)
  t.ok(dt > -4 && dt <= 35.7);
});

test(`++++ getAD1941toAD1961 (${hist[9][2]})`, t => { // Atomic Bomb
  t.plan(1);
  const [year, month] = hist[9];
  const decy = getDecimalYear(year, month);
  const dt = getAD1941toAD1961(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 1900 (-3) (err: <|1|)
  // max: 1965 (35.7)
  t.ok(dt > -4 && dt <= 35.7);
});

test(`++++ getAD1961toAD1986 (${hist[10][2]})`, t => { // Apolo 11
  t.plan(1);
  const [year, month] = hist[10];
  const decy = getDecimalYear(year, month);
  const dt = getAD1961toAD1986(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 1960 (33.2)
  // max: 1990 (56.9)
  t.ok(dt > 33.2 && dt <= 56.9);
});

test(`++++ getAD1986toAD2005 (${hist[11][2]})`, t => { // Wall of Berlin
  t.plan(1);
  const [year, month] = hist[11];
  const decy = getDecimalYear(year, month);
  const dt = getAD1986toAD2005(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 1985 (54.3)
  // max: 2005 (64.7)
  t.ok(dt > 54.3 && dt <= 64.7);
});

test(`++++ getAD2005toAD2050 (${hist[12][2]})`, t => { // Bitcoin
  t.plan(1);
  const [year, month] = hist[12];
  const decy = getDecimalYear(year, month);
  const dt = getAD2005toAD2050(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 2005 (64.7)
  t.ok(dt > 64.7);
});

test(`++++ getAD2050toAD2150 (${hist[13][2]})`, t => {
  t.plan(1);
  const [year, month] = hist[13];
  const decy = getDecimalYear(year, month);
  const dt = getAD2050toAD2150(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 2005 (64.7)
  t.ok(dt > 64.7);
});

test(`++++ getAfterAD2150 (${hist[14][2]})`, t => {
  t.plan(1);
  const [year, month] = hist[14];
  const decy = getDecimalYear(year, month);
  const dt = getAfterAD2150(decy);
  console.log(`[decy] ${year} [dt] ${dt}`)
  // min: 2005 (64.7)
  t.ok(dt > 64.7);
});

test('++++ getFunctionFromDecimalYear', t => {
  const size = hist.length;
  const regexp = '^get[^0-9]+([0-9]+)[^0-9]*([0-9]*)';
  const check = (hst = [], i = 0) => {
    const [year, month] = hst;
    let decy = getDecimalYear(year, month);
    const { name } = getFunctionFromDecimalYear(decy);
    const m = name.match(new RegExp(regexp));
    decy = int(decy * 1000) / 1000;
    let n1 = int(m[1]);
    let n2 = int(m[2]);
    let ok = false;
    if (i === 0) {
      n1 *= -1;
      ok = decy < n1;
    } else if (i === size - 1) {
      ok = decy > n1;
    } else {
      if (i === 1) n1 *= -1;
      ok = (decy >= n1) && (decy < n2);
    }
    console.log(`:::: [${i}] (from ${n1} to ${n2}) ${decy} ::: ${ok ? 'Yes' : 'No'}`);
    t.ok(ok);
  };
  t.plan(size);
  hist.forEach(check);
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;

let prev;

test('++++ getDeltaTFromDecimalYear (current datetime)', t => {
  t.plan(1);
  const decy = getDecimalYear(year, month);
  const dt = getDeltaTFromDecimalYear(decy);
  prev = dt;
  console.log(`[year] ${year} [month] ${month} [dt] ${dt}`)
  // min: 2005 (64.7)
  t.ok(dt > 64.7);
});

test('++++ getDeltaT (current datetime)', t => {
  t.plan(1);
  const dt = getDeltaT(year, month);
  console.log(`[year] ${year} [month] ${month} [dt] ${dt}`)
  // Comparing it with the previous result.
  t.equals(dt, prev);
});
