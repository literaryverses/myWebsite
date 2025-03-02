import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

type ReadMDFileProps = {
  dir: string;
  file: string;
  setTitle: (title: string) => void;
};

function ReadMDFile({ dir, file, setTitle }: ReadMDFileProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    fetch(`/myWebsite/${dir}/${file}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the file');
        }
        return res.text();
      })
      .then((text) => {
        setMarkdownContent(text);
        const lines = text.split('\n');
        console.log(lines.filter(line => line.trim() !== "")[1]);
        setTitle(lines.filter(line => line.trim() !== "")[1]);
      })
      .catch((error) => {
        console.error('Error loading text file:', error);
      });
  }, [file]);

  return <Markdown>{markdownContent}</Markdown>;
}

export default ReadMDFile;
