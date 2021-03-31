import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductUseCase from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, price } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({ title, description, price });

    return response.status(201).send();
  }
}

export default CreateProductController;
