import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  // FIXME: find all user
  findAll(role: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role)
      return this.databaseService.user.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.user.findMany();
  }

  // TODO: find specific user
  findOne(id?: number) {
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
  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  // // TODO:
  delete(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
