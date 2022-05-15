import crypto from 'node:crypto';
import { Lesson } from "../../src/entities/Lesson";
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";

export class InMemoryLessonsRepository implements LessonsRepository {

    public items: Lesson[] = [];

    async create(data: CreateLessonData): Promise<void> {
        this.items.push(data);
    };

    async findByTittle(tittle: string): Promise<Lesson> {
        const lesson = await Promise.all(this.items.map(lesson => {
            if(lesson.tittle == tittle) {
                return lesson;
            };
        }));

        return lesson[0] as Lesson;
    };
};