import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {ConfigModule} from '@nestjs/config'
import { CoreModule } from './core/core.module'
import { IngredientsModule } from './modules/ingredients/ingredients.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT ?? '5432'),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities: true
    }),
    CoreModule,
    IngredientsModule
  ]
})
export class AppModule {}
