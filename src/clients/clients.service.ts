import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { randomUUID, UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientRepository.create({
      id: randomUUID(),
      ...createClientDto,
    });
    return await this.clientRepository.save(client);
  }

  async findAllClients() {
    return await this.clientRepository.find();
  }

  async findOne(id: UUID) {
    return await this.clientRepository.findOne({ where: { id } });
  }

  async updateClient(
    id: UUID,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const userclient = await this.clientRepository.findOne({ where: { id } });

    if (!userclient) {
      throw new NotFoundException('Cliente inexistente');
    }

    this.clientRepository.merge(userclient, updateClientDto);

    return this.clientRepository.save(userclient);
  }

  async removeClient(id: UUID): Promise<void> {
    await this.clientRepository.delete({ id });
  }
}
