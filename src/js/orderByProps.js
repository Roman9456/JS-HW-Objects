// orderByProps.js
function orderByProps(obj, order) {
    const orderedProps = [];
    order.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            orderedProps.push({ key, value: obj[key] });
            delete obj[key];
        }
    });

    Object.keys(obj)
        .sort()
        .forEach(key => {
            orderedProps.push({ key, value: obj[key] });
        });

    return orderedProps;
}

module.exports = { orderByProps };