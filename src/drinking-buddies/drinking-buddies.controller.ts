import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDrinkingBuddyDto } from './create-drinking-buddy.dto';

@Controller('drinking-buddies')
export class DrinkingBuddiesController {
  @Post()
  create(@Body() createDrinkingBuddyDto: CreateDrinkingBuddyDto) {
    console.log(createDrinkingBuddyDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  async findOne(@Param() params): Promise<any> {
    console.log(params.id);
    return {};
  }
}
