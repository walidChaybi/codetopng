"use client";
import { useEffect, useRef, useState } from "react";
import CodeEditor from "./components/CodeEditor";
<<<<<<< HEAD
import { backgrounds, initialCode, languages, paddings } from "./utils/utils";
=======
import { backgrounds, languages } from "./utils/utils";
>>>>>>> a6000a5e942978f92a46db8e4220f01e6f21c39e
import { themes } from "./utils/utils";
import LanguageSelector from "./components/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector";
<<<<<<< HEAD
import PaddingSelector from "./components/PaddingSelector";
import { FaDownload } from "react-icons/fa";
import walidchaybi from "../public/walidchaybi.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import html2canvas from "html2canvas";

import Link from "next/link";
=======
>>>>>>> a6000a5e942978f92a46db8e4220f01e6f21c39e

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);

  const [theme, setTheme] = useState(themes[0].name);
  const [background, setBackground] = useState(backgrounds[0]);
<<<<<<< HEAD
  const [padding, setPadding] = useState(paddings[0]);

  const editorRef = useRef(null);

  const takeScreenshot = async () => {
    const screenshotTarget = editorRef.current;
    const canvas = await html2canvas(screenshotTarget);
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.download = "code.png";
    link.href = image;
    link.click();
  };

  console.log(walidchaybi);

  return (
    <main className=" flex flex-col items-center justify-between">
      <header className="glass  flex gap-4 items-center mt-6 w-[940px] p-5 absolute top-0 left-1/2 translate-x-[-50%] z-10 bg-[#292929] rounded border-[#3c3c3c] shadow-md">
=======

  return (
    <main className=" flex flex-col items-center justify-between">
      <header className="glass  flex gap-4 mt-6 w-[940px] p-5 absolute top-0 left-1/2 translate-x-[-50%] z-10 bg-[#292929] rounded border-[#3c3c3c] shadow-md">
>>>>>>> a6000a5e942978f92a46db8e4220f01e6f21c39e
        <LanguageSelector
          activeIcon={activeIcon}
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
<<<<<<< HEAD
        <PaddingSelector padding={padding} setPadding={setPadding} />
        <div className="ml-auto">
          <p className="text-center font-bold text-gray-100 mb-2">
            Transform to PNG
          </p>

          <button
            className="export-btn flex gap-2 items-center bg-slate-900 py-3 px-8 rounded-md hover:bg-blue-300 duration-300 group "
            onClick={takeScreenshot}
          >
            <p className="text-sky-300 group-hover:text-black duration-300">
              Export
            </p>
            <FaDownload className="group-hover:text-black text-sky-300 duration-300" />
          </button>
        </div>
      </header>
      <div className="code-editor-ref m-[14rem]" ref={editorRef}>
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          padding={padding}
        />
=======
      </header>
      <div className="code-editor-ref m-[14rem]">
        <CodeEditor language={language} icon={activeIcon} theme={theme} />
>>>>>>> a6000a5e942978f92a46db8e4220f01e6f21c39e
      </div>
      <footer className="footer footer-center p-4 bg-gray-700 text-primary-content flex justify-center items-center gap-14">
        <Link href="/">
          <FaLinkedin color="white" size={35} />
        </Link>
        <aside>
          <img src={walidchaybi.src} alt="walid chaybi" />
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="/">
              <FaGithub color="white" size={35} />
            </Link>
          </div>
        </nav>
      </footer>
    </main>
  );
}
