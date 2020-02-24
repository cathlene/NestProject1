import { Entity, BaseEntity,PrimaryGeneratedColumn, Column} from 'typeorm';
import { ProductColor } from './product-color.enum';


@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    color:ProductColor;
  
}