# nasa-delta-t

Polynomial expressions for delta-T provided by NASA.

## About

When you calculate the positions of the sun and moon, you need TD (Terrestrial Dynamical TIme).
However, we all live in UT (Universal Time), hence needs the parameter,
so called **"delta-T" (&Delta;T)**.
While NASA provide
[look-up tables for deducted &Delta;Ts](https://eclipse.gsfc.nasa.gov/SEcat5/deltat.html),
they also provide [simplified arithmetic expressions](https://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html)
to make our lives easier.
This module simply intends to provide these expressions as nodeJS functions.

## Install

For NodeJS:

```
npm install nasa-delta-t
```

For browsers, simply download *[dist/nasa-delta-t.min.js](dist/nasa-delta-t.min.js)* and use it.

## Usage

For NodeJS:

```
const NasaDeltaT = require('nasa-delta-t');
const { getDeltaT } = NasaDeltaT;

const deltaT = getDeltaT(2009, 1); // Satoshi Nakamoto mined the genesis block of Bitcoin
console.log(deltaT);

> 66.28986420312503
```

For browsers:

```
<script src="nasa-delta-t.min.js"></script>

<script>
var deltaT = NasaDeltaT.getDeltaT(2009, 1);
console.log(deltaT);
</script>

> 66.28986420312503
```

## API

### getDecimalYear(year, month)

For the given `year` and `month`, returns `decimalYear`.  
Giving a negative year, denotes the year is B.C.

```
Satoshi Nakamoto mined the genesis block for the first Bitcoin network
on January 2009 which makes the decimalYear:

> 2009.0416666666667
```

### getFunctionFromDecimalYear(decimalYear)

For the given `decimalYear`, returns the corresponding function.

```
getFunctionFromDecimalYear(2009.0416666666667)
> getAD2005toAD2050
```

### getDeltaTFromDecimalYear(decimalYear)

For the given `decimalYear`, returns `deltaT`.  

```
getFunctionFromDecimalYear(2009.0416666666667)
> 66.28986420312503
```

### getDeltaT(year, month)

```
getDeltaT(2009, 1)
> 66.28986420312503
```

### getBeforeBC500(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Before the year -500.

### getBC500toAD500(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years -500 and +500.

### getAD500toAD1600(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years +500 and +1600.

### getAD1600toAD1700(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years +1600 and +1700.

### getAD1700toAD1800(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years +1700 and +1800.

### getAD1800toAD1860(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years +1800 and +1860.

### getAD1860toAD1900(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1860 and 1900.

### getAD1900toAD1920(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1900 and 1920.

### getAD1920toAD1941(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1920 and 1941.

### getAD1941toAD1961(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1941 and 1961.

### getAD1961toAD1986(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1961 and 1986.

### getAD1986toAD2005(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 1986 and 2005.

### getAD2005toAD2050(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 2005 and 2050.

### getAD2050toAD2150(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
Between years 2050 and 2150.

### getAfterAD2150(decimalYear)

For the given `decimalYear`, returns `deltaT`.  
After 2150.


## Installed NPM Packages

In case you're wondering, here are the installed NPM packages.
Only for dev purposes.

```
yarn add --dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node @babel/core @babel/cli @babel/preset-env @babel/register browserify babelify uglifyify licensify tape
```

## References

- [NASA - Delta T](https://eclipse.gsfc.nasa.gov/SEcat5/deltat.html)
- [NASA - Polynomial Expressions for Delta T](https://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html)

## License

MIT License  
Copyright (c) 2019 Hiroki Minagawa

See [LICENSE](./LICENSE) for details.
