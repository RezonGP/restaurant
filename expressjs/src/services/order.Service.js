import { prisma } from "../common/prisma/prismaClient.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";



export const orderService = {
    async createOrder(req) {
        const body = req.body ?? {};
        const { user_id, amount, food_id, code } = body;

        if (user_id == null || food_id == null || amount == null) {
            throw new BadRequestException("user_id, food_id và amount là bắt buộc");
        }

        const userIdNumber = Number(user_id);
        const foodIdNumber = Number(food_id);
        const amountNumber = Number(amount);
        if (Number.isNaN(userIdNumber) || Number.isNaN(foodIdNumber) || Number.isNaN(amountNumber)) {
            throw new BadRequestException("user_id, food_id và amount phải là số");
        }

        const [user, food] = await Promise.all([
            prisma.user.findUnique({ where: { id: userIdNumber } }),
            prisma.food.findUnique({ where: { id: foodIdNumber } }),
        ]);
        if (!user) throw new BadRequestException("User không tồn tại");
        if (!food) throw new BadRequestException("Food không tồn tại");


        await prisma.orders.create({
            data: {
                amount: amountNumber,
                code: code ?? null,
                user: { connect: { id: userIdNumber } },
                food: { connect: { id: foodIdNumber } },
            }
        })

        return true
    }
}

export default orderService;
