import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { myCollections } from "./Data";
import { Post } from "./Types";
import NoPage from "./NoPage";

function BlogPost() {
    const [paragraphs, setParagraphs] = useState<string[][]>([]);

    const params = useParams()
    const blogId: string = params.blogId as string;
    const myPost: Post | undefined = myCollections['blog'].find((post: Post) => (
        post.url === blogId))

    if (!myPost) {
        return NoPage()
    }
    

    useEffect(() => {
      fetch(`/myWebsite/blog/${blogId}.txt`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch the file');
            }
            return res.text()
        })
        .then((text) => {
            const parsedParagraphs = text
                .trim()
                .split(/\n\s*\n/) // splitting paragraphs (double newlines)
                .map((para) => para.split(/\n/)); // splitting lines within each paragraph
            setParagraphs(parsedParagraphs);
        })
        .catch((error) => console.error("Error loading text file:", error));
    }, []);

    return(
        <div id="main">
            <section className="post">
                <header className="major">
                    <h1>{myPost.title}</h1>
                    <p>{myPost.description}</p>
                </header>
                {myPost.details && <p><em>{myPost.details}</em></p>}
                {paragraphs.map((lines, i) => (
                    <p key={i}>
                        {lines.map((line, j) => (
                        <span key={j}>
                            {line}
                            {j < lines.length - 1 && <br />}
                        </span>
                        ))}
                    </p>
                ))}
            </section>
        </div>
    )
}

export default BlogPost