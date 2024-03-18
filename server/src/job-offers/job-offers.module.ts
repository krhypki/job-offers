import { Module } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffer } from 'src/entities/job-offer.entity';

@Module({
  providers: [JobOffersService],
  exports: [JobOffersService],
  imports: [TypeOrmModule.forFeature([JobOffer])],
})
export class JobOffersModule {}
