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
    price: "$700",
    phone: "075678910",
    location: "Dar Es Salaam",
    description: "A cozy, timeless property designed for comfort and elegance.",
  },
  {
    id: 2,
    title: "Modern Loft",
    image: "/home2.jpg",
    price: "$2000",
    phone: "073674912",
    location: "Dar Es Salaam",
    description:
      "Experience city life with this stylish and contemporary loft.",
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    image: "/home3.jpg",
    price: "$1000",
    phone: "075678910",
    location: "Dar Es Salaam",
    description: "Relax by the waves in this charming beachside retreat.",
  },
  {
    id: 4,
    title: "Rustic Cabin",
    image: "/home4.jpg",
    price: "$100",
    phone: "075678910",
    location: "Pwani",
    description:
      "Surrounded by nature, this cabin offers peace and tranquility.",
  },
  {
    id: 5,
    title: "Luxury Villa",
    image: "/home5.jpg",
    price: "$2100",
    phone: "0745678910",
    location: "Arusha",
    description:
      "A spacious, high-end villa with stunning views and amenities.",
  },
  {
    id: 6,
    title: "Suburban Haven",
    image: "/home6.jpg",
    price: "$1300",
    phone: "0613678910",
    location: "Dodoma",
    description:
      "A perfect family home nestled in a quiet suburban neighborhood.",
  },
];

