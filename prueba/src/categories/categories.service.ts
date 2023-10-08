import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ObjectId, Repository } from 'typeorm';
import { Deparment } from 'src/deparment/entities/deparment.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository <Category>,
    @InjectRepository(Deparment)
private readonly deparmentRepository: Repository<Deparment>,
){}

  async create(createCategoryDto: CreateCategoryDto) {
    const deparment = await this.deparmentRepository.findOneBy(createCategoryDto.departamento_)
    
        if (!deparment){
            throw new BadRequestException('Deparment not found');
        }
        return await this.categoryRepository.save(createCategoryDto)
  }

  findAll() {
    return this.categoryRepository.find()
  }

 async findOne(id: ObjectId) {
    return await this.categoryRepository.findOneBy({id})
  }

 async update(id: ObjectId, updateCategoryDto: UpdateCategoryDto) {
    let toUpdate=await this.categoryRepository.findOneBy({id});
        let update =Object.assign(toUpdate,updateCategoryDto);
        const category_update = await this.categoryRepository.save(toUpdate);
        return category_update;;
  }

  async remove(id: ObjectId) {
    return await this.categoryRepository.delete(id);
  }
}
