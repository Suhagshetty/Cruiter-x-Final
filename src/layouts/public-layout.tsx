import * as React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";

export const PublicLayout: React.FC = () => {
  return (
    <div>
      <AuthHandler />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
