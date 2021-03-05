const { Keystone } = require('@keystone-next/keystone-legacy');
const { GraphQLApp } = require('@keystone-next/app-graphql-legacy');
const { AdminUIApp } = require('@keystone-next/app-admin-ui-legacy');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const {PROJECT_NAME, MONGO_URL} = require('./config');

const adapterConfig = { mongoUri: MONGO_URL };

const userSchema = require('./lists/User');
const taskSchema = require('./lists/Task');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('User', userSchema);
// keystone.createList('Task', taskSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};
