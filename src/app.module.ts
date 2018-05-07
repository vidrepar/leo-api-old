import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinkingBuddiesController } from './drinking-buddies/drinking-buddies.controller';

@Module({
  imports: [],
  controllers: [AppController, DrinkingBuddiesController],
  providers: [ AppService ]
})
export class AppModule {}
