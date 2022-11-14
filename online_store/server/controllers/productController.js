import { PrismaClient } from "@prisma/client";
import * as uuid from "uuid";
import path from "path";
const prisma = new PrismaClient();
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ProductController {
  async getAll(req, res, next) {
    try {
      const products = await prisma.product.findMany({
        include: { category: true, productInfo: true },
      });
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: {
          id: Number(id),
        },
        include: { category: true, productInfo: true },
      });
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { name, price, categoryId } = req.body;
      let { info } = req.body;
      const { img } = req.files;
      const images = [];

      if (Array.isArray(img)) {
        img.forEach((i) => {
          let fileName = uuid.v4() + ".jpg";
          i.mv(path.resolve(__dirname, "..", "static", fileName));
          images.push(fileName);
        });
      } else {
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, "..", "static", fileName));
        images.push(fileName);
      }

      const product = await prisma.product.create({
        data: {
          name,
          price: Number(price),
          categoryId: Number(categoryId),
          img: images,
        },
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          prisma.productInfo.create({
            title: i.title,
            description: i.description,
            productId: i.productId,
          })
        );
      }

      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedProduct = await prisma.product.delete({
        where: {
          id: Number(id),
        },
      });
      res.json(deletedProduct);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const product = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: req.body,
        include: { category: true },
      });
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
