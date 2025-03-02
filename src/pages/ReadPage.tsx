import { useState } from "react"
import { useParams } from "react-router";

type ReadPageProps = {
    readId: string;
    chapterId: string;
}

function ReadPage() {
    const [paragraphs, setParagraphs] = useState<string[][]>([]);

    let {readId, chapterId} = useParams<ReadPageProps>()
    return(<div id='main'>{readId} and {chapterId}</div>)
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