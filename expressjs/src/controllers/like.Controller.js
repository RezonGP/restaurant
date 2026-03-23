import { responseSuccess } from "../common/middlewares/helpers/response.helpers.js";
import likeService from "../services/like.Service.js";

export const likeController = {
    async likeRestaurant(req, res, next) {
        const result = await likeService.likeRestaurant(req);
        const response = responseSuccess(result, `Like nhà hàng thành công`);
        res.status(response.statusCode).json(response);
    },
    async unlikeRestaurant(req, res, next) {
        const result = await likeService.unlikeRestaurant(req);
        const response = responseSuccess(result, `Unlike nhà hàng thành công`);
        res.status(response.statusCode).json(response);
    },
    async getLikesByRestaurant(req, res, next) {
        const result = await likeService.getLikesByRestaurant(req);
        const response = responseSuccess(result, `Lấy danh sách like theo nhà hàng thành công`);
        res.status(response.statusCode).json(response);
    },
    async getLikesByUser(req, res, next) {
        const result = await likeService.getLikesByUser(req);
        const response = responseSuccess(result, `Lấy danh sách like theo user thành công`);
        res.status(response.statusCode).json(response);
    }
}