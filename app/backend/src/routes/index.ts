import { Express, Router, Request, Response, NextFunction } from "express";

import { authRoute } from "@routes/auth.route";
import { productRoute } from "@routes/product.route";
import { userRoute } from "@routes/user.route";
import { healthCheckRoute } from "@routes/health-check.route";
import { authMiddleware } from "@middlewares";
import { ErrorCodes, GlobalError } from "@exception";

const baseApi: Router = Router();

export const registerRoutes = (app: Express) => {
  baseApi.use("/auth", authRoute);

  baseApi.use("/users", authMiddleware.authenticate, userRoute);

  baseApi.use("/products", authMiddleware.authenticate, productRoute);

  baseApi.use("/healthCheck", healthCheckRoute);

  app.use("/api/v1", baseApi);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new GlobalError(ErrorCodes.PATH_NOT_FOUND);
    next(err);
  });
};
