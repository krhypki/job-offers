import { Controller, Get, Param } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';

@Controller('job-offers')
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get()
  getJobOffers() {
    return this.jobOffersService.findAll();
  }

  @Get('/:id')
  getJobOffer(@Param('id') id: string) {
    return this.jobOffersService.findById(+id);
  }
}
