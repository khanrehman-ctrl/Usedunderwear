
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  condition: 'Like New' | 'Gently Used' | 'Vintage';
  brand: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Page {
  HOME = 'home',
  SHOP = 'shop',
  SELL = 'sell',
  ABOUT = 'about',
  DEVOPS = 'devops'
}
