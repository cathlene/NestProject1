import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.respository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]), // now we can consume this in the service
    AuthModule, // nu alles gerelateerd met authentication is ook toegangelijk via hier
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
