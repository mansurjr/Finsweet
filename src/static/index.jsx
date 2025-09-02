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

import pancel from "../assets/pancel.svg";
import chat from "../assets/chat.svg";
import time from "../assets/time.svg";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

import player from "../assets/Pointer.svg";
import gray_player from "../assets/gray-player.svg";

import plus from "../assets/plus.svg";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import blog from "../assets/blog.png";


export const NAVBAR_MENU = [
  { name: "Home", path: "/", component: Home },
  { name: "About Us", path: "/about", component: About },
  { name: "Pricing", path: "/pricing", component: Pricing },
  { name: "Work", path: "/work", component: Work },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "Contact Us", path: "/contact", component: Contact },
];

export const FOOTER_ICONS = [
  { icon: <FaFacebook />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaLinkedin />, url: "https://linkedin.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
];

const description =
  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi. Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed mi.";

export const CARD_DATA = [
  {
    title: "Uses Client First",
    description,
  },
  {
    title: "Two Free Revision Round",
    description,
  },
  {
    title: "Template Customization",
    icon: pancel,
    description,
  },
  {
    title: "24/7 Support",
    icon: chat,
    description,
  },
  {
    title: "Quick Delivery",
    icon: time,
    description,
  },
  {
    title: "Hands-on approach",
    description,
  },
];

export const teamMembers = [
  {
    name: "John Smith",
    role: "CEO",
    avatar: avatar1,
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Simon Adams",
    role: "CTO",
    avatar: avatar2,
    socials: null,
  },
  {
    name: "Paul Jones",
    role: "Design Lead",
    avatar: avatar3,
    socials: null,
  },
  {
    name: "Sara Hardin",
    role: "Project Manager",
    avatar: avatar4,
    socials: null,
  },
];
export const pricing = [
  {
    id: 1,
    price: "$299",
    kind: "Per Design",
    title: "Landing Page ",
    description: "When you’re ready to go beyond prototyping in Figma, ",
    player: player,
    gray_player: gray_player,
    option1: "All limited links",
    option2: "Own analytics platform",
    option3: "Chat support",
    option4: "Optimize hashtags",
    option5: "Unlimited users",
    buttton: "Get started",
  },
  {
    id: 2,
    price: "$399",
    kind: "Multi Design",
    title: "Multi Design",
    description:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    player: player,
    gray_player: gray_player,
    option1: "All limited links",
    option2: "Own analytics platform",
    option3: "Chat support",
    option4: "Optimize hashtags",
    option5: "Unlimited users",
    buttton: "Get started",
  },
  {
    id: 3,
    price: "$499 +",
    kind: "Per Design",
    title: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma,",
    player: player,
    option1: "All limited links",
    option2: "Own analytics platform",
    option3: "Chat support",
    option4: "Optimize hashtags",
    option5: "Unlimited users",
    option6: "Assist and Help",
    buttton: "Contact us",
  },
];

export const faq = [
  {
    id: 1,
    number: "01",
    title: "How much time does it take ?",
    img: plus,
  },
  {
    id: 2,
    number: "02",
    title: "What is your class naming convention ?",
    img: plus,
  },
  {
    id: 3,
    number: "03",
    title: "How do we communicate ?",
    img: plus,
  },
  {
    id: 4,
    number: "04",
    title: "I have a bigger project. Can you handle it ?",
    img: plus,
  },

  {
    id: 5,
    number: "05",
    title: "What is your class naming convention ?",
    img: plus,
  },
];

export const blogs = [
  {
    id: 1,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    id: 2,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    id: 3,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    id: 4,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    id: 5,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
  {
    id: 6,
    img: blog,
    date: "27 Jan 2021",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    button: "Read More",
  },
];