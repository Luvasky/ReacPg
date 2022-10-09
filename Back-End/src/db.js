const {Pool, Connection} = require('pg');

const connectionData = {

    user: 'postgres',
    password: '123456789',
    host: 'localhost',
    port: '5432', 
    database: 'prueba'

}

const db = new Pool(connectionData);

module.exports= db;