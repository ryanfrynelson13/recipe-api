import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import IngredientsController from './controllers/ingredients.controller';

@Module({
    imports: [CoreModule],
    controllers: [IngredientsController]
})
export class IngredientsModule {}