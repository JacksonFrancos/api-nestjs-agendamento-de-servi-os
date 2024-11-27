import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
