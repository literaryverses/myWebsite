import { useParams, useNavigate } from 'react-router';
import { myLists } from '../components/Data';
import ReadMDFile from '../components/ReadMDFile';

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
              <option value={chapter} key={chapter}>
                {formatChapterId(chapter)}
              </option>
            ))}
          </select>
        </div>
        <hr />
        <ReadMDFile readId={readId} chapterId={chapterId} />
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
        <div className="col-12">
          <select
            className="demo-category"
            id="demo-category"
            value={chapterNum}
            onChange={(e) => gotoChapter(Number(e.target.value))}
          >
            <option value="">- Chapters -</option>
            {Array.from({ length: maxChapter + 1 }, (_, chapter) => (
              <option value={chapter} key={chapter}>
                {formatChapterId(chapter)}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
}

export default ReadPage;
