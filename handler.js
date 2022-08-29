let { setKey , getKey, connectClient, client } = require('./redis');

let prefixKey = 'limit:external_events';
let GLOBAL_KEY_SAMPLE = `${prefixKey}:2`


let keySample = GLOBAL_KEY_SAMPLE
let keySample1 = GLOBAL_KEY_SAMPLE


let keyToMigrate =  `${prefixKey}:1:1:2`

async function doJob () {
    
    for ( let i = 0; i < 2; i++) {
        let keys1 = keySample.split(':')[2];
        let keys22 = keyToMigrate.split(':')[4];
        let newKeySample = `${prefixKey}:${keys1++}`
        let value2 = parseInt(keys22);
        let toMigrateKey = `${prefixKey}:1:1:${value2++}`
        keyToMigrate = toMigrateKey;
        let val = await getKey(newKeySample);
        await setKey(toMigrateKey,val)

        console.log("val is", val)

    }
    console.log("done!")
}


async function setDummyKeys() {
    for (let i = 0; i < 2; i++) {
        let keys1 = keySample1.split(':')[2];
        let value2 = parseInt(keys1);

        let toMigrateKey = `${prefixKey}:${value2}`
        value2++;

        keySample1 = `${prefixKey}:${value2}`

        await setKey(toMigrateKey,250)
    } 
  
}

async function getKeysBreachingLimit(limit) {
    
}

async function migrate () {
    await connectClient();

    await getKeysBreachingLimit(250);
    await setDummyKeys();
    await doJob()
}

migrate();
// exitRedis();