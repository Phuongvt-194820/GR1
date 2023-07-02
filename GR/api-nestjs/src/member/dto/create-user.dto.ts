import {IsEmpty,IsEnum,IsNotEmpty,IsNumber,IsString,} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/member.schema';
  
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
  
    @IsNotEmpty()
    @IsString()
    readonly email: string;
  
    @IsNotEmpty()
    @IsNumber()
    readonly phoneNumber: number;
  
    @IsNotEmpty()
    @IsEnum(Category, { message: 'Please enter correct position.' })
    readonly category: Category;
  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
}