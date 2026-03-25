import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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

  @Post() // POST /users
  create(@Body() user: { name: string; email: string; role: string }) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /user/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: { name?: string; email?: string; role?: string },
  ) {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id') // FIXME: DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
}
