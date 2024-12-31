import { MdAccountBalance } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { MdEngineering } from "react-icons/md";

import myImg from "/img/mypic.jpg";
import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
const Home = () => {
  const [data, setData] = useState([]);
  const [View, setView] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // loading state
  const [IsLoading, setIsLoading] = useState(false);

  // local data fetching here

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((res2) => {
        setData(res2);
        setView(res2.slice(0, 4));
        setIsLoading(!IsLoading);
      });

    // setLoading(!loading)
  }, []);
  const showBtn = () => {
    if (showAll) {
      setView(data.slice(0, 4));
      console.log(data);
    } else {
      setView(data);
    }
    setShowAll(!showAll);
  };
  
  return (
    <>
      <div className=" mt-8 mb-8 flex flex-col  justify-center items-center">
        <main className="flex items-center justify-between max-md:flex-col gap-6 mb-8">
          <div className="left-side flex flex-col gap-6">
            <h1 className="font-extrabold tracking-wide text-[2rem] text-wrap">
              One Step Closer To Your <br />{" "}
              <span className="text-blue-300">Dream Job</span>
            </h1>
            <p className="text-gray-600 text-wrap">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div>
              <button className="btn btn-primary">Primary</button>
            </div>
          </div>
          <div className="w-full h-full p-8 max-md:p-0">
            <img
              className=" rounded-[15px] border-black border-[2px]"
              src={myImg}
              alt=""
            />
          </div>
        </main>
        <div className="job-catalog ">
          <div className="flex flex-col justify-center items-center text-left ">
            <h1 className="text-[30px] font-semibold">Job Category List</h1>
            <p className="text-gray-600">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="jobs grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-[5rem] mt-[4rem]">
            <div className="number p-4 bg-slate-800 rounded-[10px]">
              <MdAccountBalance className="text-[2.5rem]" />
              <h1>Account & Finance</h1>
              <p>100 Jobs Available</p>
            </div>
            <div className="number p-4 bg-slate-800 rounded-[10px]">
              <RiLightbulbFlashLine className="text-[2.5rem]" />
              <h1>Creative Design</h1>
              <p>400 Jobs Available</p>
            </div>

            <div className="number p-4 bg-slate-800 rounded-[10px]">
              <FcSalesPerformance className="text-[2.5rem]" />
              <h1>Marketing & Sales</h1>
              <p>100 Jobs Available</p>
            </div>
            <div className="number p-4 bg-slate-800 rounded-[10px]">
              <MdEngineering className="text-[2.5rem]" />
              <h1>Engineering Jobs</h1>
              <p>200 Jobs Available</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 mt-8">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[30px] font-semibold">Featured Jobs</h1>
              <p className="text-gray-600 ">
                Explore thousands of job opportunities with all the information
                you need. Its your future
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1">
              {View.map((data) => (
                <Jobs  key={data.id} data={data}></Jobs>
              ))}
             
            </div>
            <button className="btn btn-outline btn-primary" onClick={showBtn}>
              {showAll ? "Show Less" : "show All"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
