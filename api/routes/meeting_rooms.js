import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("metting room")
})

export default router
