import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import hamburger from '/hamburger.svg';

const Navbar = () => {
  const allPages = [
    { name: 'Home', link: '/' },
    { name: 'Buy', link: '/buy' },
    { name: 'Sell', link: '/sell' },
    { name: 'Mortgage', link: '/mortgage' },
    { name: 'Reach out', link: '/contact' },
    { name: 'Our Team of Experts', link: '/team' },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggleMenuStyling, setToggleMenuStyling] = useState(" flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform");
  const [onMobileScreen, setOnMobileScreen] = useState(window.innerWidth < 700 ? true : false);

  useEffect(() => {
    if (onMobileScreen) {
      if (showMobileMenu) {
        setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform');
        setTimeout(() => {
          setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform');
        }, 100);
      } else {
        setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform');
        setTimeout(() => {
          if (onMobileScreen) {
            setToggleMenuStyling('hidden flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform');
          }
        }, 100);
      }
    } else {
      setToggleMenuStyling(' flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform');
    }
  }, [showMobileMenu, onMobileScreen]);

  return (
    <div className="absolute w-full">
      <div onClick={() => setShowMobileMenu(!showMobileMenu)} className="z-[200] md:hidden max-[600px]:right-4 h-12 w-12 absolute top-8 bg-primary-yellow px-3">
        <img src={hamburger} className="h-full w-full" alt="Hamburger Menu" />
      </div>

      <div className="flex items-center justify-between p-4 text-white h-full relative z-[100]">
        <div className="w-1/2 h-1/2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <div className={toggleMenuStyling}>
          <div className="flex gap-4 max-[600px]:gap-10 font-bold max-[600px]:flex-col max-[600px]:bg-slate-700/90 max-[600px]:backdrop-blur-sm max-[600px]:h-screen max-[600px]:w-[100dvw] max-[600px]:p-10" onClick={()=>(setShowMobileMenu(!showMobileMenu))}>
            {allPages.map((menuItem, index) => (
              <Link to={menuItem.link} key={index} className="active:text-slate-300 hover:text-slate-300 hover:cursor-pointer max-[600px]:text-3xl">
                {menuItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
