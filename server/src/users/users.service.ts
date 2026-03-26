import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  // FIXME: find all user
  findAll() {
    return this.databaseService.user.findMany();
  }

  // TODO: find specific user
  findOne(id?: string) {
    if (id)
      return this.databaseService.user.findUnique({
        where: {
          id,
        },
      });
  }

  // create todo
  create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  // FIXME: update user
  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  // // TODO:
  delete(id: string) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
