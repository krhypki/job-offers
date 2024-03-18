import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOffer } from 'src/entities/job-offer.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class JobOffersService {
  constructor(@InjectRepository(JobOffer) private repo: Repository<JobOffer>) {}

  async findAll() {
    const jobOffers = await this.repo.find();
    return jobOffers;
  }

  async findById(id: number) {
    const jobOffer = await this.repo.findOne({ where: { id } });
    return jobOffer;
  }

  async findByQuery(query: string) {
    const jobOffers = await this.repo.find({
      where: [
        { name: Like(`%${query}%`) },
        { qualifications: Like(`%${query}%`) },
      ],
    });

    return jobOffers;
  }
}
