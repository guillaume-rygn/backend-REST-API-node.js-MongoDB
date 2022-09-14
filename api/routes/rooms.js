import express from "express"
import{
  createRoom,
  deleteRoom,
  updateRoom,
  showRoom,
  indexRoom
} from "../controllers/rooms.js"

const router = express.Router()

//CREATE
router.post("/", createRoom)

//UPDATE
router.put("/:id", updateRoom)

//DELETE
router.delete("/:id", deleteRoom)

//SHOW
router.get("/:id", showRoom)

//INDEX
router.get("/", indexRoom)


export default router
