import { Request, Response } from 'express';
import { CreateLesson } from './../services/CreateLesson';

class CreateLessonController {

    constructor(private createLessonServices: CreateLesson) {};

    async handle(req: Request, res: Response) {
        const { tittle, description } = req.body;

        try {
            await this.createLessonServices.execute({tittle, description});

            res.status(201).json({
                message: 'Lesson created!'
            })
        } catch(err: any) {
            res.status(400).json({
                message: err.message || 'Error'
            });
        };
    };

};

export { CreateLessonController };