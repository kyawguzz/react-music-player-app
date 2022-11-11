import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import logo from '../assets/logo.png'
const NavLinks = ({handleClick}) =>(
  <div className="mt-10">
    {links.map((item) => (
      <NavLink 
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-200 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2"/>
          {item.name}
      </NavLink>
    ))}
  </div>

)

const Sidebar = () => {
  const [ mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
    <>
      <div className="md:flex hidden flex-col w-[240px] pt-10 px-4  bg-[#65636a]">
        <div className="mb-20">
          <img src={logo} alt="logo" className="w-full h-20 object-contain" />
          <NavLinks />
          
        </div>
        <div className="mt-20">
          <p className="text-gray-200 text-xs border-l-2 p-1">Develop with &#128155; by Kyaw Zin Htet.</p>
        </div>
      </div>

      <div className="absolute md:hidden block top-6 right-3 mt-8">
        {mobileMenuOpen?(
            <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)}/>
          ): <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)}/>
        }
      </div>

      <div className={`absolute top-0 pt-20 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#323139]
       backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left:0': '-left-full'}`}>
        <div className="mb-60">
          <img src={logo} alt="logo" className="w-full h-20 object-contain" />
          <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
        </div>
        <div className="mt-20">
          <p className="text-gray-200 text-xs border-l-2 p-1">Develop with &#128155; by Kyaw Zin Htet.</p>
        </div>
      </div>
    </>
  )
  };

export default Sidebar;
