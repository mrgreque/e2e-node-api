import { TestDbReset } from './../test/TestDbReset';
import request from 'supertest';
import app from './app';

const testDb = new TestDbReset();

describe('[e2e] CreateLesson', () => {

    afterEach(async () => {
        testDb.reset();
    });

    it('[e2e] should be able create a new lesson', async() => {
        const response = await request(app)
            .post('/create/lessons')
            .send({ tittle: 'Nova Aula'});

        expect(response.status).toBe(201);
        expect(response.body.error).toBeFalsy();
    });

    it('[e2e] should NOT be able create a new lesson with invalid tittle', async() => {
        const response = await request(app)
            .post('/create/lessons')
            .send({ tittle: ''});

        expect(response.status).toBe(400);
    });

    it('[e2e] should NOT be able create a new lesson where tittle already exists', async() => {
        const firstResponse = await request(app)
            .post('/create/lessons')
            .send({ tittle: 'Nova Aula'});

        const LastResponse = await request(app)
            .post('/create/lessons')
            .send({ tittle: 'Nova Aula'})

        expect(firstResponse.status).toBe(201);
        expect(firstResponse.body.message).toEqual('Lesson created!');
        expect(LastResponse.status).toBe(400);
    });

});