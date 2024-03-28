import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen pt-40 space-y-4 bg-slate-50">
      <h2 className="text-4xl font-semibold text-slate-400">404 Error Page</h2>
      <h4 className="text-4xl font-semibold text-slate-400">
        Sorry, this page does not exist
      </h4>
      <Link to="/" className="px-6 py-2 btn">
        Go to Home
      </Link>
    </div>
  );
};

export default Errorpage;
