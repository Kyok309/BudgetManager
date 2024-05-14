import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const expense = await prisma.expense.findMany();
    await prisma.$disconnect();
    return NextResponse.json({
        expense
    });
}

export async function POST(request) {
    const postFormData = await request.json()
    console.log(postFormData);
    const prisma = new PrismaClient();
    await prisma.$connect();
    const userData = await prisma.expense.create(
        { data: postFormData }
    );
    await prisma.$disconnect();
    return NextResponse.json({
        data: userData,
    });
}
