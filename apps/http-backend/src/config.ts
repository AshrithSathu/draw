import { Request } from "express";

export interface globalRequest extends Request {
  userId?: string;
}

export const jwtsecret = "secret";
