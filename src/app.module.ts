import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmCOnfig } from './config/typeorm.congif';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmCOnfig),
    ProductsModule,
    AuthModule],
})
export class AppModule {}
