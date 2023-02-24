import { NextFunction, Request, Response } from "express";

type HttpError = {
  status: number;
  message: string;
};

type httpErrorMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => void;
