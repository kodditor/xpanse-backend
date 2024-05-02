import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly db: PrismaService) {}

  async getGroups() {
    return this.db.group.findMany();
  }

  async findGroup(where: Prisma.GroupWhereUniqueInput) {
    return this.db.group.findUnique({ where });
  }

  async createGroup(data: Prisma.GroupCreateInput) {
    return this.db.group.create({ data });
  }

  async updateGroup(
    where: Prisma.GroupWhereUniqueInput,
    data: Prisma.GroupUpdateInput,
  ) {
    return this.db.group.update({
      where,
      data,
    });
  }

  async deleteGroup(where: Prisma.GroupWhereUniqueInput) {
    return this.db.group.delete({
      where,
    });
  }
}
