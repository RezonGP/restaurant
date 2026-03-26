import { responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.Service.js";

export const likeController = {

    async like(req, res, next) {
        const result = await likeService.like(req);
        const response = responseSuccess(result, `like like successfully`);
        res.status(response.statusCode).json(response);
    },

    async getByRestaurant(req, res, next) {
        const result = await likeService.getByRestaurant(req);
        const response = responseSuccess(result, `getByRestaurant like`);
        res.status(response.statusCode).json(response);
    },

    async getByUser(req, res, next) {
        const result = await likeService.getByUser(req);
        const response = responseSuccess(result, `getByUser like successfully`);
        res.status(response.statusCode).json(response);

    }
}