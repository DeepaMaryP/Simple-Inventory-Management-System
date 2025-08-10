import { Router } from 'express'

const router = Router()

router.route("/").get((req,resp) =>{
    resp.send("Inventory API is Running")
})

router.route("/health").get((req, res) => {
    res.status(200).send('Connected Succesfully')
})

export default router;