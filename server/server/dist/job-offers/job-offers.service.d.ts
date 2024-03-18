import { JobOffer } from 'src/entities/job-offer.entity';
import { Repository } from 'typeorm';
export declare class JobOffersService {
    private repo;
    constructor(repo: Repository<JobOffer>);
    findAll(): Promise<JobOffer[]>;
    findById(id: number): Promise<JobOffer>;
    findByQuery(query: string): Promise<JobOffer[]>;
}
