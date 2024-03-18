export declare class JobOffer {
    id?: number;
    name: string;
    company: string;
    description: string;
    location: string;
    sallary: number;
    companyBadge: string;
    daysAgo: number;
    duration: 'Full-Time' | 'Part-Time';
    qualifications: string[];
    reviews: string[];
}
