import { CreateLessonController } from '../../controllers/CreateLessonController';
import { PrismaLessonsRepository } from '../../repositories/prisma/PrismaLessonsRepository';
import { CreateLesson } from '../../services/CreateLesson';
import { LessonFactory } from '../LessonFactory';

class PrismaLessonsFactory implements LessonFactory {

    createLesson() {
        const prismaLessonsRepository = new PrismaLessonsRepository();
        const createLessonService = new CreateLesson(prismaLessonsRepository);
        const createLessonsController = new CreateLessonController(createLessonService);

        return {createLessonsController};
    };
};

export { PrismaLessonsFactory }