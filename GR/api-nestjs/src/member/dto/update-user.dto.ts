import {IsEmpty,IsEnum,IsNotEmpty,IsNumber,IsString,IsOptional} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/member.schema';
  
export class UpdateUserDto {
    @IsOptional()
    @IsString()
    readonly name: string;
  
    @IsOptional()
    @IsString()
    readonly email: string;
  
    @IsOptional()
    @IsNumber()
    readonly phoneNumber: number;
  
    @IsOptional()
    @IsEnum(Category, { message: 'Please enter correct position.' })
    readonly category: Category;

    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
}
