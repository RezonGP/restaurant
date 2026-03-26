import { prisma } from "../common/prisma/prismaClient.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";



export const ratingService = {
    async createRating(req) {
        const body = req.body ?? {};
        const { user_id, restaurant_id, amount } = body;

        if (user_id == null || restaurant_id == null || amount == null) {
            throw new BadRequestException("user_id, restaurant_id và amount là bắt buộc");
        }

        const userIdNumber = Number(user_id);
        const restaurantIdNumber = Number(restaurant_id);
        const amountNumber = Number(amount);
        if (Number.isNaN(userIdNumber) || Number.isNaN(restaurantIdNumber) || Number.isNaN(amountNumber)) {
            throw new BadRequestException("user_id, restaurant_id và amount phải là số");
        }
        await prisma.rate_res.upsert({
            where: {
                user_id_restaurant_id: {
                    user_id: userIdNumber,
                    restaurant_id: restaurantIdNumber,
                },
            },
            update: {
                amount: amountNumber,
            },
            create: {
                user_id: userIdNumber,
                restaurant_id: restaurantIdNumber,
                amount: amountNumber,
            },
        });

        return true;
    },
    async getRatingsByRestaurant(req) {
        return "get ratings by restaurant thanh cong"
    },
    async getRatingsByUser(req) {
        return "get ratings by user thanh cong"
    }
}

export default ratingService;
