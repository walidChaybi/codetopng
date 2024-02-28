"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, languages } from "./utils/utils";
import { themes } from "./utils/utils";
import LanguageSelector from "./components/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);

  const [theme, setTheme] = useState(themes[0].name);
  const [background, setBackground] = useState(backgrounds[0]);

  return (
    <main className=" flex flex-col items-center justify-between">
      <header className="glass  flex gap-4 mt-6 w-[940px] p-5 absolute top-0 left-1/2 translate-x-[-50%] z-10 bg-[#292929] rounded border-[#3c3c3c] shadow-md">
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
      </header>
      <div className="code-editor-ref m-[14rem]">
        <CodeEditor language={language} icon={activeIcon} theme={theme} />
      </div>
    </main>
  );
}
