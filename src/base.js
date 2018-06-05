import { isUndefined } from './is';

const noop = () => {};

const get = (obj, path, init) => {
    const keys = path.replace(/\[/g, '.').replace(']', '').split('.');
    let res = obj;
    // 一个可以提前跳出的forEach
    keys.every(key => {
        if (isUndefined(res[key])) {
            res = init || false;
            return false;
        }
        res = res[key];
        return true;
    });
    console.warn(res)
    return res;
}

const repeat = n => Array(n).fill();

const classNames = (...names) => {
    function convert(name) {
        return isObject(name) ?
            Object.keys(name).filter((key) => name[key]).join(' ')
            : (name || '');
    }
    return names.map(name => convert(name)).join(' ');
}

const commonJS = (require, exports, module, code) => {
    (new Function('require', 'exports', 'module', code)).call(exports, require, exports, module);
}

export default {
    get,
    noop,
    repeat,
    classNames,
    commonJS,
}