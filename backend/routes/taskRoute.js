import express from "express"
import { addTask, getTask, removeTask} from "../controllers/taskController.js"

const router = express.Router();

router.post("/addTask", addTask)
router.get("/getTask",getTask)
// router.get("/removeTask",requireAuth, removeTask)

export default router;