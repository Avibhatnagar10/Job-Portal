// components/CreateJobModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateJobModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // close when background clicked
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-xl  border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Create Job Opening
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-500 "
                />
                <div className="flex gap-3">
                  <select className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-500">
                    <option>Location</option>
                  </select>
                  <select className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-500">
                    <option>Job Type</option>
                  </select>
                </div>
                <div className="flex gap-3 text-black">
                  <input
                    type="number"
                    placeholder="Min Salary"
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <input
                    type="number"
                    placeholder="Max Salary"
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-500"
                />
                <textarea
                  placeholder="Job Description"
                  className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none text-gray-500"
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 border rounded-lg text-gray-800 hover:bg-gray-100 transition "
                  >
                    Save Draft
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Publish
                  </button>
                </div>
              </form>
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-black-500 text-2xl hover:text-gray-700 transition"
              >
                &times;
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
