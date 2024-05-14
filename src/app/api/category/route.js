import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const incomeCategory = await prisma.incomeCategory.findMany();
    const expenseCategory = await prisma.expenseCategory.findMany();

    await prisma.$disconnect();
    return NextResponse.json({
        incomeCategory,
        expenseCategory,
    });
}
