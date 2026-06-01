import aboutFootwear from '../assets/images/about-footwear.jpg'
import collectionMen from '../assets/images/collection-men.jpg'
import collectionNew from '../assets/images/collection-new.jpg'
import collectionUnisex from '../assets/images/collection-unisex.jpg'
import collectionWomen from '../assets/images/collection-women.jpg'
import heroFootwear from '../assets/images/hero-footwear.jpg'
import philoveeystoreBanner from '../assets/images/philoveeystore-banner.jpeg'
import productHeelBlack from '../assets/images/product-heel-black.jpg'
import productLoaferBlack from '../assets/images/product-loafer-black.jpg'
import productSandalBrown from '../assets/images/product-sandal-brown.jpg'
import productSlideBlack from '../assets/images/product-slide-black.jpg'
import productSlideTan from '../assets/images/product-slide-tan.jpg'

export const brandAssets = {
  about: aboutFootwear,
  hero: heroFootwear,
}

export const heroSlides = [
  {
    image: heroFootwear,
    alt: 'Philoveey handmade slides with branded packaging',
    title: 'Walk Bold. Walk Philoveey.',
    text: 'Handmade footwear designed for comfort, confidence, and everyday style.',
    position: 'center',
  },
  {
    image: philoveeystoreBanner,
    alt: 'Philoveeystore handmade luxury banner with contact details',
    title: 'Embracing Luxury in Handmade',
    text: 'Discover premium handmade pieces crafted with love, attention to detail, and a touch of luxury.',
    position: 'center',
  },
]

export const benefits = [
  {
    icon: 'heart',
    title: 'Handmade Quality',
    text: 'Crafted with precision and passion',
  },
  {
    icon: 'star',
    title: 'Comfortable Fit',
    text: 'Made for all-day comfort',
  },
  {
    icon: 'shield',
    title: 'Durable Materials',
    text: 'Premium materials for long-lasting wear',
  },
  {
    icon: 'tag',
    title: 'Affordable Luxury',
    text: 'Premium look, fair prices',
  },
  {
    icon: 'truck',
    title: 'Nationwide Delivery',
    text: 'Fast and reliable delivery',
  },
]

export const collections = [
  {
    category: 'Men',
    title: 'Men Collection',
    text: 'For polished everyday movement',
    image: collectionMen,
  },
  {
    category: 'Women',
    title: 'Women Collection',
    text: 'Soft lines, bold confidence',
    image: collectionWomen,
  },
  {
    category: 'Unisex',
    title: 'Unisex Styles',
    text: 'Clean comfort for every wardrobe',
    image: collectionUnisex,
  },
  {
    category: '',
    title: 'New Arrivals',
    text: 'Fresh pairs ready to ship',
    image: collectionNew,
  },
]

export const products = [
  {
    id: 'classic-slide-black',
    name: 'Classic Slide',
    color: 'Black',
    price: 15000,
    category: 'Men',
    image: productSlideBlack,
  },
  {
    id: 'signature-cross-slide-tan',
    name: 'Signature Cross Slide',
    color: 'Tan',
    price: 16000,
    category: 'Women',
    image: productSlideTan,
  },
  {
    id: 'elite-loafer-black',
    name: 'Elite Loafer',
    color: 'Black',
    price: 20000,
    category: 'Men',
    image: productLoaferBlack,
  },
  {
    id: 'urban-sandal-brown',
    name: 'Urban Sandal',
    color: 'Brown',
    price: 17000,
    category: 'Unisex',
    image: productSandalBrown,
  },
  {
    id: 'block-heel-black',
    name: 'Block Heel',
    color: 'Black',
    price: 18000,
    category: 'Women',
    image: productHeelBlack,
  },
]

export const reviews = [
  {
    name: '@dami_olu',
    text: 'The quality shocked me honestly. Super comfy and the finishing is top notch.',
  },
  {
    name: '@therealannie',
    text: 'Finally found a brand that combines style and comfort perfectly. Philoveey is now my go-to.',
  },
  {
    name: '@mz_tobiloba',
    text: 'My order came fast and the packaging was so neat. I love the slides.',
  },
]
