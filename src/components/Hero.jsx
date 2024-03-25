import pngwing from "../assets/pngwing.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-slate-100 p-10 rounded-2xl">
      <div className="p-10 space-y-3">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] text-xl text-white">
          View The List
        </button>
      </div>
      <img className="w-[318px] h-[394px]" src={pngwing} alt="" />
    </div>
  );
};

export default Hero;
