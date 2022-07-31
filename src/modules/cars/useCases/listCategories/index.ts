import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUSeCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(
  listCategoriesUSeCase
);

export { listCategoryController };
