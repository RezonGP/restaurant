import { responseError } from "../helpers/response.helper.js";

const prismaCodeToStatus = (code) => {
    if (typeof code !== "string") return 500;
    if (code === "P2002") return 409;
    if (code === "P2003") return 400;
    if (code === "P2025") return 404;
    return 400;
};

export const errorMiddleware = (err, req, res, next) => {
    const isProd = process.env.NODE_ENV === "production";
    const statusCode = typeof err?.code === "number" ? err.code : prismaCodeToStatus(err?.code);
    const payload = responseError(err?.message ?? "Error", statusCode);

    if (!isProd) {
        payload.name = err?.name;
        payload.code = err?.code;
        payload.stack = err?.stack;
        if (err?.meta != null) payload.meta = err.meta;
        if (err?.cause != null) {
            payload.cause = {
                name: err.cause?.name,
                message: err.cause?.message,
                stack: err.cause?.stack,
            };
        }
    }

    res.status(statusCode).json(payload);
};
