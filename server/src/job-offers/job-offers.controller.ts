import { Controller, Get, Param, Query } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';

@Controller('job-offers')
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get()
  getJobOffers(@Query('query') query: string) {
    if (query) {
      return this.jobOffersService.findByQuery(query);
    }
    return this.jobOffersService.findAll();
  }

  @Get('/:id')
  getJobOfferById(@Param('id') id: string) {
    return this.jobOffersService.findById(+id);
  }
}
