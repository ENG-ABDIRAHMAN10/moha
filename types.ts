export interface SocialLink {
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'Snapchat' | 'TikTok' | 'X';
  url: string;
  username: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}