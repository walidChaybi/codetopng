"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { languages } from "./utils/utils";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  return (
    <main>
      <header>
        <LanguageSelector />
      </header>
      <div className="code-editor">
        <CodeEditor language={language} />
      </div>
    </main>
  );
}
