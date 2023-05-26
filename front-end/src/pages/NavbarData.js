import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Login",
    path: "/Login",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "User",
    path: "/User",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Acceuil",
    path: "/Acceuil",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Les travaux",
    path: "/Travaux",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "à propos",
    path: "/Apropos",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
