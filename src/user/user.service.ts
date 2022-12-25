import { HttpException, Injectable , HttpStatus,forwardRef, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service'
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)private userRepo: Repository<User>,
     // forwardRef прочитала в гугле что так надо чтобы ошибок не было, но надо еще посмотреть какие выходы могут быть
    // @Inject(forwardRef(() => AuthService)) 
    //     private readonly authService: AuthService,
  ) {}

  async createNewUser(dto:CreateUserDto){
    return await this.userRepo.save(dto)
  }

  async getAllUsers(){
    return await this.userRepo.find()
  }


  async findOneUSerByLogin(login:string){
    return await this.userRepo.findOne({where:{login:login}})
  }

  async findUserById(id: number){
    return await this.userRepo.findOne({where:{id:id}})
  }

  async changeInfo(id:number,updateDto: UpdateUserDto){
    const updateUser = await this.userRepo.findOneBy({id})
    Object.assign(updateUser,updateDto)
    return await this.userRepo.save(updateDto)
  }

  async removeUser(id: number){
    await this.userRepo.delete(id)
    return 'User was successfully removed)'
  }

  // async register(createUserDto: CreateUserDto) : Promise<CreateUserDto>{
  //               // return 'This action adds a new user';
  //               const username = createUserDto;

  //               const user = await this.userRepository.findOne({where: username})
  //               if(user){
  //                 throw new HttpException("The username already exists",HttpStatus.BAD_REQUEST)
  //               }

  //               const newUser = await this.userRepository.create(createUserDto);
  //               return await  this.userRepository.save(newUser)
  // }

  // async findAll() {
  //   return this.userRepository.find()
  // }

  // async findOneUserByLogin(login: string) {
  //   const {password, ...rest} = await this.userRepository.findOne({where:{login: login}})   // код под вопросом
  //   return rest
  //   // return await this.userRepository.findOne({where: { }}) //вроде внутри фигурных скобок должно быть id
  // }

  // async findOne(fullname:string){
  //   const oneOfUsers = await this.userRepository.findOne({where:{fullname}})
  //   if(!oneOfUsers){
  //     throw new BadRequestException("USER WAS NOT FOUND!")
  //   }
  //   return oneOfUsers
  // }



  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  // async getUserByLogin(login: string){
  //   const user = await this.userRepository.findOne({where:{login}})
  //   return user
  // }

  //  Мне кжеься тут надо еще дополнить , но я пока не уверена


}
