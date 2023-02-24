import { NextFunction, Request, Response } from "express";

/**
 * @description HttpError class
 * @export
 * @class HttpError
 * @extends {Error}
 */
export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

/**
 * @description HttpError middleware
 * @export
 * @param {HttpError} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function httpErrorMiddleware(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  } else {
    next(err);
  }
}
