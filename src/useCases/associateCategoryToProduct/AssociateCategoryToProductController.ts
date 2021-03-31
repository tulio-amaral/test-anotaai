import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AssociateCategoryToProductUseCase from './AssociateCategoryToProductUseCase';

class AssociateCategoryToProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.body;
    const { id } = request.params;

    const associateCategory = container.resolve(AssociateCategoryToProductUseCase);

    await associateCategory.execute({ id, category_id });

    return response.status(201).send();
  }
}

export default AssociateCategoryToProductController;
