import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import Modal from "./Modal";

const CustomMarkdown = ({ markdownContent, dir }: { markdownContent: string, dir: string }) => {
  const [modalContent, setModalContent] = useState< string | null>(null);
  const [footnotes, setFootnotes] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`/myWebsite/${dir}/footnotes.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the file');
        }
        return res.json();
      })
      .then((notes) => {
        setFootnotes(notes);
      })
      .catch((error) => {
        console.error('Error loading text file:', error);
      });
  }, []);

  // function to extract @Example@1 pattern
  const renderCustomSyntax = (text: string) => {
    const regex = /@([^@]+)@(\d+)/g;
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
