
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Lace Bralette',
    price: 45.00,
    category: 'Bralettes',
    image: 'https://picsum.photos/seed/bralette1/400/500',
    description: 'Beautifully preserved silk lace bralette from a boutique collection.',
    condition: 'Like New',
    brand: 'LuxeEco'
  },
  {
    id: '2',
    name: 'Cotton Comfort Set',
    price: 32.00,
    category: 'Sets',
    image: 'https://picsum.photos/seed/set1/400/500',
    description: 'High-quality organic cotton essentials, perfect for everyday wear.',
    condition: 'Gently Used',
    brand: 'EarthThreads'
  },
  {
    id: '3',
    name: 'Vintage Satin Slip',
    price: 58.00,
    category: 'Nightwear',
    image: 'https://picsum.photos/seed/slip1/400/500',
    description: 'A stunning 90s era satin slip with intricate embroidery.',
    condition: 'Vintage',
    brand: 'Nostalgia'
  },
  {
    id: '4',
    name: 'High-Waist Briefs (Pack of 3)',
    price: 28.00,
    category: 'Panties',
    image: 'https://picsum.photos/seed/briefs1/400/500',
    description: 'Supportive high-waist briefs made from sustainable modal fabric.',
    condition: 'Like New',
    brand: 'CoreSustainable'
  },
  {
    id: '5',
    name: 'Embroidered Tulle Body',
    price: 75.00,
    category: 'Bodysuits',
    image: 'https://picsum.photos/seed/body1/400/500',
    description: 'Exquisite tulle bodysuit with hand-stitched floral patterns.',
    condition: 'Vintage',
    brand: 'AtelierV'
  },
  {
    id: '6',
    name: 'Eco-Luxe Sports Top',
    price: 39.00,
    category: 'Active',
    image: 'https://picsum.photos/seed/active1/400/500',
    description: 'Recycled polyester sports top with maximum breathability.',
    condition: 'Gently Used',
    brand: 'MoveMint'
  }
];

export const DEVOPS_STEPS = [
  {
    title: 'Branching Strategy',
    content: 'Always create a new branch for features: `git checkout -b feature/new-page`. This keeps the main branch stable.',
    icon: 'fa-code-branch'
  },
  {
    title: 'Commit Conventions',
    content: 'Use descriptive messages like `feat: add product sorting` or `fix: navbar overlap`.',
    icon: 'fa-comment-dots'
  },
  {
    title: 'Pull Requests',
    content: 'Push your branch and create a PR. This allows for code reviews and automated testing (CI).',
    icon: 'fa-code-pull-request'
  },
  {
    title: 'Continuous Deployment',
    content: 'Merging to `main` should trigger a deployment to your production environment.',
    icon: 'fa-rocket'
  }
];
