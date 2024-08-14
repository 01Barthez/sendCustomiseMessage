import { Router } from "express";
import message from "../controllers/sendmessage-controllers";


const sendmessage = Router();

sendmessage.post('/send', message.sendMessage)

export default sendmessage;