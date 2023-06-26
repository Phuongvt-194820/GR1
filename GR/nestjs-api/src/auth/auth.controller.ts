import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as moment from 'moment';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

class TodayResponse {
    @ApiProperty({ example: '20-06-2023', description: 'The current date' })
    date: string;
}
@ApiTags('Today')
@Controller('auth')

// class CreateUserDto{
//     @ApiProperty()
//     name: string;

//     @ApiProperty()
//     age: number;

//     @ApiProperty()
//     email: string;
// }

export class AuthController{
    //auth service is automatically created when initializing the controller
    constructor(private authService: AuthService){

    }
    //some requests from client
    //POST: .../auth/register
    @Post("/register") //register a new user
    register(
        @Body('email') email:string,
        @Body('password') password:string,){
        return{
            message: "Register an user",
        }
    }
    //POST: .../auth/login
    @Post("/login")
    login(@Body() loginData: any){
        return{
            message: "Login successfully",
            token: 'abc123',
        }
    }

    @Post("/aboutus")
    aboutus(){
        return{
            name: "Vu Thi Phuong",
            age: "22",
            mssv: "20194820",
            email:"phuong.vt1909@gmail.com",
        }
    }

    @Get('/today')
    getToday(): TodayResponse {
      const today = moment().format('DD-MM-YYYY');
      return { date: today };
    }

}