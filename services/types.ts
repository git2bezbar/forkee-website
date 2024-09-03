export type PageType = 'home' | 'about' | 'menu' | 'contact' | 'legal';

export interface WebsiteMenuItem {
  type: PageType;
  order: number;
  isActive: boolean;
}

export type WebsiteMenu = WebsiteMenuItem[];

export interface TimeSlot {
  dayOfWeek: string;
  slotNumber: 1 | 2 ;
  openingTime: string;
  closingTime: string;
  isActive: boolean;
}

export interface GeneralSettings {
  websiteTitle: string;
  websiteHeadline: string;
  street: string;
  postCode: string;
  city: string;
  timeSlots: TimeSlot[];
}

export type SocialMedia = "facebook" | "twitter" | "instagram" | "thefork" | "tripadvisor";

export interface SocialLink {
  platform: SocialMedia;
  url: string,
  is_active: boolean
}

export interface ContactSettings {
  email: string;
  phoneNumber: string;
  socialLinks: SocialLink[];
}

export interface Widget {
  name: string;
  order: number;
  content: {
    title: string;
    subtitle: string;
    hasButton: boolean;
    buttonLink: PageType;
    buttonContent: string;
  };
}

export interface Page {
  type: PageType;
  isActive: boolean;
  description: string;
  widgets: Widget[];
}

export interface Category {
  id: number;
  name: string;
}

export type Categories = Category[];

export interface ProductContent {
  price: number;
  title: string;
  category_id: number;
  description: string;
}

export interface Product {
  [key: string]: ProductContent;
}

export type Products = Record<string, ProductContent>;

export type Typography = "dm-sans" | "raleway" | "poppins";

export interface CustomizationSettings {
  primaryColor: string;
  secondaryColor: string;
  textFont: Typography;
}