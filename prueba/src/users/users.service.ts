import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository <User>,
  ){}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }

 
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

 

  async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }


  /* findOneByEmailWithPassword(email:string){
    return this.userRepository.findOne({
      where: {email},
      select:['id', 'name', 'email', 'password', 'role'],
    })
  }*/

   /*

 async updateUser(id: number, updateUserDto: UpdateUserDto) {
    let toUpdate=await this.userRepository.findOneBy({id});
    let update =Object.assign(toUpdate,updateUserDto);
    const user_update = await this.userRepository.save(toUpdate);
    return user_update;
  } */
}
