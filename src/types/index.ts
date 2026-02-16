export interface User {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  created_at: string;
}

export interface VehicleListing {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  
  year: number;
  make: string;
  model: string;
  vin?: string;
  mileage: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  body_type: string;
  exterior_color: string;
  interior_color?: string;
  transmission: 'automatic' | 'manual';
  fuel_type: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  drivetrain: '2wd' | '4wd' | 'awd';
  title_status: 'clean' | 'salvage' | 'rebuilt' | 'lien';
  
  winter_tires_included: boolean;
  engine_block_heater: boolean;
  
  location: string;
  
  images: string[];
  video_url?: string;
  
  status: 'pending' | 'active' | 'sold' | 'expired';
  payment_status: 'unpaid' | 'paid';
  featured: boolean;
  featured_until?: string;
  
  views: number;
  created_at: string;
  updated_at: string;
  expires_at: string;
  
  user?: User;
}

export interface PaymentIntent {
  id: string;
  user_id: string;
  listing_id?: string;
  amount: number;
  type: 'listing' | 'featured';
  stripe_payment_id?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Message {
  id: string;
  listing_id: string;
  from_user_id: string;
  to_user_id: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  maxMileage?: number;
  make?: string;
  bodyType?: string;
  transmission?: string;
  fuelType?: string;
  drivetrain?: string;
  condition?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'mileage_asc' | 'mileage_desc' | 'year_desc' | 'newest';
}
