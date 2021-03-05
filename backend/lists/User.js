const {Relationship} = require("@keystonejs/fields");
const {Checkbox} = require("@keystonejs/fields");
const {Text} = require("@keystonejs/fields");
const {Password} = require("@keystonejs/fields");

const User = {
    fields: {
        name: { type: Text, isRequired: true },
        username: { type: Text, isRequired: true, isUnique: true },
        password: { type: Password },
        isAdmin: { type: Checkbox },
    },
};

module.exports = User;