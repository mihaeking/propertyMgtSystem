import React from "react";
import Link from "next/link";

interface SidebarProps {
  links: { name: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="w-64  shadow-md bg-gray-900 flex flex-col">
      <div className="p-4   ">
        <h1 className="text-xl font-bold text-gray-300">Dashboard</h1>
      </div>

      <div className=" h-full">
        <nav className="mt-4  ">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="px-4 py-2 text-white">
                <Link
                  href={link.href}
                  className="block  text-black hover:text-white hover:bg-neutral-100/5 rounded-lg px-4 py-2"
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
