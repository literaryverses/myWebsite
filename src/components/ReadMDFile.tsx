import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

type ReadMDFileProps = {
  readId: string | undefined;
  chapterId: string | undefined;
};

function ReadMDFile({ readId, chapterId }: ReadMDFileProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    fetch(`/myWebsite/reads/${readId}/${chapterId}.md`)
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
  }, [chapterId]);

  return <Markdown>{markdownContent}</Markdown>;
}

export default ReadMDFile;
