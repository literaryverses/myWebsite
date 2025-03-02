import Markdown from 'react-markdown';
import { createPortal } from 'react-dom';

type ModalProps = {
  markdown: string | null;
  visibleHandler: () => void;
};

const Modal = ({ markdown, visibleHandler }: ModalProps) => {
  return (
    <>
      {createPortal(
          < span
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
            <Markdown>{markdown}</Markdown>
            <button className={'button primary small'} onClick={visibleHandler}>Close</button>
          </span>,
          document.body
        )}
    </>
  );
};

export default Modal;
