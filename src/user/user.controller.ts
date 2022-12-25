import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags , ApiResponse} from '@nestjs/swagger';
import { JwtAuthGuards } from 'src/auth/guards/jwt-auth.guard';
// import { UserInfoDto } from './dto/user-info.dto';

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @ApiOperation({summary:"Registered user" })
  @UseGuards(JwtAuthGuards)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createNewUser(createUserDto);
  }

  @ApiOperation({summary: "Get all users"})
  @UseGuards(JwtAuthGuards)
  @Get()
  findAll() {
    return this.userService.getAllUsers();  
  }

  @ApiOperation({summary: "Get info about user"})
  @UseGuards(JwtAuthGuards)
  @Get(':login')
  findOne(@Param('login') login: string) {
    return this.userService.findOneUSerByLogin(login);
  }


  @ApiOperation({summary: "Update user"})
  @UseGuards(JwtAuthGuards)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.changeInfo(+id, updateUserDto);
  }

  @ApiOperation({summary: "Delete one user"})
  @UseGuards(JwtAuthGuards)
  @Delete(':id')
  remove(@Param('id') id: number) {
     return this.userService.removeUser(id);
  }
}
