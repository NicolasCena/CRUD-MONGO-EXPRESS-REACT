import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { getTasks, getTask, deleteTask, updateTask, createTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)
router.post('/tasks', authRequired, createTask)

export default router
