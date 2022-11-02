import express from "express";
 
import { //todo dentro de la base de datos se importa. 
    getAllUsuarios,
    createUsuario,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
} from "../controllers/Usuario.js";


//Importar todo dentro de la base de datos.
 
const router = express.Router();
 
//Rutas para  la tabla canción
router.get('/list_all/', getAllUsuarios);
router.get('/usuario/:id', getUsuarioById);
router.post('/create/', createUsuario);
router.patch('/update/:id', updateUsuario);
router.delete('/delete/:id', deleteUsuario);


export default router;