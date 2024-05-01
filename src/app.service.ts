import { Injectable } from '@nestjs/common';
import { HealthEntity } from './health.entity';

@Injectable()
export class AppService {
  getHealth(): HealthEntity {
    return new HealthEntity({ ping: 'pong' });
  }
}
