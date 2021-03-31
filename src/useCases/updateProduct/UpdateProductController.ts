import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProductUseCase from './UpdateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, price } = request.body;
    const { id } = request.params;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({ id, title, description, price });

    return response.status(201).send();
  }
}

export default CreateProductController;
