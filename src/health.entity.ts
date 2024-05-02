export class HealthEntity {
  ping: string;
  constructor(partial: Partial<HealthEntity>) {
    Object.assign(this, partial);
  }
}
