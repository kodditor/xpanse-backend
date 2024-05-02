import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './bills/bills.module';
import { GroupsModule } from './groups/groups.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [BillsModule, GroupsModule, MembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
