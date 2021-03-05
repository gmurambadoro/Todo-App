const {Text} = require("@keystonejs/fields");
const {Relationship} = require("@keystonejs/fields");

const Task = {
    fields: {
        name: { type: Text, isRequired: true },
        description: { type: Text, isMultiline: true },
        user: {
            type: Relationship,
            ref: 'User',
            isRequired: true,
        }
    },
};

module.exports = Task;