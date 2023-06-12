import { IsString, IsInt, IsNumber } from "class-validator";


export class AddIngredientDto{

    @IsString()
    label: string

    @IsInt()
    calories: number

    @IsNumber()
    protein: number

    @IsString()
    imageUrl: string
}