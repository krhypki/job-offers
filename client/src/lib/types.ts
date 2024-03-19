export type SortBy = 'recent' | 'sallary';

export type PaginationDirection = 'next' | 'prev';

export type Offer = {
  company: string;
  companyBadge: string;
  daysAgo: number;
  description: string;
  duration: string;
  id: number;
  location: string;
  name: string;
  sallary: number;
  qualifications: string[];
  reviews: string[];
};
