import {Body,Controller,Delete,Get,Param,Post,Put,Query,Req,UseGuards,} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Member } from './schemas/member.schema';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
    
@Controller('members')
export class MemberController {
    constructor(private memberService: MemberService) {}

    @Get()
    async getAllMembers(@Query() query: ExpressQuery): Promise<Member[]> {
        return this.memberService.findAll(query);
    }

    @Post()
    @UseGuards(AuthGuard())
    async createMember(@Body()member: CreateUserDto,@Req() req,): Promise<Member> {
        return this.memberService.create(member, req.user);
    }

    @Get(':id')
    async getMember(@Param('id')id: string,): Promise<Member> {
        return this.memberService.findById(id);
    }

    @Put(':id')
    async updateMember(@Param('id')id: string,@Body()member: UpdateUserDto,): Promise<Member> {
        return this.memberService.updateById(id, member);
    }

    @Delete(':id')
    async deleteMember(@Param('id')id: string,): Promise<Member> {
        return this.memberService.deleteById(id);
    }
}