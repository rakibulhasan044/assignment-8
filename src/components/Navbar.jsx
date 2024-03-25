import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="pr-3 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/listedbooks" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to="pagesread" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Pages to Read</NavLink></li>
      </ul>
    </div>
    <p className="text-xl font-bold">Book Vibe</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/listedbooks" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to="pagestoread" className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className=" flex gap-2 md:gap-5 navbar-end text-white">
    <Link className="bg-[#23BE0A] p-1 md:py-2 px-3 rounded-2xl">Sing In</Link>
    <Link className="bg-[#59C6D2] p-1 md:py-2 px-3 rounded-2xl">Sign up</Link>
  </div>
</div>
    );
};

export default Navbar;