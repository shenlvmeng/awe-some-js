const isUndefined = _ => _ === void 0;

const isObject = _ => Object(_) === _;

const isRealObject = _ => Object.prototype.toString.call(_) === '[object Object]';

const isArray = _ => Array.isArray(_);

const isFunction = _ => typeof _ === 'function';

const isString = _ => Object.prototype.toString.call(_) === '[object String]';

export default {
	isUndefined,
	isRealObject,
    isObject,
    isArray,
    isFunction,
    isString,
}