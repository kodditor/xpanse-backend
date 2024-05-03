import { Request, Response, NextFunction } from 'express';
import { serverErrorResponse } from 'src/common/entities/ServerResponse.entity';
import { config } from 'src/config';

const authKey = config.auth.key;

export function authenticate(req: Request, _: Response, next: NextFunction) {
  if (req.headers['authorization'] !== `Bearer ${authKey}`) {
    next(serverErrorResponse(new Error('Unauthorized Request'), 403));
  }
  next();
}
