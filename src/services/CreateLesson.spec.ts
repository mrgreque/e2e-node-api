import { InMemoryLessonsRepository } from './../../test/repositories/InMemoryLessonsRepository';
import { CreateLesson } from './CreateLesson';

describe('CreateLesson service', () => {

    it('should be able to create a new lesson', async () => {
        const inMemoryLessonsRepository = new InMemoryLessonsRepository();
        const createLesson = new CreateLesson(inMemoryLessonsRepository);
    
        await expect(createLesson.execute({tittle: 'Nova aula'}))
            .resolves
            .not
            .toThrow();
    
        expect(inMemoryLessonsRepository.items)
            .toEqual(
                expect.objectContaining([{
                    tittle: 'Nova aula'
                }])
            );
    });

    it('should NOT be able to create a new lesson with invalid tittle', async () => {
        const inMemoryLessonsRepository = new InMemoryLessonsRepository();
        const createLesson = new CreateLesson(inMemoryLessonsRepository);
    
        await expect(createLesson.execute({tittle: ''}))
            .rejects
            .toThrow();
    
        expect(inMemoryLessonsRepository.items).toEqual([]);
    });
    
    it('should NOT be able to create a new lesson where tittle already exists', async() => {
        const inMemoryLessonsRepository = new InMemoryLessonsRepository();
        const createLesson = new CreateLesson(inMemoryLessonsRepository);
    
        await expect(createLesson.execute({tittle: 'Nova aula'}))
            .resolves
            .not
            .toThrow();
    
        expect(inMemoryLessonsRepository.items)
            .toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        tittle: 'Nova aula'
                    })
                ])
            );
    
        await expect(createLesson.execute({tittle: 'Nova aula'}))
            .rejects
            .toThrow();
    });

});

