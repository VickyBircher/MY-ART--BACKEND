import { Router } from "express";
import { getLikes, getDislikes, insertLike, insertDisLike, updateToLike, updateToDislike,deleteLike } from "../controllers/likeOrDislikeController";

const router = Router();

router.get('/likesOrDislikes/likes', getLikes);

router.get('/likesOrDislikes/dislikes', getDislikes);

router.post('/likesOrDislikes/likes', insertLike);

router.post('/likesOrDislikes/dislikes', insertDisLike);

router.put('/likesOrDislikes/likes', updateToLike);

router.put('/likesOrDislikes/dislikes', updateToDislike);

router.delete('/likesOrDislikes', deleteLike);

// router.delete();

export default router;