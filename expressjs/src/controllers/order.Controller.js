import { responseSuccess } from "../common/helpers/response.helper.js";
import orderService from "../services/order.Service.js";



export const orderController = {
    async createOrder(req, res, next) {
        const result = await orderService.createOrder(req);
        const response = responseSuccess(result, `Tạo đơn hàng thành công`);
        res.status(response.statusCode).json(response);
    }
}