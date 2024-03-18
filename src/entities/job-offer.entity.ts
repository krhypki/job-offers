import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  company: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  sallary: number;

  @Column()
  companyBadge: string;

  @Column()
  daysAgo: number;

  @Column()
  duration: 'Full-Time' | 'Part-Time';

  @Column('simple-array', { array: true })
  qualifications: string[];

  @Column('simple-array', { array: true })
  reviews: string[];
}
