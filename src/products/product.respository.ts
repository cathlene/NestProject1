import { EntityRepository, Repository } from "typeorm";
import { Product } from "./product.entity";



    @EntityRepository(Product) // repository is a persistence layer so in the service you dont have to write a lot of logic in order to save a task bijvoorbeeld je kan gwn een functie gebruiken
    // die bestaat in de repository
    export class ProductRepository extends Repository<Product>{

}