import express from 'express'
import { putinforusers } from "../controllers/controllerapi.js"


const router = express.Router()

router.post('/perguntar', putinforusers)


export default router