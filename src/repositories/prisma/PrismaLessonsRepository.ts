import { Lesson } from '../../entities/Lesson';
import { prisma } from './../../prisma';
import { LessonsRepository, CreateLessonData } from './../LessonsRepository';

export class PrismaLessonsRepository implements LessonsRepository {
    async create(data: CreateLessonData): Promise<void> {
        await prisma.lesson.create({
            data
        });
    };

    async findByTittle(tittle: string): Promise<Lesson> {
        const lesson = await prisma.lesson.findFirst({
            where:{
                tittle: tittle
            }
        });

        return lesson as Lesson;
    }
};