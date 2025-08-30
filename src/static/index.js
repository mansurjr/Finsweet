import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Work from "../pages/Work";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import facebook from "../assets/Facebook _ Negative.svg";
import twitter from "../assets/Twitter _ Negative.svg";
import linkedin from "../assets/LinkedIn _ Negative.svg";
import instagram from "../assets/Instagram _ Negative.svg";

export const NAVBAR_MENU = [
  { name: "Home", path: "/", component: Home },
  { name: "About Us", path: "/about", component: About },
  { name: "Pricing", path: "/pricing", component: Pricing },
  { name: "Work", path: "/work", component: Work },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "Contact Us", path: "/contact", component: Contact },
];



export const FOOTER_ICONS = [
  { icon: facebook, url: "https://facebook.com" },
  { icon: twitter, url: "https://twitter.com" },
  { icon: linkedin, url: "https://linkedin.com" },
  { icon: instagram, url: "https://instagram.com" },
];

