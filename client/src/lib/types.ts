export type SortBy = 'recent' | 'salary';

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
  salary: number;
  qualifications: string[];
  reviews: string[];
};
