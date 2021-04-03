import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindCategoryByTitleUseCase from './FindCategoryByTitleUseCase';

class FindCategoryByTitleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const findCategoryByTitleUseCase = container.resolve(FindCategoryByTitleUseCase);
    const categories = await findCategoryByTitleUseCase.execute(String(name));

    return response.json(categories);
  }
}

export default FindCategoryByTitleController;
