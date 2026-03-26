import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/prismaClient.js";
export const likeService = {

    async like(req) {
        const body = req.body ?? {};
        const { userId, restaurantId } = body;

        console.log("KEYS:", Object.keys(prisma));
        console.log(body);

        if (userId == null || restaurantId == null) {
            throw new BadRequestException("userId và restaurantId là bắt buộc");
        }

        const userIdNumber = Number(userId);
        const restaurantIdNumber = Number(restaurantId);

        if (Number.isNaN(userIdNumber) || Number.isNaN(restaurantIdNumber)) {
            throw new BadRequestException("userId và restaurantId phải là số");
        }

        // 🔥 THÊM ĐOẠN NÀY
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
                userId: userIdNumber,
                restaurantId: restaurantIdNumber,
            }
        });

        if (existingLike) {
            await prisma.likeRes.deleteMany({
                where: {
                    userId: userIdNumber,
                    restaurantId: restaurantIdNumber,
                },
            });
            return true;
        }

        await prisma.likeRes.create({
            data: {
                userId: userIdNumber,
                restaurantId: restaurantIdNumber,
            },
        });

        return "Like restaurant successfully";
    },
    async getByRestaurant(req) {
        return " like thanh cong"
    },
    async getByUser(req) {
        return " like thanh cong"
    },


}

export default likeService;
