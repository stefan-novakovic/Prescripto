import { useState } from 'react';
import { NavLink, useNavigate, NavigateFunction } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
   const navigate: NavigateFunction = useNavigate();

   // const [showMenu, setShowMenu] = useState<boolean>(false);
   const [token, setToken] = useState<boolean>(true);

   return (
      <section className="h-[77px] flex items-center justify-between text-sm mb-5 border-b border-b-gray-400">
         <img onClick={() => navigate('/')} className="w-40 lg:w-44 py-4 cursor-pointer" src={assets.logo} alt="" />

         <ul className="hidden md:flex items-start gap-3 lg:gap-5 py-4 font-medium">
            <NavLink to="/">
               <li className="py-1 text-center">HOME</li>
               <hr className="border-none outline-none h-0.5 bg-transparent w-4/5 m-auto" />
            </NavLink>
            <NavLink to="/doctors">
               <li className="py-1 text-center">ALL DOCTORS</li>
               <hr className="border-none outline-none h-0.5 bg-transparent w-3/5 m-auto" />
            </NavLink>
            <NavLink to="/about">
               <li className="py-1 text-center">ABOUT</li>
               <hr className="border-none outline-none h-0.5 bg-transparent w-3/5 m-auto" />
            </NavLink>
            <NavLink to="/contact">
               <li className="py-1 text-center">CONTACT</li>
               <hr className="border-none outline-none h-0.5 bg-transparent w-3/5 m-auto" />
            </NavLink>
         </ul>

         <div className="flex item-center gap-4">
            {token ? (
               <div className="flex items-center gap-2 cursor-pointer group relative pb-6 mt-6">
                  <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                  <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                  <div
                     className={`absolute top-14 right-0 text-base font-medium text-gray-600 z-20 delay-200 invisible group-hover:delay-0 group-hover:visible`}
                  >
                     <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p onClick={() => navigate('/my-profile')} className="hover:text-black hover:cursor-pointer">
                           My profile
                        </p>
                        <p
                           onClick={() => navigate('/my-appointments')}
                           className="hover:text-black hover:cursor-pointer"
                        >
                           My appointments
                        </p>
                        <p
                           onClick={() => {
                              setToken(false);
                              navigate('/');
                           }}
                           className="hover:text-black hover:cursor-pointer"
                        >
                           Logout
                        </p>
                     </div>
                  </div>
               </div>
            ) : (
               <button
                  onClick={() => navigate('/login')}
                  className="bg-primary text-white px-5 lg:px-8 py-3 rounded-full font-light hidden md:block"
               >
                  Create account
               </button>
            )}
         </div>
      </section>
   );
};
export default Navbar;
