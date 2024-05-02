import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  serverErrorResponse,
  serverSuccessResponse,
} from 'src/common/entities/ServerResponse.entity';
import { GroupsService } from './groups.service';
import { Group, Prisma } from '@prisma/client';

@Controller('groups')
export class GroupsController {
  constructor(private readonly GroupService: GroupsService) {}

  @Get()
  async getAllGroups() {
    try {
      const data = await this.GroupService.getGroups();
      return serverSuccessResponse<Group[]>(data);
    } catch (err) {
      serverErrorResponse(err, 500);
    }
  }

  @Get(':id')
  async findGroup(@Param('id') id: string) {
    try {
      const data = await this.GroupService.findGroup({ id: Number(id) });
      return serverSuccessResponse<Group>(data);
    } catch (err) {
      serverErrorResponse(err, 500);
    }
  }

  @Post()
  async createGroup(@Body() postBody: Prisma.GroupCreateInput) {
    try {
      const data = await this.GroupService.createGroup(postBody);
      return serverSuccessResponse<Group>(data);
    } catch (err) {
      serverErrorResponse(err, 500);
    }
  }

  @Patch(':id')
  async updateGroup(
    @Param('id') id: string,
    @Body() postData: Prisma.GroupUpdateInput,
  ) {
    try {
      const data = await this.GroupService.updateGroup(
        {
          id: Number(id),
        },
        postData,
      );
      return serverSuccessResponse<Group>(data);
    } catch (err) {
      serverErrorResponse(err, 500);
    }
  }

  // TODO: Add functionality to link member to a group.

  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    try {
      const data = await this.GroupService.deleteGroup({ id: Number(id) });
      return serverSuccessResponse<Group>(data);
    } catch (err) {
      serverErrorResponse(err, 500);
    }
  }
}
