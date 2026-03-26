import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { DATABASE_URL } from "../../../constant/app.constant.js";

import prismaClientPackage from "./prisma-client/index.js";

const { PrismaClient } = prismaClientPackage;

if (!DATABASE_URL) {
    throw new Error("Thiếu DATABASE_URL. Hãy cấu hình trong file .env");
}

const url = new URL(DATABASE_URL);
// console.log(url);

const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1),
    port: url.port ? Number(url.port) : undefined, // code mẫu trong doc không có port (LƯU Ý phải thêm port)
    connectionLimit: 5,
});

const prisma = new PrismaClient({
    adapter,
});

try {
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`;
    console.log(
        "✅ [PRISMA] Connection has been established successfully.",
        result,
    );
} catch (error) {
    console.error("❌ Unable to connect to the database:", error);
}

export { prisma };
