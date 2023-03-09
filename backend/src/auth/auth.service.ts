import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async validateUser(userDetails: UserDetails) {
    const user = await this.userModel.findOne({ email: userDetails.email });
    if (user) return user;

    const newUser = new this.userModel(userDetails);
    await newUser.save();
  }
}
