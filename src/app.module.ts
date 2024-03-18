import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobOffersController } from './job-offers/job-offers.controller';
import { JobOffersModule } from './job-offers/job-offers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/database-config';

@Module({
  imports: [
    JobOffersModule,
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
  ],
  controllers: [AppController, JobOffersController],
  providers: [AppService],
})
export class AppModule {}
