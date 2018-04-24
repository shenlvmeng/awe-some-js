const noop = () => {};
const classNames = (obj) => Object.keys(obj).filter((key) => obj[key]).join(' ');


export default {
    noop,
    classNames,
}