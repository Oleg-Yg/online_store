import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CategoryController {
  async getAll(req, res, next) {
    try {
      const categories = await prisma.category.findMany();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
