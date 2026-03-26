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
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // TODO: GET /users
  findAll(@Query('role') role: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    return this.usersService.findAll(role);
  }

  @Post() // TODO: POST /users
  create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // FIXME: PATCH /user/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // FIXME: DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Get(':id') //TODO: GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
}
