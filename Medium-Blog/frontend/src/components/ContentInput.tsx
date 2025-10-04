import { useState } from "react";
import { useAutosizeTextArea } from "../hooks";

export const ContentInput = () => {
  const [content, setContent] = useState("");
  const contentRef = useAutosizeTextArea(content);

  return (
    <textarea
      ref={contentRef}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Write your story..."
      className="w-full resize-none overflow-hidden text-base outline-none"
      rows={6}
    />
  );
};
