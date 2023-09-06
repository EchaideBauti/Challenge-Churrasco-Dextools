import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ status: number; user: User }> {
    try {
      const { username, email, password } = createUserDto;
      const existUser = await this.userModel.findOne({
        $or: [{ username: username }, { email: email }],
      });
      console.log(existUser);
      if (existUser?.username === username || existUser?.email === email) {
        throw new BadRequestException({
          status: HttpStatus.BAD_REQUEST,
          message:
            existUser.username === username
              ? 'There is already a user with that username'
              : 'There is already a user with that email',
        });
      }

      createUserDto.lastLogin = new Date();
      createUserDto.password = await this.createhash(password);

      const userCreated = await this.userModel.create(createUserDto);

      return { status: HttpStatus.OK, user: userCreated };
    } catch (e) {
      throw e;
    }
  }

  async createhash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
