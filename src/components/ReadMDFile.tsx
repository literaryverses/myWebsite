import { useEffect, useState } from 'react';
import CustomMarkdown from './CustomMarkdown';

type ReadMDFileProps = {
  dir: string;
  file: string;
};

function ReadMDFile({ dir, file }: ReadMDFileProps) {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch(`/myWebsite/${dir}/${file}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the file');
        }
        return res.text();
      })
      .then((text) => {
        setMarkdown(text);
      })
      .catch((error) => {
        console.error('Error loading text file:', error);
      });
  }, [file]);

  return <CustomMarkdown markdown={markdown} dir={dir} />;
}

export default ReadMDFile;
