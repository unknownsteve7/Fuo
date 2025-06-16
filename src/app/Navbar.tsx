"use client";

import AnimatedMenuIcon from "./AnimatedMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-transparent text-black flex items-center justify-between z-50">
      <div className="flex items-center">
        <a href="/"><span className="text-lg font-bold">Fuo<sup>&trade;</sup></span></a>
      </div>
      <ul className="flex space-x-4">
        <li>
          <AnimatedMenuIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;