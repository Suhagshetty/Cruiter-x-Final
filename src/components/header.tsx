import { LogoContainer } from "@/components/logo-container";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth(); // Consider using this

  return (
    <header
      className={cn("w-full border-b transition-all duration-150 ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          <LogoContainer />
          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-500",
                    isActive && "text-neutral-600 font-semibold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <ProfileContainer />
            <ToggleContainer /> {/* ✅ Now correctly used */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
