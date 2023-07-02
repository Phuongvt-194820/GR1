import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

export enum Category {
  ADVENTURE = 'Adventure',
  ADMIN = "Admin",

}

@Schema({
  timestamps: true,
})
export class Member {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const MemberSchema = SchemaFactory.createForClass(Member);