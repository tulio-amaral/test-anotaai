import request from 'supertest';
import { getConnection } from 'typeorm';

import app from '../app';
import createConnection from '../database';

describe('Tests for Categories', () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations()
  });

  afterAll(async() => {
    const connection = getConnection()
    await connection.dropDatabase()
    await connection.close()
  });

  it('Should be able to create a category', async() => {
    const response = await request(app).post('/categories').send({
      name: 'Category Name',
    });

    expect(response.status).toBe(201);
  })
})
