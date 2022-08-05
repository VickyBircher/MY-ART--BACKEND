import { Router } from "express";
import { getUsers, createUser, getUserById, deleteUser, updateUser, login } from "../controllers/userController";
import jwt  from "jsonwebtoken";

const router = Router();

router.get('/usuarios', getUsers);

router.get('/usuarios/:Id', getUserById);

router.post('/usuarios/login', async(req,res) =>{

    try {

        const {username, password} = req.body
        const logedUser = await login(username,password)
        if (logedUser == null) return res.send('Usuario o contraseña incorrectos');
        console.log("hola")

        jwt.sign({user: logedUser},'secretkey', (err, token)=>{
            res.json({
                token: token
            })
        })
        //crear un header
        //poner el token en el header
        //proteger las rutas verificando que el token exista y sea valido
    } catch (error) {
        console.log(error)
    }

})

router.post('/usuarios/register', createUser);

router.delete('/usuarios/:Id', deleteUser);

router.put('/usuarios/:Id', updateUser);

export default router;