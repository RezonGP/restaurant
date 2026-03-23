import authService from "../services/auth.Service.js";
import { responseSuccess } from "../common/middlewares/helpers/response.helpers.js";
import { unauthorizedException } from "../common/middlewares/helpers/exception.helper.js";


export const authController = {
    async register(req, res, next) {
        try {
            const result = await authService.register(req);
            const response = responseSuccess(result, "register thanh cong");
            res.status(response.statusCode).json(response);
        } catch (error) {
            next(error);
        }
    },
    async login(req, res, next) {
        try {
            const result = await authService.login(req);
            const response = responseSuccess(result, "login thanh cong");
            res.status(response.statusCode).json(response);
        } catch (error) {
            next(error);
        }
    }
}


