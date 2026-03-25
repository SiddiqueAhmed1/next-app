import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Abdur Rahim', role: 'Admin', email: 'rahim@gmail.com' },
    { id: 2, name: 'Ahmed', role: 'Engineer', email: 'Ahmed@gmail.com' },
    { id: 3, name: 'Karim Hossain', role: 'HR', email: 'karim@gmail.com' },
    { id: 4, name: 'Jamal Uddin', role: 'Engineer', email: 'jamal@gmail.com' },
    { id: 5, name: 'Faruk Islam', role: 'Admin', email: 'faruk@gmail.com' },
  ];

  // FIXME:
  findAll(role?: 'Admin' | 'Engineer' | 'Intern') {
    if (role) {
      return this.users.filter(
        (user) => user.role.toLowerCase() === role.toLowerCase(),
      );
    }
    return this.users;
  }

  // TODO: find specific user
  findOne(id?: number) {
    if (id) {
      const user = this.users.find((user) => user.id === id);
      return user;
    }
  }

  // FIXME: create user method
  create(user: { name: string; email: string; role: string }) {
    const usersByHighestid = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestid[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  // FIXME: update user
  update(
    id: number,
    updateUser: { name?: string; email?: string; role?: string },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  // TODO:
  delete(id: number) {
    const deletedUser = this.findOne(id);
    this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
