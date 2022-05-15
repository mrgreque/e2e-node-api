import crypto from 'node:crypto';
class Lesson {
    public readonly id?: string;
    public tittle: string | undefined;
    public description?: string;

    constructor(data: Lesson) {
        Object.assign(this, data);
    };
};

export { Lesson }