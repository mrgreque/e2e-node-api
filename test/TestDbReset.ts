import { PrismaClient } from '@prisma/client';

export class TestDbReset {

    private prisma: any;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async reset() {
        await this.prisma.lesson.deleteMany();
    };

};