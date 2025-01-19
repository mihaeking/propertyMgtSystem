import React from "react";
import Link from "next/link";

interface SidebarProps {
  links: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="w-64  shadow-md bg-blue-300 bg-opacity-25 flex flex-col">
      <div className="p-6   ">
        <h1 className="text-4xl font-bold text-cyan-950">Dashboard</h1>
      </div>

      <div className=" h-full">
        <nav className="mt-4  ">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="px-4 py-2 text-white">
                <Link
                  href={link.href}
                  className="block text-lg text-black hover:text-white hover:bg-gray-700 rounded-lg px-4 py-2"
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
