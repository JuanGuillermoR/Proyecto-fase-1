const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EmpleadosShema = new Schema ({
    nombre: {type: String, required: true, max:40},
    apellido_p: {type: String, required: true, max:40},
    apellido_m: {type: String, required: true, max:40},
    telefono: {type: String, required: true, max:15},
    mail: {type: String, required: true, max:70},
    direccion: {type: String, required: true, max:120}
})

module.exports = mongoose.model("empleados", EmpleadosShema);