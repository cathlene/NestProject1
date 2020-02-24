import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFitlerDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsService {
 
/*
  getAllProducts() {
    return this.products;
  }

  getProductById(id: string){
    const found = this.products.find(product=>product.id ===id);
    if(!found){
      throw new NotFoundException(`Product with ID "${id}" not found`);
     }
     return found;
  }

  getProductsWithFilter(filterDto: GetProductsFitlerDto): Product[]{
    const {color, search} = filterDto;
    let products = this.getAllProducts();
    if(color){
      products = products.filter(product =>product.color ===color);
    }
    if(search){
      products = products.filter(product =>
        product.title.includes(search)|| product.description.includes(search));
    }
    return products;
  }

  createProduct(createProductDto: CreateProductDto): Product {
    const { title, description } = createProductDto; // destruction
    const product: Product = {
      id: uuid(),
      title, // is hetzelfde als title = title
      description,
      color: ProductColor.PINK,
    };
    this.products.push(product);
    return product;
  }

  updateProduct(id: string, color: ProductColor): Product {
    let  product: Product= this.getProductById(id);
    product.color = color;
    return product;


  }
  deleteProduct(id: string): void{
    const found = this.getProductById(id);
    this.products = this.products.filter(product => product.id !== found.id);
  }*/
}
