import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'OK',
      status: 200
    };
  }

  createHello(data: object) {
    return data;
  }
}
