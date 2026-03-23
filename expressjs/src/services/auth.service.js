import { BadRequestException, unauthorizedException } from "../common/middlewares/helpers/exception.helper.js";
import { prisma } from "../common/middlewares/helpers/prisma.helper.js";
import bcrypt from "bcrypt";

export const authService = {
    async register(req) {
        return "registre";
    }
}

export default authService;
