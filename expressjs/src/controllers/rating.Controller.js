import { responseSuccess } from "../common/helpers/response.helper.js";
import ratingService from "../services/rating.Service.js";



export const ratingController = {
    async createRating(req, res, next) {
        const result = await ratingService.createRating(req);
        const response = responseSuccess(result, `Tạo đánh giá thành công`);
        res.status(response.statusCode).json(response);
    },
    async getRatingsByRestaurant(req, res, next) {
        const result = await ratingService.getRatingsByRestaurant(req);
        const response = responseSuccess(result, `Lấy danh sách đánh giá theo nhà hàng thành công`);
        res.status(response.statusCode).json(response);
    },
    async getRatingsByUser(req, res, next) {
        const result = await ratingService.getRatingsByUser(req);
        const response = responseSuccess(result, `Lấy danh sách đánh giá theo user thành công`);
        res.status(response.statusCode).json(response);
    }
}