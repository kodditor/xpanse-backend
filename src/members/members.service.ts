import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Member, Prisma } from '@prisma/client';

@Injectable()
export class MembersService {
  constructor(private db: PrismaService) {}

  async createMember(data: Prisma.MemberCreateInput): Promise<Member> {
    return this.db.member.create({ data });
  }

  async getMembers(): Promise<Member[]> {
    return this.db.member.findMany({
      include: {
        groups: true,
      },
    });
  }

  async findMember(
    where: Prisma.MemberWhereUniqueInput,
  ): Promise<Member | null> {
    return this.db.member.findUnique({
      where,
      include: {
        groups: true,
      },
    });
  }

  async updateMember(
    where: Prisma.MemberWhereUniqueInput,
    data: Prisma.MemberUpdateInput,
  ): Promise<Member | null> {
    return this.db.member.update({
      where,
      data: {
        ...data,
        updateAt: new Date(),
      },
      include: {
        groups: true,
      },
    });
  }

  async deleteMember(where: Prisma.MemberWhereUniqueInput): Promise<Member> {
    return this.db.member.delete({
      where,
    });
  }
}
