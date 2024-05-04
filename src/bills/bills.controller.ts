import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  
  import {
    serverErrorResponse,
    serverSuccessResponse,
  } from 'src/common/entities/ServerResponse.entity';
  import { Bill, Prisma } from '@prisma/client';
import { BillsService } from './bills.service';

@Controller('bills')
export class BillsController {
        constructor(private readonly BillService: BillsService) {}
        @Get()
        async getAllBills() {
          try {
            const data = await this.BillService.getBills();
            return serverSuccessResponse<Bill[]>(data);
          } catch (err) {
            serverErrorResponse(err, 500);
          }
        }
      
        @Get(':id')
        async findGroup(@Param('id', ParseIntPipe) id: number) {
          try {
            const data = await this.BillService.findBill({ id: id });
            return serverSuccessResponse<Bill>(data);
          } catch (err) {
            serverErrorResponse(err, 500);
          }
        }
      
        @Post()
        async createBill(@Body() postBody: Prisma.BillCreateInput) {
          try {
            const data = await this.BillService.createBill(postBody);
            return serverSuccessResponse<Bill>(data);
          } catch (err) {
            serverErrorResponse(err, 500);
          }
        }
      
        @Patch(':id')
        async updateBill(
          @Param('id', ParseIntPipe) id: number,
          @Body() postData: Prisma.BillUpdateInput,
        ) {
          try {
            const data = await this.BillService.updateBill(
              {
                id: id,
              },
              postData,
            );
            return serverSuccessResponse<Bill>(data);
          } catch (err) {
            serverErrorResponse(err, 500);
          }
        }
      
      
        @Delete(':id')
        async deleteBill(@Param('id', ParseIntPipe) id: number) {
          try {
            const data = await this.BillService.deleteBill({ id: id });
            return serverSuccessResponse<Bill>(data);
          } catch (err) {
            serverErrorResponse(err, 500);
          }
        }
      
      
}
