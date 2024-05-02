import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MembersService } from './members.service';
import {
  serverErrorResponse,
  serverSuccessResponse,
} from 'src/common/entities/ServerResponse.entity';
import { Member, Prisma } from '@prisma/client';

@Controller('members')
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Get()
  async getAllMembers() {
    try {
      const data = await this.memberService.getMembers();
      return serverSuccessResponse<Member[]>(data);
    } catch (err) {
      return serverErrorResponse(err, 500);
    }
  }

  @Get(':id')
  async getMemberbyId(@Param('id') id: string) {
    try {
      const data = await this.memberService.findMember({ id: Number(id) });
      return serverSuccessResponse<Member>(data);
    } catch (err) {
      return serverErrorResponse(err, 500);
    }
  }

  @Post()
  async createMember(@Body() postBody: Prisma.MemberCreateInput) {
    try {
      const data = await this.memberService.createMember(postBody);
      return serverSuccessResponse<Member>(data);
    } catch (err) {
      return serverErrorResponse(err, 500);
    }
  }
  @Patch(':id')
  async updateMember(
    @Param('id') id: string,
    @Body() postData: Prisma.MemberUpdateInput,
  ) {
    try {
      const data = await this.memberService.updateMember(
        { id: Number(id) },
        postData,
      );
      return serverSuccessResponse<Member>(data);
    } catch (err) {
      return serverErrorResponse(err, 500);
    }
  }

  @Delete(':id')
  async deleteMember(@Param('id') id: string) {
    try {
      const data = await this.memberService.deleteMember({ id: Number(id) });
      return serverSuccessResponse<Member>(data);
    } catch (err) {
      return serverErrorResponse(err, 500);
    }
  }
}
