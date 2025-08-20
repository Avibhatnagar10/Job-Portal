"use client";

import { Users, MapPin, Building,  } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    logo: string;
    posted: string;
    exp: string;
    type: string;
    salary: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 relative">
      {/* Posted Badge */}
      <span className="absolute top-3 right-3 bg-blue-300 text-black text-xs px-3 py-1 rounded-4xl">
        {job.posted}
      </span>

      {/* Logo */}
      <img src={job.logo} alt={job.company} className="h-10 w-10 mb-3 rounded-4xl" />

      {/* Title */}
      <h3 className="text-lg font-semibold">{job.title}</h3>

      {/* Company Info */}
      <div className="flex items-center text-gray-500 text-sm mt-1 space-x-4">
        <span className="flex items-center"><Users size={14} className="mr-1"/> {job.exp}</span>
        <span className="flex items-center"><MapPin size={14} className="mr-1"/> {job.type}</span>
        <span className="flex items-center"><Building size={14} className="mr-1"/> {job.salary}</span>
      </div>

      {/* Description */}
      <ul className="mt-3 text-gray-600 text-sm list-disc pl-4">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style, and create personalized</li>
        
      </ul>

      {/* Apply Button */}
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Apply Now
      </button>
    </div>
  );
}
