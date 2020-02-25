import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductColor } from './product-color.enum';
import { GetProductsFitlerDto } from './dto/get-products-filter.dto';

@EntityRepository(Product) // repository is a persistence layer so in the service you dont have to write a lot of logic in order to save a task bijvoorbeeld je kan gwn een functie gebruiken
// die bestaat in de repository
export class ProductRepository extends Repository<Product> {
  async getProducts(filterDto: GetProductsFitlerDto): Promise<Product[]> {
    const { color, search } = filterDto;
    // querybuilder, je maakt query en kan er conditions inzetten om te sturen naar db
    const query = this.createQueryBuilder('product'); // refereert naade de product entity

    if (color) {
      query.andWhere('product.color = :color', { color }); // als je gewoon where gebruikt override je eender welke andere where
    }

    if (search) {
      query.andWhere(
        'product.title LIKE :search OR product.description LIKE :search ',
        { search: `%${search}%` }, // op deze manier kan je voor een partieel stuk van search zoeken
      );
    }

    const products = await query.getMany();
    return products;
  }

  async createProduct(CreateProductDto: CreateProductDto): Promise<Product> {
    const product: Product = new Product();
    const { title, description } = CreateProductDto; // destruction
    product.title = title;
    product.description = description;
    product.color = ProductColor.PINK;
    await product.save(); // ook ingebouwd orm en is async
    return product;
  }
}
