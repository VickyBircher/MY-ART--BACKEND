import { Router } from "express";
import { getAllComments, 
    getCommentByUserId, 
    getCommentsByPublicationId, 
    createComment, 
    deleteComment,
    deleteCommentsByUserId,
    deleteCommentsByPublicationId 
    } from "../controllers/commentsController";

const router = Router();

router.get('/comentarios', getAllComments);

router.get('/comentarios/usuario/:fkUser', getCommentByUserId);

router.get('/comentarios/publicacion/:fkPublication', getCommentsByPublicationId);

router.post('/comentarios', createComment);

router.delete('/comentarios/:Id', deleteComment);

router.delete('/comentarios/usuario/:fkUser', deleteCommentsByUserId);

router.delete('/comentarios/publicacion/:fkPublication', deleteCommentsByPublicationId);

export default router;