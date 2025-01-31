import Image from "next/image";

interface OverviewItemProps {
  title: string;
  image: string;
  description: string;
  price: string;
  phone: string;
  location: string;
}

export default function OverviewItem({
  title,
  image,
  price,
  phone,
  location,
  description,
}: OverviewItemProps) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>
      <p className="text-gray-600 leading-relaxed">{price}</p>
      <p className="text-gray-600 leading-relaxed">{location}</p>
      <p className="text-gray-600 leading-relaxed">{phone}</p>
    </div>
  );
}
