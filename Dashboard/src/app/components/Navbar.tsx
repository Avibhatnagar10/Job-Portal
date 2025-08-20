"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import CreateJobModal from "./CreateJobModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Find Jobs", href: "#" },
    { name: "Find Talents", href: "#" },
    { name: "About us", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  return (
    <nav className="w-full flex justify-center mt-6 px-4">
      <div className="bg-white shadow-md rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/cybermind.png" alt="logo" className="h-8 w-8" />
          <span className="font-bold text-gray-700">CyberMind</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-black font-bold"
            >
              {item.name}
            </a>
          ))}
          <button onClick={() => setIsModalOpen(true)} className="ml-6 px-5 py-2 bg-purple-800 text-white rounded-full hover:opacity-90 transition">
            Create Jobs
          </button>

          <CreateJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg w-full max-w-4xl px-6 py-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-black font-bold"
            >
              {item.name}
            </a>
          ))}
          <button className="mt-2 px-5 py-2 bg-purple-800 text-white rounded-full hover:opacity-90 transition">
            Create Jobs
          </button>
        </div>
      )}
    </nav>
  );
}
