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
  return (
    <div className="flex items-center justify-between p-4  text-white h-full relative z-[100]" >
      <div className="w-1/2 h-1/2">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <NavigationMenu className="flex gap-6">
        <NavigationMenuList className="flex gap-4 font-bold">
          <NavigationMenuItem>Buy</NavigationMenuItem>
          <NavigationMenuItem>Sell</NavigationMenuItem>
          <NavigationMenuItem>Mortgage</NavigationMenuItem>
          <NavigationMenuItem>Reach out</NavigationMenuItem>
          <NavigationMenuItem>Our team of experts</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
