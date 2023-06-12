import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AddIngredientDto } from "src/core/dtos/ingredients/add-ingredient.dto";
import IngredientsService from "src/core/services/ingredients.service";


@Controller('ingredients')
export default class IngredientsController{

    constructor(
        private readonly ingredientsService: IngredientsService 
    ){}

    @Get()
    getIngredient(
        @Query('q') q: string
    ){
        return this.ingredientsService.findOne(q)
    }

    @Post()
    addIngredient(
        @Body() body: AddIngredientDto
    ){
        return this.ingredientsService.addOne(body)
    }
}