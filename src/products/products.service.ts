import { Injectable } from '@nestjs/common';
import { Product, ProductColor } from './product.model';
import * as uuid from 'uuid/v1';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = []; // als niet private dan kan elke andere component buiten de module dat injects the service, de array veranderen. maar dat wil je niet, enkel de service mag bwijziginen aan brengen

  getAllProducts() {
    return this.products;
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
}
