import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFitlerDto } from './dto/get-products-filter.dto';
import { ProductRepository } from './product.respository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductColor } from './product-color.enum';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProductById(id: number): Promise<Product> {
    const found = await this.productRepository.findOne(id); // findOne is een ingebouwde functie van repository is async
    if (!found) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }

    return found;
  }

  getProducts(filterDto: GetProductsFitlerDto): Promise<Product[]> {
    return this.productRepository.getProducts(filterDto);
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }

  async updateProduct(id: number, color: ProductColor): Promise<Product> {
    const product = await this.getProductById(id);
    product.color = color;
    await product.save();
    return product;
  }
  async deleteProduct(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      // is een argument dat je krijgt als je delete uitvoert
      throw new NotFoundException('This id is not found');
    }
  }
}
