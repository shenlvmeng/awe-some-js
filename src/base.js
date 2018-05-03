const noop = () => {};

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