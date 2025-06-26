export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  registrationUrl: string;
  tags: string[];
  isHot?: boolean;
  isNew?: boolean;
  registrationClosingSoon?: boolean;
  clubId: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'technical' | 'non-technical' | 'sports';
  events: Event[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  clubs: Club[];
}

export type EventCategory = 'technical' | 'non-technical' | 'sports';
