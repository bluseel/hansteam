import { useEffect, useState } from "react";

import logo from '/logo.png'
import hamburger from '/hamburger.svg'

const Navbar = () => {
  
  
  const allPages = ['Buy', 'Sell', 'Mortgage', 'Reach out', 'Our Team of Experts',]
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [toggleMenuStyling, setToggleMenuStyling] = useState("flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform")
  

  useEffect(() => {
    if(showMobileMenu){
      setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform')
      setTimeout(function(){
        setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform')
      },  100);
    }else{
      setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform')
      setTimeout(function(){
        setToggleMenuStyling('hidden flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform')
      },  100);
    }
  
  }, [showMobileMenu])
  

  return (
    <div className="absolute w-full">
      {/* hamburger for mobile only */}
      <div onClick={()=>(setShowMobileMenu(!showMobileMenu))} className="md:hidden -right-96 max-[600px]:right-4 h-12 w-12 absolute top-8 bg-primary-yellow px-3  z-[12] ">
        <img src={hamburger} className="h-full w-full" alt="" />
      </div>


      {/* main thing */}
      <div className="flex items-center justify-between p-4  text-white h-full relative z-[100]" >
        <div className="w-1/2 h-1/2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>



        <div className={toggleMenuStyling}>
          <div className="flex gap-4 max-[600px]:gap-10 font-bold 
          max-[600px]:flex-col max-[600px]:bg-slate-700/90 max-[600px]:backdrop-blur-sm 
          max-[600px]:h-screen max-[600px]:w-[90dvw] max-[600px]:p-10">
            {allPages.map((menuItem, index) => (
              <div key={index}
                className="active:text-slate-300 hover:text-slate-300 hover:cursor-pointer max-[600px]:text-3xl">
                {menuItem}</div>
            ))}
          </div>
        </div>
      </div>
    </div>


  );
}

export default Navbar;
