import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { myLists } from '../components/Data';

type ReadPageProps = {
  readId: string;
  chapterId: string;
};

function ReadPage() {
  const { readId, chapterId } = useParams<ReadPageProps>();
  const navigate = useNavigate();

  const maxChapter: number = Number(
    myLists['reads'].find((read) => read.url === readId)?.details
  );

  const chapterNum = Number(chapterId) || 0;
  const formatChapterId = (chapter: number) =>
    chapter.toString().padStart(3, '0');

  const nextChapterId = chapterNum + 1;
  const prevChapterId = chapterNum - 1;

  const gotoChapter = (chapter: number) =>
    navigate(`/reads/${readId}/${formatChapterId(chapter)}`);

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

  return (
    <div id="main">
      <section className="post">
        <ul className="actions fit">
          <li>
            <button
              className={`button primary ${chapterNum === 0 ? 'disabled' : ''}`}
              onClick={() => gotoChapter(prevChapterId)}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              className={`button primary ${chapterNum === maxChapter ? 'disabled' : ''}`}
              onClick={() => gotoChapter(nextChapterId)}
            >
              Next
            </button>
          </li>
        </ul>
        <div className="col-12">
          <select
            className="demo-category"
            id="demo-category"
            value={chapterNum}
            onChange={(e) => gotoChapter(Number(e.target.value))}
          >
            <option value="">- Chapters -</option>
            {Array.from({ length: maxChapter + 1 }, (_, chapter) => (
              <option value={chapter}>{formatChapterId(chapter)}</option>
            ))}
            {/* <option value="1">Manufacturing</option>
                        <option value="1">Shipping</option>
                        <option value="1">Administration</option>
                        <option value="1">Human Resources</option> */}
          </select>
        </div>
        <hr />
        <Markdown>{markdownContent}</Markdown>
        <hr />
        <ul className="actions fit">
          <li>
            <button
              className={`button primary ${chapterNum === 0 ? 'disabled' : ''}`}
              onClick={() => gotoChapter(prevChapterId)}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              className={`button primary ${chapterNum === maxChapter ? 'disabled' : ''}`}
              onClick={() => gotoChapter(nextChapterId)}
            >
              Next
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ReadPage;
