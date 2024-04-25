import express from 'express';
import baseRouter from './baseRouter.js';
import postRouter from './postRouter.js';
import userRouter from './userRouter.js';
import commentRouter from './commentRouter.js';

const router = express.Router();

router.use('/', (req, res, next) => { baseRouter(req, res, next)});
router.use("/post", (req, res, next) => {postRouter(req,res,next)});
router.use("/user", (req, res, next) => {userRouter(req,res,next)});
router.use("/comment", (req, res, next) => {commentRouter(req,res,next)});

export default router;