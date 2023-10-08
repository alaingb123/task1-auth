import { CatModule } from './Cats/cat.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DeparmentModule } from './deparment/deparment.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
      CatModule,
      TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "root",
      "database": "Cats",
      "entities": [join(__dirname, '**', '*.entity.{ts,js}')],
      "synchronize": true
    
    }),
      BreedsModule,
      UsersModule,
      AuthModule,
      DeparmentModule,
      CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
