import { JobOffersService } from './job-offers.service';
export declare class JobOffersController {
    private jobOffersService;
    constructor(jobOffersService: JobOffersService);
    getJobOffers(query: string): Promise<import("src/entities/job-offer.entity").JobOffer[]>;
    getJobOfferById(id: string): Promise<import("src/entities/job-offer.entity").JobOffer>;
}
