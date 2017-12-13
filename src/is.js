const isRealNaN = Number.isNaN && (_ => _ !== _);

const isNull = _ => !_ && isObject(_);

const isUndefined = _ => _ === void 0;

const isNegZero = _ => (+_ === 0) && (1 / +_ === -Infinity);

const isObject = _ => Object(_) === _;

const isRealObject = _ => Object.prototype.toString.call(_) === '[object Object]';

const isArray = _ => Array.isArray(_);

const isFunction = _ => typeof _ === 'function';

const isString = _ => Object.prototype.toString.call(_) === '[object String]';

export default {
    isRealNaN,
    isNull,
	isUndefined,
    isNegZero,
	isRealObject,
    isObject,
    isArray,
    isFunction,
    isString,
}