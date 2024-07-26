import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../shadcn/components/ui/navigation-menu";

import logo from '/logo.png'

const Navbar = () => {
  const allPages = ['Buy', 'Sell', 'Mortgage', 'Reach out', 'Our Team of Experts',]
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between p-4  text-white h-full relative z-[100]" >
        <div className="w-1/2 h-1/2">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <NavigationMenu className="flex gap-6">
          <NavigationMenuList className="flex gap-4 font-bold">
            <NavigationMenuItem className=""></NavigationMenuItem>
            {allPages.map((menuItem) => (
              <NavigationMenuItem
                className="active:text-slate-300 hover:text-slate-300 hover:cursor-pointer ">
                {menuItem}</NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>


  );
}

export default Navbar;
