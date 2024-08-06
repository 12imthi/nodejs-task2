import  express  from "express";
import { createRoom, getAllRooms } from "../controllers/RoomController.js";


const router = express.Router()


router.get('/roomDetails',getAllRooms)
router.post('/roomDetails',createRoom)

export default router