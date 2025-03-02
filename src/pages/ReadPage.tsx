import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { myLists } from '../components/Data';
import ReadMDFile from '../components/ReadMDFile';
import Pagination from '../components/Pagination';

type ReadPageProps = {
  readId: string;
  chapterId: string;
};

function ReadPage() {
  const { readId, chapterId } = useParams<ReadPageProps>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');

  const maxChapter: number = Number(
    myLists['reads'].find((read) => read.url === readId)?.details
  );
  
  const chapterNum = Number(chapterId) || 0;
  const gotoChapter = (chapter: number) =>
    {
        const formatChapterId = (chapter: number) =>
            chapter.toString().padStart(3, '0');        
        navigate(`/reads/${readId}/${formatChapterId(chapter)}`);
    };

  return (
    <div id="main">
      <section className="post">
        <Pagination totalPages={maxChapter} currentPage={chapterNum} label={'Chapter'} title={title} gotoPage={gotoChapter} />
        <hr />
        <ReadMDFile dir={`reads/${readId}`} file={String(chapterId)} setTitle={setTitle} />
        <hr />
        <Pagination totalPages={maxChapter} currentPage={chapterNum} label={'Chapter'} title={title} gotoPage={gotoChapter} />
      </section>
    </div>
  );
}

export default ReadPage;
