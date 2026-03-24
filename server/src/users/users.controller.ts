import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get()
  findByRole(@Query('role') role?: 'Admin' | 'Engineer' | 'Boss') {
    if (role) {
      return [{ role }];
    }
    return [{ id: 1, name: 'Siddique' }];
  }

  @Get() // GET /users
  findAll() {
    return [{ id: 1, name: 'Abdur Rahim' }];
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
    return { id, name: `siddique ${id}` };
  }
}
