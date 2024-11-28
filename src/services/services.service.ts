import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { randomUUID, UUID } from 'crypto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) { }
  async createService(CreateServiceDto: CreateServiceDto) {
    const serviceCreate = this.serviceRepository.create({
      id: randomUUID(),
      ...CreateServiceDto,
    });

    return await this.serviceRepository.save(serviceCreate);
  }

  async findAllServices() {
    return await this.serviceRepository.find();
  }

  async findOneService(name: string) {
    return await this.serviceRepository.findOne({ where: { name } });
  }
}
