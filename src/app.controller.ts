import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) { }

  @MessagePattern({ ACTION_TYPE: 'GET' })
  async get(user: any): Promise<any> {
    console.log('GET')
    return this.appService.findOne(user.username);
  }

  @MessagePattern({ ACTION_TYPE: 'UPDATE' })
  async update(user: any): Promise<any> {
    console.log('UPDATE')
    return {}//this.appService.update(user.userid);
  }
}
