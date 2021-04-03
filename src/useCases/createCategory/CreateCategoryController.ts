import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createProductUseCase = container.resolve(CreateCategoryUseCase);

    await createProductUseCase.execute(name);

    return response.status(201).send();
  }
}

export default CreateCategoryController;
