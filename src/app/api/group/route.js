import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const group = await prisma.group.findMany();
    await prisma.$disconnect();
    return NextResponse.json({
        group
    });
}

export async function POST(request) {
    const postFormData = await request.json()
    const prisma = new PrismaClient();
    await prisma.$connect();
    const userData = await prisma.group.create(
        { data: postFormData }
    );
    await prisma.$disconnect();
    return NextResponse.json({
        data: userData,
    });
}
