import { Controller, Get } from '@nestjs/common';

@Controller('drinking-buddies')
export class DrinkingBuddiesController {
  @Get()
  findAll() {
    return [];
  }
}
