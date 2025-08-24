"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";

export default function FilterBar() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [location, setLocation] = useState("Preferred Location");
  const [jobType, setJobType] = useState("Job Type");
  const [salary, setSalary] = useState([50000, 80000]);

  const locations = ["Remote", "Delhi", "Bangalore", "Mumbai", "Hyderabad"];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Freelance"];

  return (
    <div className="w-full bg-white py-10 px-10 flex justify-between items-center text-gray-700 text-1lg">

      {/* Search */}
      <div className="flex items-center gap-10 flex-2 max-w-xs border-r px-4">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="flex font-medium outline-none placeholder-grey-400 "
        />
      </div>

      {/* Location */}
      <div className="relative flex-1  justify-center border-r px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setLocationOpen(!locationOpen)}
          className="flex items-center rounded-2xl px-4 py-2 cursor-pointer transition-all "
        >
          <MapPin className="text-gray-400 mr-2" size={20} />
          <span className="text-gray-700">{location}</span>
          <ChevronDown className="ml-auto text-gray-400" size={18} />
        </motion.div>

        {locationOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg w-full overflow-hidden z-10"
          >
            {locations.map((loc) => (
              <li
                key={loc}
                onClick={() => {
                  setLocation(loc);
                  setLocationOpen(false);
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition"
              >
                {loc}
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Job Type */}
      <div className="relative flex-1  justify-center border-r px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setJobTypeOpen(!jobTypeOpen)}
          className="flex items-center rounded-2xl px-4 py-2 cursor-pointer transition-all "
        >
          <Briefcase className="text-gray-400 mr-2" size={20} />
          <span className="text-gray-700">{jobType}</span>
          <ChevronDown className="ml-auto text-gray-400" size={18} />
        </motion.div>

        {jobTypeOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg w-full overflow-hidden z-10"
          >
            {jobTypes.map((type) => (
              <li
                key={type}
                onClick={() => {
                  setJobType(type);
                  setJobTypeOpen(false);
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition"
              >
                {type}
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Salary */}
      <div className="flex-1 flex items-center justify-end gap-3 pl-4">
        <span className="text-gray-500 text-sm whitespace-nowrap">
          Salary Per Month
        </span>
        <span className="font-medium text-gray-700 text-sm whitespace-nowrap">
          ₹{(salary[0] / 1000).toFixed(0)}k - ₹{(salary[1] / 1000).toFixed(0)}k
        </span>
        <input
          type="range"
          min="50000"
          max="80000"
          step="5000"
          value={salary[0]}
          onChange={(e) => setSalary([Number(e.target.value), salary[1]])}
          className="w-32 accent-black"
        />
      </div>
    </div>
  );
}
