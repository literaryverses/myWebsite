import { myCollections } from "./Data"
import { Post } from "./Types";

type PostsLayoutProps = {
    title: string
}

function PostsLayout({title}: PostsLayoutProps) {
    const posts = myCollections[title];

    return (
        <div id="main">
            <section className="posts">
                <header className="major">
                    <h1>{title}</h1>
                </header>
                <hr/>
                {posts.map((post: Post) => (
                    <article key={post.date.toDateString()}>
                        <header>
                            <span className="date">{post.date.toDateString()}</span>
                            <h2><a href={title === 'projects' ? post.url : `/myWebsite/#/blog/${post.url}`}>{post.title}</a></h2>
                            <h4>{post.description}</h4>
                        </header>
                        <a href={title === 'projects' ? post.url : `/myWebsite/#/blog/${post.url}`}
                        className="image fit"><img src={`/myWebsite/${post.imageUrl}`}/></a>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default PostsLayout