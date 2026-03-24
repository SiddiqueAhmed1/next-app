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

  findAll(role?: 'Admin' | 'Engineer' | 'Intern') {
    if (role) {
      return this.users.filter(
        (user) => user.role.toLowerCase() === role.toLowerCase(),
      );
    }
    return this.users;
  }

  findOne(id?: number) {
    if (id) {
      const user = this.users.find((user) => user.id === id);
      return user;
    }
  }
}
