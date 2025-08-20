// components/CreateJobModal.tsx
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
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-xl border border-gray-200">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Create Job Opening
              </h2>

              <form className="space-y-4">
                {/* Job Title & Company Name on same line */}
                <div className="flex gap-3 flex-wrap">
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                    />
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                    />
                  </div>
                </div>

                {/* Location & Job Type */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Preferred Location
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500">
                      <option value="">Choose Location</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Chennai">Chennai</option>
                    </select>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Job Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500">
                      <option value="">Select Job Type</option>
                      <option value="FullTime">Full Time</option>
                      <option value="PartTime">Part Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                </div>

                {/* Salary Range & Application Deadline */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Salary Range
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="₹0"
                        className="w-26 h-12 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                      />
                      <input
                        type="number"
                        placeholder="₹12L"
                        className="w-26 border border-gray-300 rounded-lg p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-gray-700 font-bold mb-1">
                      Application Deadline
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500"
                    />
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1 ">
                    Job Description
                  </label>
                  <textarea
                    placeholder="Please share a description to let the candidate know more about the job role"
                    className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-gray-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-between gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2  border rounded-lg text-gray-800 hover:bg-gray-100 transition"
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
                className="absolute top-3 right-3 text-gray-500 text-2xl hover:text-gray-700 transition"
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
  
