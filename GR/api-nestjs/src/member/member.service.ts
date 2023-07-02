import {BadRequestException,Injectable,NotFoundException,} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Member } from './schemas/member.schema';
  
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';
  
@Injectable()
export class MemberService {
    constructor(
        @InjectModel(Member.name)
        private memberModel: mongoose.Model<Member>,
    ) {}

    async findAll(query: Query): Promise<Member[]> {
        const resPerPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        const keyword = query.keyword
            ? {
                title: {
                $regex: query.keyword,
                $options: 'i',
                },
            }
            : {};

        const members = await this.memberModel
            .find({ ...keyword })
            .limit(resPerPage)
            .skip(skip);
        return members;
    }

    async create(member: Member, user: User): Promise<Member> {
        const data = Object.assign(member, { user: user._id });

        const res = await this.memberModel.create(data);
            return res;
        }

        async findById(id: string): Promise<Member> {
        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Please enter correct id.');
        }

        const member = await this.memberModel.findById(id);

        if (!member) {
            throw new NotFoundException('Member not found.');
        }

        return member;
    }

    async updateById(id: string, member: Member): Promise<Member> {
        return await this.memberModel.findByIdAndUpdate(id, member, 
        {
            new: true,
            runValidators: true,
        }
        );
    }

    async deleteById(id: string): Promise<Member> {
        return await this.memberModel.findByIdAndDelete(id);
    }
}