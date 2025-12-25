export type SponsorTier = "Title" | "Platinum" | "Gold" | "Silver" | "Bronze" | "Associate";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo?: string;
  description: string;
  website?: string;
  industry: string;
}

export const sponsorTiers: { tier: SponsorTier; color: string; description: string }[] = [
  { tier: "Title", color: "from-gray-900 to-gray-700", description: "Primary Event Partner" },
  { tier: "Platinum", color: "from-gray-400 to-gray-500", description: "Premium Partners" },
  { tier: "Gold", color: "from-amber-400 to-amber-500", description: "Gold Partners" },
  { tier: "Silver", color: "from-gray-300 to-gray-400", description: "Silver Partners" },
  { tier: "Bronze", color: "from-orange-300 to-orange-400", description: "Bronze Partners" },
  { tier: "Associate", color: "from-blue-300 to-blue-400", description: "Associate Partners" },
];

export const sponsors: Sponsor[] = [
  // Title Sponsor
  {
    id: "1",
    name: "Tech Innovations Inc.",
    tier: "Title",
    description: "Leading technology solutions provider",
    industry: "Technology",
    website: "https://example.com"
  },
  
  // Platinum Sponsors
  {
    id: "2",
    name: "Global Sports Ltd.",
    tier: "Platinum",
    description: "International sports equipment manufacturer",
    industry: "Sports & Fitness"
  },
  {
    id: "3",
    name: "Energy Drinks Co.",
    tier: "Platinum",
    description: "Premium energy and sports nutrition brand",
    industry: "Food & Beverage"
  },
  
  // Gold Sponsors
  {
    id: "4",
    name: "Digital Media Group",
    tier: "Gold",
    description: "Digital marketing and media solutions",
    industry: "Media"
  },
  {
    id: "5",
    name: "Apparel Brands",
    tier: "Gold",
    description: "Sports and casual wear manufacturer",
    industry: "Fashion"
  },
  {
    id: "6",
    name: "Financial Services Corp",
    tier: "Gold",
    description: "Banking and financial solutions",
    industry: "Finance"
  },
  
  // Silver Sponsors
  {
    id: "7",
    name: "Local Restaurant Chain",
    tier: "Silver",
    description: "Food and catering services",
    industry: "Hospitality"
  },
  {
    id: "8",
    name: "Transportation Services",
    tier: "Silver",
    description: "Logistics and transportation solutions",
    industry: "Transport"
  },
  {
    id: "9",
    name: "Event Management Co.",
    tier: "Silver",
    description: "Professional event planning services",
    industry: "Events"
  },
  {
    id: "10",
    name: "Health & Wellness",
    tier: "Silver",
    description: "Healthcare and wellness products",
    industry: "Healthcare"
  },
  
  // Bronze Sponsors
  {
    id: "11",
    name: "Print Media House",
    tier: "Bronze",
    description: "Print and publishing services",
    industry: "Media"
  },
  {
    id: "12",
    name: "Campus Bookstore",
    tier: "Bronze",
    description: "Educational materials and supplies",
    industry: "Education"
  },
  {
    id: "13",
    name: "Coffee Corner",
    tier: "Bronze",
    description: "Premium coffee and refreshments",
    industry: "Food & Beverage"
  },
  
  // Associate Partners
  {
    id: "14",
    name: "Photography Studio",
    tier: "Associate",
    description: "Professional event photography",
    industry: "Media"
  },
  {
    id: "15",
    name: "Sound & Lights Pro",
    tier: "Associate",
    description: "Audio-visual equipment rental",
    industry: "Technology"
  },
];
