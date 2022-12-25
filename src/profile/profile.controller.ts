import { Controller, Get,UseGuards, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuards } from 'src/auth/guards/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuards)
  @Post('postProf')
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createNewProfile(createProfileDto);
  }

  @UseGuards(JwtAuthGuards)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @UseGuards(JwtAuthGuards)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @UseGuards(JwtAuthGuards)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.updateInfo(+id, updateProfileDto);
  }

  @UseGuards(JwtAuthGuards)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.removeProfile(+id);
  }
}
