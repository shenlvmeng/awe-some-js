const isRealNaN = Number.isNaN && (_ => _ !== _);

const isNull = _ => !_ && isObject(_);

const isUndefined = _ => _ === void 0;

const isNegZero = _ => (+_ === 0) && (1 / +_ === -Infinity);

const isNum = _ => typeof _ == 'number' || _ instanceof Number;

const isString = _ => typeof _ == 'string' || _ instanceof String;

// except null
const isObject = _ => Object(_) === _;

// include only plain object
const isRealObject = _ => Object.prototype.toString.call(_) === '[object Object]';

const isArray = _ => Array.isArray(_);

const isFunction = _ => typeof _ == 'function';

const isPromise = _ => Promise.resolve(_) === _;

export default {
    isRealNaN,
    isNull,
	isUndefined,
    isNegZero,
    isNum,
    isString,
    isObject,
	isRealObject,
    isArray,
    isFunction,
    isPromise,   
}