let { setKey , getKey, connectClient, client } = require('./redis');

let prefixKey = 'limit:1:1:1'
async function setDummyKeys() {
    for (let i = 0; i < 10000; i++) {
       
        let val = prefixKey.split[3];

        let keySample1 = `${prefixKey}:${val}`


        await setKey(keySample1,250)

        val++;
        prefixKey = `limit:1:1:${val}`
    } 
  
}

connectClient();
setDummyKeys();