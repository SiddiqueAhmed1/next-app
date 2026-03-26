import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // TODO: GET /users
  findAll() {
    return this.usersService.findAll();
  }

  @Post() // TODO: POST /users
  create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // FIXME: PATCH /user/:id
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // FIXME: DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Get(':id') //TODO: GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
