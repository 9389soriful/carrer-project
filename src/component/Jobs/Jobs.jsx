import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Jobs = ({ data }) => {
  const { company_name, id, job_title, location, remote_or_onsite, salary } =
    data;
  const navigate = useNavigate();
  const handleJobDet = () => {
    navigate(`/JobDetails/${id}`);
  };
  return (
    <div>
      <section className=" flex flex-col items-start gap-4 border border-slate-800 p-8">
        <h1>{job_title}</h1>
        <h1>{company_name}</h1>
        <caption className="p-4 border-blue-950 rounded border">
          {remote_or_onsite}
        </caption>
        <p className="flex justify-between w-full">
          <span className="flex gap-4 ">
            <CiLocationOn className="text-2xl cursor-pointer" />
            {location}
          </span>
          <span className="flex gap-4 ">
            <CiDollar className="text-2xl cursor-pointer" />
            {salary}
          </span>
        </p>
        <button className="btn btn-outline btn-primary" onClick={handleJobDet}>
          View Details
        </button>
      </section>
    </div>
  );
};

export default Jobs;
