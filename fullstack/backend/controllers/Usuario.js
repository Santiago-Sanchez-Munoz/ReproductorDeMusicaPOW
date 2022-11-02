import Usuario from "../models/songModel.js";

//CRUD de canción.
export const getAllUsuarios = async (req, res) => { //Modificar por getAllSongs
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getUsuarioById = async (req, res) => {//Modificar por getSongById
    try {
        const usuarios = await Usuario.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(usuarios[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createUsuario = async (req, res) => {//Modificar por createSong
    try {
        await Usuario.create(req.body);
        res.json({
            "message": "Song Created"
        });

        const myJSON  = {"Id_usuario": 123, "Nombre": "Juan", "Contraseña": "juan123", "E_mail": "juan.s@usc.edu.co"}


    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateUsuario = async (req, res) => {//Modificar por updateSong
    try {
        await Usuario.update(req.body, {
            where: {
                id: req.params.id
                
            }
        });
        res.json({
            "message": "Song updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteUsuario = async (req, res) => {//Modificar por deleteSong
    try {
        await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Usuario eliminado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
//CRUD de listaReproducción.

