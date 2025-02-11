import axios from 'axios';
import md5 from 'md5';

const publicKey = '7ba801a335f3c76962e3b155a9c994a5';
const privateKey = 'b3006dea8ac1deaba77adb6d8dd8800c977a58cf';
const ts = new Date().getTime().toString();
const hash = md5(ts + privateKey + publicKey);
const api = axios.create({
    baseURL: 'http://gateway.marvel.com/',
    params: {
        ts: ts,
        hash: hash,
        apikey: publicKey
    },
    headers: { 
        "Accept": "*/*"
     }
});

export default api;