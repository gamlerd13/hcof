import { Module } from '@nestjs/common';
import { VsController } from './vs.controller';
import { VsService } from './vs.service';

@Module({
  controllers: [VsController],
  providers: [VsService]
})
export class VsModule {}
