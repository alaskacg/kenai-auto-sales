import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Kenai Auto Sales',
  title: 'Kenai Auto Sales - Vehicles for Alaska Living',
  description: 'Quality vehicles built for Alaska. Cars, trucks, RVs, boats, and more on the Kenai Peninsula',
  url: 'https://kenaiautosales.com',
  ogImage: '/og-image.jpg',
  phone: '(907) 555-0106',
  email: 'sales@kenaiautosales.com',
  address: 'Kenai Peninsula, Alaska',
  businessType: 'AutoDealer',
  primaryColor: '#003f87',
  relatedSites: [
    { name: 'Kenai Borough', url: 'https://kenaiborough.com', description: 'Official Kenai Peninsula Borough portal' },
    { name: 'Kenai Borough Realty', url: 'https://kenaiboroughrealty.com', description: 'Full-service real estate for homes, land, and commercial properties' },
    { name: 'Kenai Peninsula Rentals', url: 'https://kenaipeninsularentals.com', description: 'Long-term and short-term rental listings' },
    { name: 'Kenai Land Sales', url: 'https://kenailandsales.com', description: 'Acreage, lots, and development opportunities' },
    { name: 'Kenai Home Sales', url: 'https://kenaihomesales.com', description: 'Residential home sales experts' }
  ],
  listingTypes: ['vehicle']
};
