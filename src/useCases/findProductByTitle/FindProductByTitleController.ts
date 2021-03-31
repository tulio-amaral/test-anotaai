import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindProductByTitleUseCase from './FindProductByTitleUseCase';

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.query;

    const findProductByTitleUseCase = container.resolve(FindProductByTitleUseCase);
    const products = await findProductByTitleUseCase.execute(String(title));

    return response.json(products);
  }
}

export default ListProductController;
