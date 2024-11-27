import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) { }

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.createService(createServiceDto);
  }

  @Get()
  findAll() {
    return this.servicesService.findAllServices();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.servicesService.findOneService(name);
  }

}
