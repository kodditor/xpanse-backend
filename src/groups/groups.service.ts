import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly db: PrismaService) {}

  async getGroups() {
    return this.db.group.findMany({
      include: {
        members: true,
      },
    });
  }

  async findGroup(where: Prisma.GroupWhereUniqueInput) {
    return this.db.group.findUnique({
      where,
      include: {
        members: true,
      },
    });
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
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        members: true,
      },
    });
  }

  async linkMemberToGroup(groupId: number, memberId: number) {
    return this.db.$transaction([
      this.db.group.update({
        where: {
          id: groupId,
        },
        data: {
          members: {
            connect: {
              id: memberId,
            },
          },
          updatedAt: new Date(),
        },
      }),
      this.db.member.update({
        where: {
          id: memberId,
        },
        data: {
          groups: {
            connect: {
              id: groupId,
            },
          },
          updateAt: new Date(),
        },
      }),
    ]);
  }

  async deleteGroup(where: Prisma.GroupWhereUniqueInput) {
    return this.db.group.delete({
      where,
    });
  }
}
