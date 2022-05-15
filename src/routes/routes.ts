import { PrismaLessonsRepository } from './../repositories/prisma/PrismaLessonsRepository';
import express from 'express';
import { PrismaLessonsFactory } from '../factories/prisma/PrismaLessonFactory';

const router = express.Router();

router.post('/create/lessons', async (req, res) => {
    const {createLessonsController} = new PrismaLessonsFactory().createLesson();
    await createLessonsController.handle(req, res);
});

export default router;