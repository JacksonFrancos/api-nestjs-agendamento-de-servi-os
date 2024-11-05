import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;
}
