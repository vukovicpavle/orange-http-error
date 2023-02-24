import { NextFunction, Request, Response } from "express";

export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string);
}

export function httpErrorMiddleware(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void;
