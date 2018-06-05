import { isUndefined } from './is';

const noop = () => {};

const get = (obj, path, default) => {
    const keys = path.split('.');
    let res = obj;
    // 一个可以提前跳出的forEach
    keys.every(key => {
        if (isUndefined(res.key)) {
            res = default || false;
            return false;
        }
        res = res.key;
        return true;
    });
    return res;
}

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
    noop,
    classNames,
    commonJS,
}