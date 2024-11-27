import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsOptional } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;
  
  @IsOptional()
  phone?: number;
}
