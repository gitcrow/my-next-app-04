// Next.js와 Jest를 연동하는 코드

import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
};

export default createJestConfig(config);