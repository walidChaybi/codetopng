"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { languages } from "./utils/utils";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md">
        <LanguageSelector />
      </header>
      <div className="code-editor-ref mt-[14rem]">
        <CodeEditor language={language} icon={languages[1].icon} />
      </div>
    </main>
  );
}
