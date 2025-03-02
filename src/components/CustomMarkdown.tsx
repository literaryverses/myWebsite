import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import Modal from './Modal';
import remarkGfm from 'remark-gfm';

const CustomMarkdown = ({
  markdown,
  dir,
}: {
  markdown: string;
  dir: string;
}) => {
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

  const CustomLink: React.FC<{ href?: string; children?: React.ReactNode }> = ({
    href,
    children,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const id = href?.replace('#', ''); // Extract the id from the href

    if (id && footnotes[id]) {
      return (
        <>
          <span
            style={{
              color: isHovered ? 'blue' : 'black',
              backgroundColor: 'yellow',
              cursor: 'pointer',
            }}
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {children}
          </span>
          {isOpen && (
            <Modal
              markdown={footnotes[id]}
              visibleHandler={() => setIsOpen(false)}
            />
          )}
        </>
      );
    }
    return <a href={href}>{children}</a>;
  };

  return (
    <Markdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        a: CustomLink,
      }}
    />
  );
};

export default CustomMarkdown;
