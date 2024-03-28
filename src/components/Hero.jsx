import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-slate-100 p-10 rounded-2xl">
      <div className="p-10 space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Read more Mangas <br />& enjoy.
        </h1>
        <Link to="/listedbooks" className="btn bg-[#23BE0A] text-xl text-white">
          View The List
        </Link>
      </div>
      <img
        className="w-[300px] h-[394px]"
        src="https://cdn.myanimelist.net/images/anime/1948/120625.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
