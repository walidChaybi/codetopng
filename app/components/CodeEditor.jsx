"use client";
import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-java";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { initialCode } from "../utils/utils";

function CodeEditor({
  onCodeChange,
  language,
  theme,
  icon,
  background,
  padding,
}) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(500);

  const [code, setCode] = useState(initialCode);
  const [title, setTitle] = useState("untitled-1");

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10) + 1);
    setHeight(parseInt(newHeight, 10));
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={500}
      maxHeight={800}
      minWidth={500}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
      }}
    >
      <div
        className="code-block"
        style={{
          padding: padding,
        }}
      >
        <div className="handle absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-100"></div>
        <div
          className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div
          className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full
        bg-slate-300 hover:bg-slate-50 "
        ></div>
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>
          <div
            className="input-control w-full tooltip"
            data-tip="Click to change the name"
          >
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="w-full text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>
          <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            {icon}
          </div>
        </div>
        <AceEditor
          value={code}
          name="code-editor-id"
          theme={theme.toLowerCase()}
          mode={language.toLowerCase()}
          fontSize={16}
          showGutter={false}
          wrapEnabled={true}
          height={`calc(${height}px - ${padding}*3 - 52px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          className="ace-editor-container"
          editorProps={{ $blockScrolling: true }}
        ></AceEditor>
      </div>
    </Resizable>
  );
}

export default CodeEditor;
