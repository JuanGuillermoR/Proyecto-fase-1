// Acá se guardaran las configuraciones para la conexion a nuestra base de datos

//parametrizar
const mongoose = require("mongoose"); //importamos a mongo 

//parametros iniciales
const host = "localhost";
//const host = "0.0.0.0";
//const host = "127.0.0.1";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;  //Cadena de conexion
    // Configuraciones para mongodb
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("Error",console.error.bind 
    (console,"Mongodb connection error"))
}




/*const mongoose = require("mongoose");

const host="mongodb://localhost:27017/hr";

exports.mongoConnect = ()=>{
    mongoose.connect(host);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"MongoDB connection error"));
    
}*/