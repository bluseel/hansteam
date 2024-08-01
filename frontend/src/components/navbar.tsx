import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from '/logo.png';
const logo = "https://i.imgur.com/5FnceeT.png";
import hamburger from "/hamburger.svg";
import lakeside from "/lakeside.jpg";

const Navbar = () => {
  const allPages = [
    { name: "Home", link: "/" },
    { name: "Buy", link: "/buy" },
    { name: "Sell", link: "/sell" },
    { name: "Reach out", link: "/contact" },
    { name: "Our Team of Experts", link: "/team" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [toggleMenuStyling, setToggleMenuStyling] = useState(
    " flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform",
  );
  const [onMobileScreen, setOnMobileScreen] = useState(
    window.innerWidth < 700 ? true : false,
  );

  useEffect(() => {
    if (onMobileScreen) {
      if (showMobileMenu) {
        setToggleMenuStyling(
          " flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform",
        );
        setTimeout(() => {
          setToggleMenuStyling(
            " flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform",
          );
        }, 100);
      } else {
        setToggleMenuStyling(
          " flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[100%] transition-transform",
        );
        setTimeout(() => {
          if (onMobileScreen) {
            setToggleMenuStyling(
              "hidden flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform",
            );
          }
        }, 100);
      }
    } else {
      setToggleMenuStyling(
        " flex gap-6 max-[600px]:absolute max-[600px]:top-0 max-[600px]:right-0 max-[600px]:-translate-y-[0%] transition-transform",
      );
    }
  }, [showMobileMenu, onMobileScreen]);

  return (
    <div className="absolute w-full">
      <div className="bg-fit absolute inset-0 bg-[url('/waves.svg')] bg-top"></div>

      <div className="relative z-10"></div>
      <div className="relative"></div>
      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="absolute top-8 z-[200] h-12 w-12 bg-primary-yellow px-3 max-[600px]:right-4 md:hidden"
      >
        <img src={hamburger} className="h-full w-full" alt="Hamburger Menu" />
      </div>

      <div className="relative z-[100] flex h-full items-center justify-between p-2 text-white">
        <div className="h-1/2 w-1/2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <div className={toggleMenuStyling}>
          <div
            className="flex gap-6 font-bold max-[600px]:h-screen max-[600px]:w-[100dvw] max-[600px]:flex-col max-[600px]:gap-10 max-[600px]:bg-slate-700/90 max-[600px]:p-10 max-[600px]:backdrop-blur-sm"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {allPages.map((menuItem, index) => (
              <Link
                to={menuItem.link}
                key={index}
                className="text-xl hover:cursor-pointer hover:text-slate-300 active:text-slate-300 max-[600px]:text-3xl"
              >
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
