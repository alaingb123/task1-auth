import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deparment } from './entities/deparment.entity';
import { ObjectId, Repository } from 'typeorm';

@Injectable()
export class DeparmentService {
  constructor(
    @InjectRepository(Deparment)
    private readonly deparmentRepository: Repository<Deparment>,
    ){}

    
  create({name}: CreateDeparmentDto) {
    const departName = this.deparmentRepository.findOneBy({name})
    console.log(departName)
    if (!departName){
      throw new BadRequestException ('Deparment alredy exist');
    }
    return this.deparmentRepository.save({name});
  }

  findAll() {
    return this.deparmentRepository.find();
  }

  findOne(id: ObjectId) {
    return this.deparmentRepository.findOneBy({id});
  }

 async update(id: ObjectId, updateDeparmentDto: UpdateDeparmentDto) {
    let toUpdate=await this.deparmentRepository.findOneBy({id});
        let update =Object.assign(toUpdate,updateDeparmentDto);
        const depa_update = await this.deparmentRepository.save(toUpdate);
        return depa_update;
  }

  async remove(id: ObjectId) {
    return await this.deparmentRepository.delete(id)
  }
}
