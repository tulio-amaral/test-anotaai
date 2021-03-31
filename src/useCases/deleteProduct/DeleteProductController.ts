import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteProductUseCase from './DeleteProductUseCase';

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProductUseCase = container.resolve(DeleteProductUseCase);
    const products = await deleteProductUseCase.execute(id);

    return response.json(products);
  }
}

export default ListProductController;
