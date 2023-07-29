import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { getTasks, getTask, deleteTask, updateTask, createTask } from "../controllers/tasks.controller.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { taskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, validateSchema(taskSchema), updateTask)
router.post('/tasks', authRequired, validateSchema(taskSchema), createTask)

export default router
