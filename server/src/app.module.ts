import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { VsModule } from './vs/vs.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestjs'), UsersModule, VsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
