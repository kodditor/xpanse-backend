import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BillsService {
  constructor(private readonly db: PrismaService) {}

  async getBills() {
    return this.db.bill.findMany();
  }

  async findBill(where: Prisma.BillWhereUniqueInput) {
    return this.db.bill.findUnique({ where });
  }

  async createBill(data: Prisma.BillCreateInput) {
    return this.db.bill.create({ data });
  }

  async updateBill(
    where: Prisma.BillWhereUniqueInput,
    data: Prisma.BillUpdateInput,
  ) {
    return this.db.bill.update({
      where,
      data,
    });
  }

  async deleteBill(where: Prisma.BillWhereUniqueInput) {
    return this.db.bill.delete({
      where,
    });
  }
}
