import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './api/book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
