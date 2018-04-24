const shallowcopy = (...objs) => Object.assign({}, ...objs);

const extend = (parent, son) => Object.create(parent, son);

export default {
    shallowcopy,
};