import { PipeTransform, BadRequestException } from "@nestjs/common";
import { ProductColor } from "../product-color.enum";

export class ProductColorValidationPipe implements PipeTransform{
    readonly allowedColor =[ProductColor.BLACK,ProductColor.PINK];

    transform(value: any){
        value = value.toUpperCase();
        if(!this.isColorValid(value)){
            throw new BadRequestException(`"${value}" is an invalid color` );
        }
        return value;
    }

    private isColorValid(color: any){
       
        const idx =this.allowedColor.indexOf(color)
        return idx !== -1;
    }
}