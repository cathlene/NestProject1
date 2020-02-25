import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductColorValidationPipe } from './pipes/product-color-validation.pipe';
import { GetProductsFitlerDto } from './dto/get-products-filter.dto';
import { Product } from './product.entity';
import { ProductColor } from './product-color.enum';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query(ValidationPipe) filterDto: GetProductsFitlerDto,
  ): Promise<Product[]> {
    // filter to filter query parameters

    return this.productsService.getProducts(filterDto);
  }

  @Get('/:id')
  getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    // kijkt of het een nummer is en parse het in een int, indien het geen nummer is gaat het een error geven
    return this.productsService.getProductById(id);
  }

  @Post()
  @UsePipes(ValidationPipe) // geeft aan dat in DTO je de decorators voor validatie gebruikt
  createProduct(
    //@Body('title') title: string, Om controller clean te houden gebruik je beter DTO
    //@Body('description') description: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.createProduct(createProductDto);
  }

  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }

  @Put('/:id')
  updateColorProduct(
    @Param('id') id: number,
    @Body('color', ProductColorValidationPipe) color: ProductColor,
  ): Promise<Product> {
    //validaiton pipe is an custom pipe om te kijken of color wel toegelaten value heeft
    return this.productsService.updateProduct(id, color);
  }
}
