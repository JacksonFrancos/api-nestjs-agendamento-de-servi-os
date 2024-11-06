import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { UUID } from 'crypto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAllClients();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.clientsService.removeClient(id);
  }
}
