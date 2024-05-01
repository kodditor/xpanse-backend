import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthEntity } from './health.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): HealthEntity {
    return this.appService.getHealth();
  }
}
