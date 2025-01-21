import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const homes = [
  {
    id: 1,
    title: "Vintage Crib",
    image: "/home1.jpg",
    description: "A cozy, timeless property designed for comfort and elegance.",
  },
  {
    id: 2,
    title: "Modern Loft",
    image: "/home2.jpg",
    description: "Experience city life with this stylish and contemporary loft.",
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    image: "/home3.jpg",
    description: "Relax by the waves in this charming beachside retreat.",
  },
  {
    id: 4,
    title: "Rustic Cabin",
    image: "/home4.jpg",
    description: "Surrounded by nature, this cabin offers peace and tranquility.",
  },
  {
    id: 5,
    title: "Luxury Villa",
    image: "/home5.jpg",
    description: "A spacious, high-end villa with stunning views and amenities.",
  },
  {
    id: 6,
    title: "Suburban Haven",
    image: "/home6.jpg",
    description: "A perfect family home nestled in a quiet suburban neighborhood.",
  },
];

