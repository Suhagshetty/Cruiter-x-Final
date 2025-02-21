import * as React from "react";

import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("transition-colors duration-200", hoverColor)}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-300 hover:text-gray-100"
      >
        {children}
      </Link>
    </li>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black text-gray-300 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              We the Students at @sambhraminstitutions help you prepare for
              interviews with AI-powered tools.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <FooterLink to="/services/interview-prep">
                Interview Preparation
              </FooterLink>
              <FooterLink to="/services/career-coaching">
                Career Coaching
              </FooterLink>
              <FooterLink to="/services/resume-building">
                Resume Building
              </FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4">Rajajinagar, Bengaluru, 90/C</p>
            <div className="flex gap-4">
              <SocialLink
                href="https://x.com/SuhagShett80253"
                icon={<Twitter size={24} />}
                hoverColor="text-blue-400"
              />
              <SocialLink
                href="https://www.instagram.com/___itz.suhag___/"
                icon={<Instagram size={24} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://www.linkedin.com/in/suhagshetty07/"
                icon={<Linkedin size={24} />}
                hoverColor="text-blue-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
