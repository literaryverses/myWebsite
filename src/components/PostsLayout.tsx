import { myCollections } from "./Data"
import { Post } from "./Types";

type PostsLayoutProps = {
    title: string
}

function PostsLayout({title}: PostsLayoutProps) {
    let posts: Post[] = [];

    if (title === 'projects') {
        posts = myCollections[title];
    } else {
        // everything for blog
        posts = Object.entries(myCollections)
        .filter(([key]) => key !== 'projects')
        .map(([key, value]) => 
            value.map(post => ({
                ...post,
                'title': key,
                'url': `/myWebsite/#/${key}/${post.url}`,
            }))
        )
        .flat();
    }

    // sort by date to render in chronological order
    posts.sort((a, b) => a.date.getTime() + b.date.getTime());

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
                            <h2><a href={post.url}></a></h2>
                            <h4>{post.description}</h4>
                        </header>
                        <a href={post.url}
                        className="image fit"><img src={`/myWebsite/${post.imageUrl}`}/></a>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default PostsLayout