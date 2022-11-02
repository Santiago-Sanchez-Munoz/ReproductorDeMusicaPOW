import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Usuario = db.define('usuarios',{ //
    //Atributos que contiene el usuario o tabla usuario 

    //Id_usuario  
    Id_usuario:{
        type: DataTypes.DOBLE
    },
    //Nombre
    Nombre:{
        type: DataTypes.STRING
    },
    //Contraseña
    Contraseña:{
        type: DataTypes.STRING
    },
    //E-mail
    E_mail:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});


const Library = db.define('usuarios')
 
export default Usuario;