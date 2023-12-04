import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo, soy gamlerd13!';
  }
  getUser(): string[] {
    return ['eder', 'carlos', 'sergio'];
  }
}
