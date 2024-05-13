import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const userData = await prisma.user.findMany(
        { where: { id: 1 } }
    );
    await prisma.$disconnect();
    return NextResponse.json({
        data: userData,
    });
}

export async function POST(request) {
    console.log('aaaaaaaaaa')
    const postFormData = await request.json()
    // const email = postFormData.email
    console.log(postFormData)
    const prisma = new PrismaClient();
    await prisma.$connect();
    const userData = await prisma.user.create(
        { data: postFormData }
    );
    await prisma.$disconnect();
    return NextResponse.json({
        data: userData,
    });
}
