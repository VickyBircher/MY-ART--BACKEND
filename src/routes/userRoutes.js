import { Router } from "express";
import { getUsers, createUser, getUserById, deleteUser, updateUser } from "../controllers/userController";

const router = Router();

router.get('/usuarios', getUsers);

router.get('/usuarios/:Id', getUserById);

router.post('/usuarios', createUser);

router.delete('/usuarios/:Id', deleteUser);

router.put('/usuarios/:Id', updateUser);

export default router;