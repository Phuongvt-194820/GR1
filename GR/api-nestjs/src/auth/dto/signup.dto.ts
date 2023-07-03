import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { Category } from '../schemas/user.schema';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(10)
  readonly phoneNumber: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  // @IsEnum()

}