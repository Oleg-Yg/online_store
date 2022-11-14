import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next("Некорректный email или password");
      }
      const candidate = await prisma.user.findUnique({ where: { email } });
      if (candidate) {
        return next("Пользователь с таки email уже существует");
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await prisma.user.create({
        data: {
          email,
          role,
          password: hashPassword,
        },
      });
      const token = generateJwt(user.id, user.email, user.role);
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return next("Пользователь не найден");
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next("Указан неверный пароль");
      }
      const token = generateJwt(user.id, user.email, user.role);
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async check(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role);
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
