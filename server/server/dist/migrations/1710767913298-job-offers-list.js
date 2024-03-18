"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobOffersList1710767913298 = void 0;
const job_offers_1 = require("../data/job-offers");
const job_offer_entity_1 = require("../entities/job-offer.entity");
class JobOffersList1710767913298 {
    constructor() {
        this.name = 'JobOffersList1710767913298';
    }
    async up(queryRunner) {
        await Promise.all(job_offers_1.jobOffers.map(async (jobOffer) => {
            const jobOfferInstance = queryRunner.manager.create(job_offer_entity_1.JobOffer, {
                ...jobOffer,
                description: `${jobOffer.description} 'You will join a highly functioning team comprised of a combination of full time and part-time professionals across the globe.`,
                reviews: [
                    'Great company to work for',
                    'Good benefits',
                    'Great team',
                    'Good work-life balance',
                ],
            });
            await queryRunner.manager.save(jobOfferInstance);
        }));
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE * FROM job-offer`);
    }
}
exports.JobOffersList1710767913298 = JobOffersList1710767913298;
//# sourceMappingURL=1710767913298-job-offers-list.js.map