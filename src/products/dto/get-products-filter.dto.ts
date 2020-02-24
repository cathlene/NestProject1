import { IsOptional, IsIn, IsNotEmpty } from "class-validator";
import { ProductColor } from "../product-color.enum";

export class GetProductsFitlerDto{
    @IsOptional()
    @IsIn([ProductColor.BLACK,ProductColor.PINK])
    color: ProductColor;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}