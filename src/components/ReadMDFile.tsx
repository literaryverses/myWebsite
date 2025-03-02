import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

type ReadMDFileProps = {
  dir: string;
  file: string;
};

function ReadMDFile({ dir, file }: ReadMDFileProps) {
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
      })
      .catch((error) => {
        console.error('Error loading text file:', error);
      });
  }, [file]);

  return <Markdown>{markdownContent}</Markdown>;
}

export default ReadMDFile;
