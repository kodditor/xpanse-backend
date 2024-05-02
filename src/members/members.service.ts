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
    return this.db.member.findMany();
  }

  async findMember(
    where: Prisma.MemberWhereUniqueInput,
  ): Promise<Member | null> {
    return this.db.member.findUnique({ where });
  }

  async updateMember(
    where: Prisma.MemberWhereUniqueInput,
    data: Prisma.MemberUpdateInput,
  ): Promise<Member | null> {
    return this.db.member.update({
      where,
      data,
    });
  }

  async deleteMember(where: Prisma.MemberWhereUniqueInput): Promise<Member> {
    return this.db.member.delete({
      where,
    });
  }
}
