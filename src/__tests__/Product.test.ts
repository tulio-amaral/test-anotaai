import request from 'supertest';
import { getConnection } from 'typeorm';

import app from '../app';
import createConnection from '../database';

describe('Tests for Products', () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations()
  });

  afterAll(async() => {
    const connection = getConnection()
    await connection.dropDatabase()
    await connection.close()
  });
  it('Should return 400 if no title is provided', async() => {
    const response = await request(app).post('/products').send({
      description: 'What does the product do',
      price: 10
    })
    expect(response.status).toBe(400)
  });

  it('Should return 400 if no description is provided', async() => {
    const response = await request(app).post('/products').send({
      title: 'Product Title',
      price: 10
    })
    expect(response.status).toBe(400)
  });

  it('Should return 400 if no price is provided', async() => {
    const response = await request(app).post('/products').send({
      title: 'Product Title',
      description: 'What does the product do',
    })
    expect(response.status).toBe(400)
  });

  it('Should be able to create a product', async() => {
    const response = await request(app).post('/products').send({
      title: 'Product Title',
      description: 'What does the product do',
      price: 10
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a product its name is already in use', async() => {
    const response = await request(app).post('/products').send({
      title: 'Product Title',
      description: 'What does the product do',
      price: 10
    })

    expect(response.status).toBe(400)
  })
})
