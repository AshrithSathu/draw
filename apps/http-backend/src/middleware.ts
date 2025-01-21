import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtsecret } from "./config";

import { globalRequest } from "./config";

export function middleware(
  req: globalRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"] ?? "";

  const decoded = jwt.verify(token, jwtsecret);

  if (decoded) {
    req.userId = (decoded as any).userId;
    next();
  } else {
    res.status(401).send("Access denied");
  }
}
