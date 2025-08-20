import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import JobCard from "./components/JobCard";

export default function Home() {
  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Amazon",
      logo: "/Amazon-Logo.png",
      posted: "24h Ago",
      exp: "1-3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      id: 2,
      title: "Node Js Developer",
      company: "Tesla",
      logo: "/tesla.svg",
      posted: "24h Ago",
      exp: "1-3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Swiggy",
      logo: "/Swiggy.png",
      posted: "24h Ago",
      exp: "1-3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Swiggy",
      logo: "/Swiggy.png",
      posted: "24h Ago",
      exp: "1-3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar + Filters container */}
      <div className="bg-white shadow-sm rounded-b-2xl">
        <Navbar />
        <Filters  />
      </div>

      {/* Job Cards */}
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-black">
        {jobs.concat(jobs).map((job, i) => (
          <JobCard key={job.id + i} job={job} />
        ))}
      </div>
    </div>
  );
}
