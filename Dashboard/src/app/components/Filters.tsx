"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";

export default function Filters() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [location, setLocation] = useState("Preferred Location");
  const [jobType, setJobType] = useState("Job Type");
  const [salary, setSalary] = useState(50000);

  const locations = ["Remote", "Delhi", "Bangalore", "Mumbai", "Hyderabad"];
  const jobTypes = ["Full-time", "Part-time", "Internship", "Freelance"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-2 flex flex-wrap items-center justify-center gap-4 px-4 py-4"
    >
      {/* Job Title Search */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full sm:w-72 transition-all hover:shadow-lg"
      >
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="flex-1 outline-none text-gray-700"
        />
      </motion.div>

      {/* Location Dropdown */}
      <div className="relative w-full sm:w-60">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setLocationOpen(!locationOpen)}
          className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full cursor-pointer transition-all hover:shadow-lg"
        >
          <MapPin className="text-gray-400 mr-2" size={20} />
          <span className="text-gray-700">{location}</span>
          <ChevronDown className="ml-auto text-gray-400" size={18} />
        </motion.div>

        {locationOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute mt-2 bg-white shadow-md rounded-lg w-full overflow-hidden z-10"
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

      {/* Job Type Dropdown */}
      <div className="relative w-full sm:w-48">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setJobTypeOpen(!jobTypeOpen)}
          className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full cursor-pointer transition-all hover:shadow-lg"
        >
          <Briefcase className="text-gray-400 mr-2" size={20} />
          <span className="text-gray-700">{jobType}</span>
          <ChevronDown className="ml-auto text-gray-400" size={18} />
        </motion.div>

        {jobTypeOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute mt-2 bg-white shadow-md rounded-lg w-full overflow-hidden z-10"
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

      {/* Salary Range */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex flex-col items-center bg-white shadow-md rounded-xl px-6 py-4 w-full sm:w-64 hover:shadow-lg transition-all"
      >
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-gray-500 text-sm font-medium">
            Salary Per Month
          </span>
          <span className="text-gray-700 text-sm font-semibold">
            ₹{(salary / 1000).toFixed(0)}k - ₹80k
          </span>
        </div>

        <input
          type="range"
          min="50000"
          max="80000"
          step="5000"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-full  cursor-pointer"
        />
      </motion.div>
    </motion.div>
  );
}
