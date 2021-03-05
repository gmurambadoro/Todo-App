const {Select} = require("@keystonejs/fields");

const STATUS_DRAFT = 'DRAFT';
const STATUS_PUBLISHED = 'PUBLISH';
const STATUS_ARCHIVED = 'ARCHIVE';

const publishStatuses = [
    { label: 'Draft', value: STATUS_DRAFT },
    { label: 'Published', value: STATUS_PUBLISHED },
    { label: 'Archived', value: STATUS_ARCHIVED },
];

const publishStatus = {
    status: {
        type: Select,
        options: publishStatuses,
        defaultValue: STATUS_DRAFT,
    },
};

module.exports = {
    publishStatus,
};