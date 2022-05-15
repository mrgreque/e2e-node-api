import { Lesson } from "../entities/Lesson";

export interface CreateLessonData {
    tittle: string;
    description?: string;
};

export interface LessonsRepository {
    create(data: CreateLessonData): Promise<void>;
    findByTittle(tittle: string): Promise<Lesson>;
};