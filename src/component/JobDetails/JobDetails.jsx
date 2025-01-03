import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState("");
  useEffect(() => {
    fetch(`/data/jobs.json`)
      .then((response) => response.json())
      .then((jobs) => {
        const foundJob = jobs.find((job) => job.id === parseInt(id));
        setJob(foundJob);
      });
  }, [id]);

  if(job == null){
    
  }
  return (
    <div className=" border-t px-10 py-4 cursor-alias flex flex-col justify-around items-center mt-8 mb-8 w-full gap-8 bg-slate-950 p-8 rounded-lg ">
      <h1 className="text-3xl font-serif"> Job Details</h1>
      <div className="flex items-center max-md:flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl font-mono">{job.company_name}</h2>
          <p className="text-gray-400 font-light text-balance">
            <span className="text-xl font-bold pr-2">Job Description : </span>
            {job.job_description}
          </p>
          <p className="text-gray-400 font-light text-balance">
            <span className="text-xl font-bold pr-2">Job Responsibility :</span>{" "}
            {job.job_responsibility}
          </p>
          <p className="text-gray-400 font-light text-balance">
            <span className="text-xl font-bold pr-2">
              Educational Requirement :
            </span>
            {job.educational_requirements}
          </p>
          <p className="text-gray-400 font-light text-balance">
            <span className="text-xl font-bold pr-2">Job experiences :</span>{" "}
            {job.experiences}
          </p>
          <p className="text-gray-400 font-light text-balance">
            {job.location}
          </p>
          <p className="text-gray-400 font-light text-balance">
            <span className="text-xl font-bold pr-2"> Job Location :</span>
            {job.remote_or_onsite}
          </p>
        </section>
        <section className="flex flex-col w-full gap-6  bg-slate-900 p-12 border border-gray-600 rounded-lg">
          <h1 className="text-gray-400 border-b-[2px] font-mono text-2xl pb-2 border-dotted">
            JOB DETAILS
          </h1>
          <div className="border-b-[2px] border-dotted pb-2 text-gray-400">
            <h1 className="text-xl font-mono">{job.job_title}</h1>
            <p className="text-gray-400 font-mono text-balance">{job.salary}</p>
          </div>
          <div>
            <p className="flex gap-4 font-mono">
              {" "}
              <span>Phone : </span>
              <a href="#">01645425043</a>
            </p>
            <p className="flex gap-4 font-mono">
              <span>Email : </span>
              <a href="#">454250soriful@gamil.com</a>
            </p>
            <p className="flex gap-4 font-mono">
              <span>Address : </span>
              <a href="#">Rangpur , Bangladesh</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
