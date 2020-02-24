import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe, NotFoundException, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductColorValidationPipe } from './pipes/product-color-validation.pipe';
import { GetProductsFitlerDto } from './dto/get-products-filter.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
/*
  @Get()
  getProducts(@Query(ValidationPipe)filterDto: GetProductsFitlerDto): Product[] { // filter to filter query parameters
    if(Object.keys(filterDto).length) {// if we have filters to apply
      return this.productsService.getProductsWithFilter(filterDto);
    }
    else{
      return this.productsService.getAllProducts();
    }
    
  }

  @Get('/:id')
  getProductById(@Param('id')id:string): Product{
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
  deleteProduct(
    @Param('id')id:string
  ) {
    return this.productsService.deleteProduct(id);
  }

  
  @Put('/:id')
  updateColorProduct(@Param('id')id:string, @Body('color',ProductColorValidationPipe)color: ProductColor ): Product{ //validaiton pipe is an custom pipe om te kijken of color wel toegelaten value heeft
    return this.productsService.updateProduct(id,color);
  }*/
}
