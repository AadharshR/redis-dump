const redis = require('redis');
const client = redis.createClient({
    legacyMode: true
});
const util = require('util');
const get  = util.promisify(client.get).bind(client);
const set =  util.promisify(client.set).bind(client);
 

const setKey = async (key, value) => {
    set(key, value);
}

const getKey = async  (key) => {
   return get(key);
}

const connectClient = async () => {
    await client.connect()
}
 

module.exports = {
    setKey,
    getKey,
    connectClient,
    client
}