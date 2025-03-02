import { useParams } from "react-router";
import { useEffect, useState } from "react";
import NoPage from "./NoPage";
import Markdown from 'react-markdown'

type ReadPageProps = {
    readId: string;
    chapterId: string;
}

function ReadPage() {

    let {readId, chapterId} = useParams<ReadPageProps>();
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        fetch(`/myWebsite/reads/${readId}/${chapterId}.md`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch the file');
                }
                return res.text()
            })
            .then((text) => {
                setMarkdownContent(text);
            })
            .catch((error) => console.error("Error loading text file:", error));
    }, [readId, chapterId]);


    return(
        <div id='main'>
            <section className='post'>
                <Markdown>{markdownContent}</Markdown>
            </section>
        </div>
    )
//     const myPost: Post | undefined = myCollections['blog'].find((post: Post) => (
//         post.url === readId))

//     if (!myPost) {
//         return NoPage()
//     }
    

//     useEffect(() => {
//       fetch(`/myWebsite/blog/${blogId}.txt`)
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Failed to fetch the file');
//             }
//             return res.text()
//         })
//         .then((text) => {
//             const parsedParagraphs = text
//                 .trim()
//                 .split(/\n\s*\n/) // splitting paragraphs (double newlines)
//                 .map((para) => para.split(/\n/)); // splitting lines within each paragraph
//             setParagraphs(parsedParagraphs);
//         })
//         .catch((error) => console.error("Error loading text file:", error));
//     }, []);

//     return(
//         <div id="main">
//             <section className="post">
//                 <header className="major">
//                     <h1>{myPost.title}</h1>
//                     <p>{myPost.description}</p>
//                 </header>
//                 {myPost.details && <p><em>{myPost.details}</em></p>}
//                 {paragraphs.map((lines, i) => (
//                     <p key={i}>
//                         {lines.map((line, j) => (
//                         <span key={j}>
//                             {line}
//                             {j < lines.length - 1 && <br />}
//                         </span>
//                         ))}
//                     </p>
//                 ))}
//             </section>
//         </div>
//     )
}

export default ReadPage;