import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swagger from 'swagger-ui-express';

import AppError from './errors/AppError'
import router from './routes';
import './shared/container'
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(router);
app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

export default app;