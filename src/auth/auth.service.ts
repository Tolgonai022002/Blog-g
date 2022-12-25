import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto)
        return user
    }

    //   async register(registerUserDto: CreateUserDto){
//                         const userRegis = await this.userService.getUserByLogin(registerUserDto.login)
//                         if(userRegis){
//                           throw new HttpException('USER WITH THIS LOGIN IS ALREADY EXIST!',HttpStatus.BAD_REQUEST)
//                         }
                        
//                         const hash = await bcrypt.hash(registerUserDto.password)
//                         const user = await this.userService.register({...registerUserDto,password: hash})
//                         return this.token(user)
//   }

    async registration(userDto: CreateUserDto){
        const oneUsr = await this.userService.findOneUSerByLogin(userDto.login)
        if(oneUsr){
            throw new HttpException('USER WITH SUCH LOGIN IS ALREADY EXIST!',HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash(userDto.password,5)
            const user = await this.userService.createNewUser({...userDto,password:hashPass})
            return this.generateToken(user)
    }

    //   async validateUser(createUserDto: CreateUserDto){
//     const user = await this.userService.getUserByLogin(createUserDto.login)
//     const isItEqual = await bcrypt.compare(createUserDto.password,user.password)
//     if( user && isItEqual){
//       return this.token(user)
//     }
//     throw new BadRequestException('PASSWORD OR LOGIN IS NOT CORRECT!')
  

    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.findOneUSerByLogin(userDto.login)
        const passEq = await bcrypt.compare(userDto.password,user.password)
        if(user && passEq){
            return this.generateToken(user)
        }
        throw new UnauthorizedException('PASSWORD OR LOGIN IS INCORRECT!')
    }

    async generateToken(user: User){
        const payload = {login: user.login,
                        id: user.id}
        return {token: this.jwtService.sign(payload)}
    }

        //   async token(user: User){
//                         const payload = {
//                           login: user.login,
//                           password: user.password
//                         }
//                         return{
//                           token: this.jwtService.sign(payload)
//                         }
//   }
}
