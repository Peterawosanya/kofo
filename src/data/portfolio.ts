export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: PortfolioCategory;
  /** aspect ratio hint for the grid: 'tall' | 'wide' | 'square' */
  aspect: 'tall' | 'wide' | 'square';
  caption?: string;
}

export type PortfolioCategory = 'Fashion' | 'Editorial' | 'Beauty' | 'Commercial';

export interface FeaturedProject {
  id: string;
  project: string;
  brand: string;
  year: string;
  category: string;
  image: string;
}

export interface ModelStats {
  height: string;
  bust: string;
  waist: string;
  hips: string;
  shoes: string;
  hair: string;
  eyes: string;
  location: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  instagramUrl: string;
}

export const model = {
  name: 'Kọ́fọ́wọ́rọ́lá Mutiat',
  shortName: 'Kọ́fọ́wọ́rọ́lá',
  title: 'Model',
  tagline: 'Fashion & editorial model — Lagos, Nigeria',
  location: 'Lagos, Nigeria',
};

export const bio = [
  'Kọ́fọ́wọ́rọ́lá Mutiat is a Nigerian fashion model discovered in Lagos at the age of seventeen. Since then, she has built a growing portfolio across Nigeria’s fashion scene, bringing a quiet intensity and sculptural poise to every frame she occupies.',
  'Her work spans runway shows, editorial stories, beauty campaigns, and commercial collaborations with Nigerian brands and creatives. She is known for her expressive gaze and the ability to move between editorial edge and commercial elegance.',
  'Beyond the lens, Kọ́fọ́wọ́rọ́lá is passionate about greater representation of African models in the fashion industry and hopes to take her career beyond Nigeria in the coming years.',
];

export const stats: ModelStats = {
  height: "5'11\" / 180 cm",
  bust: '32" / 81 cm',
  waist: '24" / 61 cm',
  hips: '36" / 91 cm',
  shoes: 'EU 39',
  hair: 'Black',
  eyes: 'Dark Brown',
  location: 'Lagos, Nigeria',
};

export const contact: ContactInfo = {
  email: 'bookings@kofoworola-mutiat.com',
  phone: '+234 903 526 9575',
  whatsapp: '+234 903 526 9575',
  instagram: '@miah_k1',
  instagramUrl: 'https://www.instagram.com/miah_k1?cplk=dWxoMHY5NzBlbTFs',
};

// Local images supplied for the current portfolio.
export const heroImage = '/images/profile/mutait_11.jpg';
export const heroImagePortrait = '/images/profile/mutait_11.jpg';
export const aboutImage = '/images/profile/8f5a7ad7-d270-43dd-9ba0-ae45fef7e548.png';

export const portfolioImages: PortfolioImage[] = [
  {
    id: 'p1',
    src: '/images/profile/mutait_11.jpg',
    alt: 'Kọ́fọ́wọ́rọ́lá Mutiat in a red polka-dot dress',
    category: 'Commercial',
    aspect: 'tall',
    caption: 'Portrait — Lagos',
  },
  {
    id: 'p2',
    src: '/images/profile/8f5a7ad7-d270-43dd-9ba0-ae45fef7e548.png',
    alt: 'Kọ́fọ́wọ́rọ́lá Mutiat in a sculptural headwrap and jewelry',
    category: 'Editorial',
    aspect: 'tall',
    caption: 'Editorial Portrait — Lagos',
  },
  {
    id: 'p3',
    src: '/images/profile/a0dbb643-7127-4004-ab76-867779bdfb58.png',
    alt: 'Kọ́fọ́wọ́rọ́lá Mutiat in a studio beauty look',
    category: 'Beauty',
    aspect: 'tall',
    caption: 'Beauty Story — Studio',
  },
  {
    id: 'p4',
    src: '/images/profile/b81165e9-e609-4e5a-bac1-bdc6fa90dd49.png',
    alt: 'Kọ́fọ́wọ́rọ́lá Mutiat with natural textured hair in studio',
    category: 'Beauty',
    aspect: 'tall',
    caption: 'Beauty Portrait — Studio',
  },
  {
    id: 'p5',
    src: '/images/profile/mutait_7.jpg',
    alt: 'Kọ́fọ́wọ́rọ́lá Mutiat in a close-up beauty portrait',
    category: 'Fashion',
    aspect: 'tall',
    caption: 'Fashion Portrait — Lagos',
  },
];

export const featuredWork: FeaturedProject[] = [
  {
    id: 'w1',
    project: 'The Portrait Series',
    brand: 'Editorial Story',
    year: '2025',
    category: 'Editorial',
    image: '/images/profile/8f5a7ad7-d270-43dd-9ba0-ae45fef7e548.png',
  },
  {
    id: 'w2',
    project: 'Red Polka',
    brand: 'Portrait Study',
    year: '2025',
    category: 'Commercial',
    image: '/images/profile/mutait_11.jpg',
  },
  {
    id: 'w3',
    project: 'Studio Beauty',
    brand: 'Beauty Story',
    year: '2025',
    category: 'Beauty',
    image: '/images/profile/a0dbb643-7127-4004-ab76-867779bdfb58.png',
  },
  {
    id: 'w4',
    project: 'Natural Form',
    brand: 'Beauty Portrait',
    year: '2025',
    category: 'Beauty',
    image: '/images/profile/b81165e9-e609-4e5a-bac1-bdc6fa90dd49.png',
  },
  {
    id: 'w5',
    project: 'Close Study',
    brand: 'Fashion Portrait',
    year: '2025',
    category: 'Fashion',
    image: '/images/profile/mutait_7.jpg',
  },
];

export const categories: PortfolioCategory[] = ['Fashion', 'Editorial', 'Beauty', 'Commercial'];
