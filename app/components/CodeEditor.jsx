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

function CodeEditor({
  onCodeChange,
  language,
  theme,
  icon,
  background,
  currentPadding,
}) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(500);

  const handleResize = (e, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={450}
      minWidth={510}
      maxWidth={1500}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: "red",
      }}
    >
      <div className="code-block">
        <AceEditor
          value="import React from 'react';"
          name="code-editor-id"
          theme="monokai"
          mode={language}
          fontSize={16}
          showGutter={false}
          wrapEnabled={true}
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
