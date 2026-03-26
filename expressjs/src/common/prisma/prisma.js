let prisma;

export const getPrisma = async () => {
    if (prisma) return prisma;

    try {
        const mod = await import("./generated/prisma-client/index.js");
        const pkg = mod?.default ?? mod;
        const PrismaClient = pkg?.PrismaClient;
        if (!PrismaClient) throw new Error("Không tìm thấy PrismaClient");

        prisma = globalThis.prisma ?? new PrismaClient();
        if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
        return prisma;
    } catch (err) {
        const e = new Error("Prisma client chưa sẵn sàng. Hãy chạy: npm run prisma:generate");
        e.cause = err;
        throw e;
    }
};
