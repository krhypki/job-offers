import { MigrationInterface, QueryRunner } from 'typeorm';
import { jobOffers } from 'src/data/job-offers';
import { JobOffer } from 'src/entities/job-offer.entity';

export class JobOffersList1710767913298 implements MigrationInterface {
  name = 'JobOffersList1710767913298';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      jobOffers.map(async (jobOffer) => {
        const jobOfferInstance = queryRunner.manager.create(JobOffer, {
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM job-offer`);
  }
}
