import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ClientsModule, TypeOrmModule.forRoot({
    type : 'postgres',
    host : 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jack',
    database: 'test',
    entities: [],
    synchronize: true,
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
