import {Injectable, NotFoundException} from '@nestjs/common'
import axios from 'axios'
import { IngredientType } from '../types/ingredient.type'
import { InjectRepository } from '@nestjs/typeorm'
import Ingredients from '../models/Ingredient.entity'
import { Repository } from 'typeorm'

@Injectable()
export default class IngredientsService{

    constructor(
        @InjectRepository(Ingredients) private ingredientsRepo: Repository<Ingredients>
    ){}

    async findOne(ingredient: string){

        const res = await axios.get(process.env.APP_URL + 'parser', {
            params: {
                app_id: process.env.APP_ID,
                app_key: process.env.APP_KEY,
                ingr: ingredient
            }
        })

        if(res.data.parsed.length === 0){
            throw new NotFoundException()
        }

        const food = res.data.parsed[0].food

        const ingr: IngredientType = {
            label: food.label,    
            calories: food.nutrients.ENERC_KCAL,
            protein: food.nutrients.PROCNT,            
            imageUrl: food.image
        } 

        return ingr
    }

    async findByLabel(label: string){
        return this.ingredientsRepo.findOneBy({label: label})
    }

    async addOne(ingredient: IngredientType){

        const newIngr = await this.ingredientsRepo.create(ingredient)

        return this.ingredientsRepo.save(newIngr)

    }
}