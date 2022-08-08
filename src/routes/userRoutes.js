import { Router } from "express";
import { getUsers, createUser, getUserById, deleteUser, updateUser, login } from "../controllers/userController";
import 'dotenv/config'
import jwt  from "jsonwebtoken";

const router = Router();

// router.get('/usuarios', getUsers);

// router.get('/usuarios/:Id', getUserById);

router.post('/usuarios/login', async(req,res) =>{

    try {

        const {username, password} = req.body
        const logedUser = await login(username,password)
        console.log('usuario: ',logedUser)

        if (logedUser == null) return res.send('Usuario o contraseña incorrectos');

        jwt.sign({user: logedUser}, process.env.SECRETKEY,(err, token)=>{
            res.json({
                token: token
            })
        });

    } catch (error) {
        console.log(error)
    }

})

router.post('/usuarios/register', createUser);

// router.delete('/usuarios/:Id', deleteUser);

// router.put('/usuarios/:Id', updateUser);

export default router;