export class ServerError {
  code: number;
  msg: string;

  constructor(partial: Partial<ServerError>) {
    Object.assign(this, partial);
  }
}
