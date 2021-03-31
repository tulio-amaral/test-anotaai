import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindCategoryByTitleUseCase from './FindCategoryByTitleUseCase';

class FindCategoryByTitleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.query;

    const findCategoryByTitleUseCase = container.resolve(FindCategoryByTitleUseCase);
    const categories = await findCategoryByTitleUseCase.execute(String(title));

    return response.json(categories);
  }
}

export default FindCategoryByTitleController;
