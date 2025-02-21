import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAuth } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle> {/* Added a title for better UX */}
        </SheetHeader>
        <nav className="gap-3 flex flex-col items-start">
          <NavigationRoutes isMobile />
          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "text-base text-neutral-500 ",
                  isActive && "text-neutral-600 font-semibold"
                )
              }
            >
              Take an Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
