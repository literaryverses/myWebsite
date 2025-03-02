import Markdown from 'react-markdown';
import { createPortal } from 'react-dom';
import reactBreaks from 'remark-breaks';

type ModalProps = {
  content: string | null;
  setContent: (content: string | null) => void;
};

const Modal = ({ content, setContent }: ModalProps) => {
  return (
    <>
      {content &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '20px',
              border: '1px solid black',
              zIndex: 1000,
            }}
          >
            <Markdown>{content}</Markdown>
            <button onClick={() => setContent(null)}>Close</button>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
