import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(createAuthDto: CreateAuthDto) {
    createAuthDto.birthday = new Date(createAuthDto.birthday);
    await this.userModel.create(createAuthDto);
    return { status: HttpStatus.OK, dataUser: createAuthDto };
  }

  login(userObjetLogin: CreateAuthDto) {
    // const { email } = createAuthDto;
    // const existUser = await this.userModel.findOne({ email });
    // console.log(existUser);
    return `This action returns all auth`;
  }
}
