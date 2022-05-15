import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
    tittle: string;
    description?: string;
}

export class CreateLesson {
    constructor(private lessonRepository: LessonsRepository) {};

    async execute(data: CreateLessonRequest) {

        if(!data.tittle) {
            throw new Error('Tittle is required.')
        };

        const tittleAlreadyExists = await this.lessonRepository.findByTittle(data.tittle);

        if(tittleAlreadyExists) {
            throw new Error('Tittle already exists.')
        }

        await this.lessonRepository.create(data);
    };
};