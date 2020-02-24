import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct(
    //@Body('title') title: string, Om controller clean te houden gebruik je beter DTO
    //@Body('description') description: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.createProduct(createProductDto);
  }
}
