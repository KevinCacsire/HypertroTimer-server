import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'),
    }),
  ],
})
export class ConfigModule {}
