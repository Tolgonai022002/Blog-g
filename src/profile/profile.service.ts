import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(@InjectRepository(Profile) 
              private profRepo: Repository<Profile>){}


  async createNewProfile(createProfileDto: CreateProfileDto) {
    return await this.profRepo.save({...createProfileDto})
  }

  async findAll() {
    return await this.profRepo.find()
  }

  async findOne(id: number) {
    return await this.profRepo.find({where:{id:id}})
  }

  async updateInfo(id: number, updateProfileDto: UpdateProfileDto) {
    const updatedInfo = await this.profRepo.findOneBy({id})
    Object.assign(updatedInfo,updateProfileDto)
    return await this.profRepo.save(updatedInfo)
  }

  async removeProfile(id: number) {
    await this.profRepo.delete(id)
  }
}
