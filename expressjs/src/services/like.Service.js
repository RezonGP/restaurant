import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/prismaClient.js";
export const likeService = {

    async like(req) {
        const body = req.body ?? {};
        const { user_id, restaurant_id } = req.body;

        if (user_id == null || restaurant_id == null) {
            throw new BadRequestException("user_id và restaurant_id là bắt buộc");
        }

        const userIdNumber = Number(user_id);
        const restaurantIdNumber = Number(restaurant_id);

        if (Number.isNaN(userIdNumber) || Number.isNaN(restaurantIdNumber)) {
            throw new BadRequestException("user_id và restaurant_id phải là số");
        }

        const user = await prisma.user.findUnique({
            where: { id: userIdNumber }
        });

        if (!user) {
            throw new BadRequestException("User không tồn tại");
        }

        const restaurant = await prisma.restaurant.findUnique({
            where: { id: restaurantIdNumber }
        });

        if (!restaurant) {
            throw new BadRequestException("Restaurant không tồn tại");
        }

        // ✅ code cũ của bạn
        const existingLike = await prisma.likeRes.findFirst({
            where: {
                user_id: userIdNumber,
                restaurant_id: restaurantIdNumber,
            }
        });

        if (existingLike) {
            await prisma.likeRes.deleteMany({
                where: {
                    user_id: userIdNumber,
                    restaurant_id: restaurantIdNumber,
                },
            });
            return true;
        }

        await prisma.likeRes.create({
            data: {
                user_id: userIdNumber,
                restaurant_id: restaurantIdNumber,
            },
        });

        return true;
    },
    async getByRestaurant(req) {
        const body = req.body ?? {};
        const { id: restaurant_id } = req.params;
        const likeRes = await prisma.likeRes.findMany({
            where: {
                restaurant_id: Number(restaurant_id),
            }
        });
        return likeRes;
    },
    async getByUser(req) {
        const body = req.body ?? {};
        const { id: user_id } = req.params;
        const likeRes = await prisma.likeRes.findMany({
            where: {
                user_id: Number(user_id),
            }
        });
        return likeRes;
    },


}

export default likeService;
