import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.respository';

@Module({
  imports:[
    TypeOrmModule.forFeature( [ProductRepository]), // now we can consume this in the service
    
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
