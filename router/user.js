import { GetUsers, GetUserById, createUser, UpdateUser, deleteUser, DeleteAll } from '../controller/user.js';
// import { User } from '../models/user.models.js';
import express from 'express';
const router = express.Router();

router.get('/', GetUsers)
router.get('/:id',GetUserById)
router.post('/',createUser)
router.put('/:id',UpdateUser)
router.delete('/:id',deleteUser)
router.delete('/', DeleteAll)
// module.exports = router;
export {router};