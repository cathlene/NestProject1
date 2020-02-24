import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmCOnfig } from './config/typeorm.congif';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmCOnfig),
    ProductsModule],
})
export class AppModule {}
