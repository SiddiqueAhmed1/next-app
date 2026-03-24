import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users
  findAll(@Query('role') role?: 'Admin' | 'Engineer' | 'Intern') {
    return this.usersService.findAll(role);
  }

  @Get('engineers') // GET /users/engineers
  findAllEngineers() {
    return [{ role: 'Engineer' }];
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
}
