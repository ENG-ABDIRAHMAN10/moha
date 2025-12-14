import { SocialLink } from './types';

export const USER_NAME = "Mohamed Osmaan"; // Your Name Here
export const USER_TITLE = "Content Creator & Developer";
export const USER_BIO = "Kusoo dhawaada boggeyga rasmiga ah. Halkan waxaad ka heli kartaa macluumaad igu saabsan, xirfadayda, iyo siyaabaha aad igula soo xiriiri karto.";

// Requested Profile Picture Size: 1000x1056
export const PROFILE_IMAGE_URL = "moha.jpg"; 

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', url: 'https://www.facebook.com/share/181YqDJzgr/?mibextid=qi2Omg', username: 'Facebook' },
  { platform: 'Instagram', url: 'https://www.instagram.com/moha_osman_hassan?igsh=MzNlNGNkZWQ4Mg==', username: 'Instagram' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@Mohamed.O.H', username: 'YouTube' },
  { platform: 'Snapchat', url: 'https://www.snapchat.com/add/mohaosman2015?share_id=AunYxGymJWw&locale=en-US', username: 'Snapchat' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@moha__1212?_r=1&_t=ZM-92C2OulJwmi', username: 'TikTok' },
  { platform: 'X', url: '#', username: 'https://x.com/I_mohamedamiin?t=1jrGpY8qfnS8V0Q4MsmUIA&s=09' },
];

export const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant representing ${USER_NAME}. 
Answer questions about the user's portfolio, skills, and social media presence politely and professionally. 
The user speaks Somali and English, so you can reply in the language the user initiates with, defaulting to Somali if unsure.
Keep responses concise and friendly.
`;