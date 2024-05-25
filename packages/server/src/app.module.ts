import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [UserModule, UploadModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
