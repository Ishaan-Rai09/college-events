import { Event, Club, Category } from '@/types/events';

export const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Hackathon 2024',
    description: 'Join us for a 48-hour coding marathon where innovation meets competition. Build amazing projects and win exciting prizes!',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    date: '2024-02-15',
    time: '09:00 AM',
    location: 'Computer Science Lab',
    registrationUrl: 'https://forms.google.com/hackathon2024',
    tags: ['Coding', 'Competition', 'Innovation'],
    isHot: true,
    isNew: true,
    clubId: 'tech-club'
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React, Next.js, and Tailwind CSS. Perfect for beginners and intermediate developers.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    date: '2024-02-20',
    time: '02:00 PM',
    location: 'Tech Lab 101',
    registrationUrl: 'https://forms.google.com/webdev-workshop',
    tags: ['Workshop', 'Web Development', 'Learning'],
    isNew: true,
    clubId: 'tech-club'
  },
  {
    id: '3',
    title: 'Cultural Fest 2024',
    description: 'Celebrate diversity and showcase your talents in our annual cultural festival. Dance, music, drama, and more!',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    date: '2024-03-01',
    time: '06:00 PM',
    location: 'Main Auditorium',
    registrationUrl: 'https://forms.google.com/cultural-fest',
    tags: ['Cultural', 'Performance', 'Festival'],
    isHot: true,
    clubId: 'cultural-club'
  },
  {
    id: '4',
    title: 'Basketball Tournament',
    description: 'Inter-college basketball championship. Form your teams and compete for the ultimate trophy!',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
    date: '2024-02-25',
    time: '10:00 AM',
    location: 'Sports Complex',
    registrationUrl: 'https://forms.google.com/basketball-tournament',
    tags: ['Sports', 'Basketball', 'Tournament'],
    registrationClosingSoon: true,
    clubId: 'sports-club'
  },
  {
    id: '5',
    title: 'AI/ML Conference',
    description: 'Explore the latest trends in Artificial Intelligence and Machine Learning with industry experts.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    date: '2024-03-10',
    time: '11:00 AM',
    location: 'Conference Hall',
    registrationUrl: 'https://forms.google.com/ai-ml-conference',
    tags: ['AI', 'ML', 'Conference', 'Technology'],
    isNew: true,
    clubId: 'tech-club'
  },
  {
    id: '6',
    title: 'Art Exhibition',
    description: 'Showcase your artistic talents in our annual art exhibition. Paintings, sculptures, digital art welcome!',
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800',
    date: '2024-03-05',
    time: '03:00 PM',
    location: 'Art Gallery',
    registrationUrl: 'https://forms.google.com/art-exhibition',
    tags: ['Art', 'Exhibition', 'Creative'],
    clubId: 'cultural-club'
  }
];

export const clubs: Club[] = [
  {
    id: 'tech-club',
    name: 'Tech Innovation Club',
    description: 'Fostering innovation and technical excellence through workshops, hackathons, and tech talks.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
    category: 'technical',
    events: sampleEvents.filter(event => event.clubId === 'tech-club')
  },
  {
    id: 'ai-club',
    name: 'AI & Data Science Society',
    description: 'Exploring the frontiers of artificial intelligence and data science through hands-on projects.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400',
    category: 'technical',
    events: []
  },
  {
    id: 'robotics-club',
    name: 'Robotics Club',
    description: 'Building the future with cutting-edge robotics and automation projects.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    category: 'technical',
    events: []
  },
  {
    id: 'cultural-club',
    name: 'Cultural Society',
    description: 'Celebrating arts, culture, and creativity through various cultural events and performances.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    category: 'non-technical',
    events: sampleEvents.filter(event => event.clubId === 'cultural-club')
  },
  {
    id: 'drama-club',
    name: 'Drama Club',
    description: 'Bringing stories to life through theatrical performances and creative expression.',
    image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400',
    category: 'non-technical',
    events: []
  },
  {
    id: 'music-club',
    name: 'Music Society',
    description: 'Harmonizing talents and creating beautiful music together.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    category: 'non-technical',
    events: []
  },
  {
    id: 'sports-club',
    name: 'Sports Club',
    description: 'Promoting fitness, teamwork, and competitive spirit through various sports activities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    category: 'sports',
    events: sampleEvents.filter(event => event.clubId === 'sports-club')
  },
  {
    id: 'fitness-club',
    name: 'Fitness & Wellness Club',
    description: 'Promoting health and wellness through fitness activities and wellness programs.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    category: 'sports',
    events: []
  },
  {
    id: 'esports-club',
    name: 'E-Sports Club',
    description: 'Competitive gaming and e-sports tournaments for digital athletes.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
    category: 'sports',
    events: []
  }
];

export const categories: Category[] = [
  {
    id: 'technical',
    name: 'Technical',
    description: 'Technology, programming, and innovation focused events',
    icon: 'Code',
    clubs: clubs.filter(club => club.category === 'technical')
  },
  {
    id: 'non-technical',
    name: 'Non-Technical',
    description: 'Cultural, artistic, and creative events',
    icon: 'Palette',
    clubs: clubs.filter(club => club.category === 'non-technical')
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Sports, fitness, and competitive events',
    icon: 'Trophy',
    clubs: clubs.filter(club => club.category === 'sports')
  }
];
