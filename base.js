module.exports = {
    faild: function(thing) {
        throw new Error(thing);
    },

    warn: function(thing) {
        console.log(['Warning:', thing].join(' '));
    },

    note: function(thing) {
        console.log(['Noting:', thing].join(' '));
    },

    existy: function(x) {
        return x != null;
    },

    truthy: function(x) {
        return (x !== false) && existy(x);
    }
};
