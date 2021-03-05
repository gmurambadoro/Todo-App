const dotenv = require('dotenv');

dotenv.config();

const PROJECT_NAME = process.env.PROJECT_NAME || 'Todo App';
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/todo-app';

module.exports = {
    PROJECT_NAME,
    MONGO_URL,
};