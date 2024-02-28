import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";

export const languages = [
  {
    name: "Javascript",
    icon: <SiJavascript color="yellow" size={20} />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 color="babyblue" size={20} />,
  },
  {
    name: "Python",
    icon: <SiPython size={20} />,
  },
  {
    name: "Java",
    icon: <FaJava color="red" size={20} />,
  },
  {
    name: "MySql",
    icon: <SiMysql color="orange" size={20} />,
  },
  {
    name: "css",
    icon: <SiCsswizardry color="skyblue" size={20} />,
  },
];

export const themes = [
  {
    name: "Monokai",
  },

  {
    name: "Twilight",
  },

  {
    name: "Terminal",
  },
];

export const backgrounds = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",
];
