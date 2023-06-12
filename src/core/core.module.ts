import { Module } from '@nestjs/common';
import IngredientsService from './services/ingredients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Ingredients from './models/Ingredient.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Ingredients
    ])],
    controllers: [],
    exports: [IngredientsService],
    providers: [IngredientsService]
})
export class CoreModule {}
