import { ServerError } from './ServerError.entity';

export class ServerResponse<T, V> {
  success: boolean;
  data: T | null;
  error: V | null;

  constructor(partial: Partial<ServerResponse<T, V>>) {
    Object.assign(this, partial);
  }
}

export function serverSuccessResponse<T>(data: T) {
  return new ServerResponse<T, null>({
    success: true,
    data,
    error: null,
  });
}

export function serverErrorResponse(error: any, code: number) {
  return new ServerResponse<null, ServerError>({
    success: false,
    data: null,
    error: new ServerError({
      code,
      msg: error,
    }),
  });
}
