import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="flex justify-center items-center  gap-8 max-md:w-full max-md:flex-col max-md:p-8 max-md:text-black max-md:bg-[#D9DFC6] lg:text-white max-md:p-[4rem] max-md:mt-[3rem] w-full max-md:rounded-lg max-md:shadow-black max-md:shadow-xl">
      <Link to="/">Home</Link>
      <Link to="/AppliedJob">AppliedJob</Link>
      <Link to="/Blog">Blog</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
};

export default Menu;
