import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { HttpCode } from "../core/constants";

export const validator = {
    validateEmployee: [
        // Validation of employee name
        body('content')
            .exists().withMessage('content message is required !')
            .trim().notEmpty().withMessage('content message cannot be empty !')
            .isString().withMessage('content message should have a string !')
            .isLength({min:2}).withMessage('content message is to short !')
            .isLength({max: 25}).withMessage('content message is too long !')
        ,
        // Validatoion of employee email
        body('email')
            .exists().withMessage('email is required !')
            .trim().notEmpty().withMessage('email can\'t be empty !')
            .isEmail().withMessage('invalid email !')
        ,
    ]
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(HttpCode.UNPROCESSABLE_ENTITY).json({ errors: errors.array() })
    }
    next();
}
  