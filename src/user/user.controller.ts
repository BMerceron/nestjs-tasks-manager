import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Logger } from '@nestjs/common';

@UseGuards(AuthGuard())
@Controller('user')
export class UserController {
  private logger = new Logger('UsersController');
  constructor(private userService: UserService) {}

  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
