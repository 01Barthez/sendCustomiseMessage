import { Request, Response } from "express";
import sendMail from "../functions/sendmail";
import { HttpCode } from "../core/constants";


const message = {
    sendMessage: async (req: Request, res: Response) => {
        try {
            const {email, message} = req.body;
        if(!email || !message) return res.status(HttpCode.BAD_REQUEST).json({msg: "email and content are required !"})
        
        await sendMail(email, {content: message})
        res.status(HttpCode.OK).json({msg: "Message envoyé avec succès!"})
        } catch (error) {
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: "internal server error !"});
        }
    }
}
export default message;