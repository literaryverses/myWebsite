import { useState } from "react";
import Markdown from "react-markdown";
import Modal from "./Modal";

const footnotes = {
    "1":  "[Ishmael](http://en.wikipedia.org/wiki/Ishmael): A wanderer, the older son of the biblical Abraham.",
    "2": "Example Description"
};

const CustomMarkdown = ({ markdownContent }: { markdownContent: string }) => {
  const [modalContent, setModalContent] = useState< string | null>(null);

  // function to extract @Example@1 pattern
  const renderCustomSyntax = (text: string) => {
    const regex = /@([^@]+)@(\d+)/g; // Matches @word@id
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, word, id] = match;
      const key = id as keyof typeof footnotes;
      const beforeText = text.slice(lastIndex, match.index);

      parts.push(
        beforeText,
        <span
          key={match.index}
          style={{ backgroundColor: "yellow", cursor: "pointer" }}
          onClick={() => setModalContent(footnotes[key])}
        >
          {word}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    parts.push(text.slice(lastIndex));
    return <>{parts}</>;
  };

  return (
    <>
      <Markdown
        components={{
          p: ({ children }) => <p>{renderCustomSyntax(String(children))}</p>,
        }}
      >
        {markdownContent}
      </Markdown>

      <Modal content={modalContent} setContent={setModalContent} />
    </>
  );
};

export default CustomMarkdown;
