import express from 'express';
import { getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);

router.use((err, req, res, next) => {
    console.log("usersRoute middleware says: ",err);
});