import React from "react";
import Link from "next/link";

interface SidebarProps {
  links: { name: string; href: string }[]; 
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="w-64  shadow-md flex flex-col">
      <div className="p-4 border-b mb-8 bg-blue-300 ">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="bg-green-500 h-full">
      <nav className="mt-4  ">
      <ul>
  {links.map((link, index) => (
    <li
      key={index}
      className="px-4 py-2 text-black"
    >
      <Link
        href={link.href}
        className="block bg-blue-300 text-black hover:text-white hover:bg-cyan-950 rounded-lg px-4 py-2"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

      </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
