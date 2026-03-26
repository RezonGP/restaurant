import { statusCodes } from "./status-code.helper.js";

export const responseSuccess = (data, message = "Success", statusCode = statusCodes.OK) => {
    return {
        status: "success",
        statusCode: statusCode,
        message,
        data,
        doc: "swagger.com",
    }
};

export const responseError = (message = "Error", statusCode = statusCodes.INTERNAL_SERVER_ERROR, stack,) => {
    return {
        status: "error",
        statusCode: statusCode,
        message,
        stack,
        doc: "swagger.com",
    }
};