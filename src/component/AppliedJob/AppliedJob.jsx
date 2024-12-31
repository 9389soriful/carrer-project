import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
const AppliedJob = () => {
  const [subData, setSubData] = useState([]);
  useEffect(() => {
    fetch(`data/jobs.json`)
      .then((res) => res.json())
      .then((data) => {
        setSubData(data);
      });
  }, []);
  return (
    <div>
      <section className="p-8 rounded-lg grid grid-cols-2 max-md:grid-cols-1 gap-8 w-full mt-8 mb-8">
        {subData.map((job, index) => (
          <div
            className="flex items-center text-black border-y-yellow-400  bg-[#D9DFC6]  p-4 border rounded-lg"
            key={index}
          >
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-3xl font-mono">{job.job_title}</h1>
              <h2 className="text-2xl font-serif">{job.company_name}</h2>
              <div>
                <span className="border-[1px] border-blue-500 pl-4 pr-4 pt-2 pb-2 rounded-lg">
                  {job.remote_or_onsite}
                </span>
              </div>
              <div className="flex gap-8">
                <p className=" flex  gap-2">
                  <CiLocationOn className="text-2xl cursor-pointer" />
                  {job.location}
                </p>
                <p className="flex  gap-2">
                  <CiDollar className="text-2xl cursor-pointer" />
                  {job.salary}
                </p>
              </div>
            </div>
            <div className="">
              <button className="btn btn-outline btn-success">
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AppliedJob;
